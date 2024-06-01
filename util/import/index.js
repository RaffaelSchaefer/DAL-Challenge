import 'dotenv/config'
import XLSX from 'xlsx';
import PocketBase from 'pocketbase';

const pb = new PocketBase(process.env.PB_ADDRESS);

async function authenticate() {
    const authData = await pb.admins.authWithPassword(process.env.PB_MAIL, process.env.PB_PASSWORD);
    if (pb.authStore.isValid) {
        console.log('Authenticated successfully.');
    } else {
        console.error('Authentication failed.');
    }
}

function parseXlsx(path) {
    const workbook = XLSX.readFile(path);
    return Object.keys(workbook.Sheets).map(sheetName => ({
        name: sheetName,
        data: XLSX.utils.sheet_to_json(workbook.Sheets[sheetName])
    }))
}
/**
 * 
 * @param {string} str 
 * @returns {string} ID
 */
function createID(str) {
    if (String(str).length > 15) throw new Error("Max ID size is 15");
    return '0'.repeat(15 - String(str).length) + String(str).replace(".", "_");
}

function destroyID(ID) {
    if (ID.length !== 15) throw new Error("ID size must be exactly 15 characters");
    return ID.replace(/^0+/, '');
}

function excelDateToJSDate(excelDate) {
    const unixEpochOffset = 25569;
    const millisecondsInADay = 24 * 60 * 60 * 1000;
    const jsDate = new Date((excelDate - unixEpochOffset) * millisecondsInADay);
    return jsDate;
}

async function importData(path) {
    await authenticate();
    const sheet = parseXlsx(path);
    const costumers = sheet[1].data;
    const users = sheet[2].data;
    const assets = sheet[3].data;
    const contracts = sheet[4].data;
    /*for (const c of costumers) {
        const address = await pb.collection('addresses').create({
            "streetname": c['Straße'],
            "postalcode": c['Plz'],
            "townname": c['Ort'],
        });
        const row = {
            "id": createID(c['Kunde ID']),
            "name": c['Name'],
            "address": address.id,
            "line_of_business": c['Geschäftszweig'],
            "e_mail": c['Email'],
            "phone": c['Telefon'],
            "company_registration_number": c['Handelsregisternummer'],
            "district_court": c['Amtsgericht'],
            "url": c['Email'].split('@')[1],
        };
        const customer = await pb.collection('customers').create(row);
    }
    console.log('Step 1: Customers imported successfully.');
    for (const u of users) {
        const pw = Math.random().toString(36).slice(-8);
        const user = await pb.collection('users').create(
            {
                "id": createID(u['Nutzer']),
                "username": u['Email']
                    .split('@')[0]
                    .replace("ü", "ue")
                    .replace("ä", "ae")
                    .replace("ö", "oe")
                    .replace("ß", "ss"),
                "email": u['Email'],
                "emailVisibility": true,
                "password": pw,
                "passwordConfirm": pw,
                "first_name": u['Vorname'],
                "last_name": u['Name'],
                "phone_number": u['Telefon'],
            }
        );
        const matchedURL = await pb.collection('customers').getList(1, 50, {
            filter: pb.filter(
                'url ~ {:handle}',
                { handle: u['Email'].split('@')[1] }
            ),
        })
        const connection = await pb.collection('customer_user').create({
            "isUser": createID(user.id),
            "works_for": matchedURL.items[0].id,
            "gp_number": u['GP-Nummer'],
        });
    }
    console.log('Step 2: Users imported successfully.');
    for (const a of assets) {
        const address = await pb.collection('addresses').create({
            "streetname": a['Straße'],
            "postalcode": a['PLZ'],
            "townname": a['Ort'],
        });
        const record = await pb.collection('assets').create({
            "id": createID(a['Asset']),
            "type": a['Objektart/Bezeichnung'],
            "address": address.id,
            "condition": a["Zustand"],
            "object_construction": a["Objekterrichtung"],
            "property_type": a["Grundstücksart"],
            "subtenant": a["Untermieter"].trim() == "ja" ? true : false
        });
    }
    console.log('Step 3: Assets imported successfully.');*/
    for (const v of contracts) {
        console.log(v)
        const record = await pb.collection('contracts').create({
            "id": createID(v['Vertrag']),
            "type": v['Typ'],
            "leasing_property_company": v['Leasingobjektgesellschaft1)'],
            "customers": createID(v['Kunde']),
            "rent_start": excelDateToJSDate(v['Mietbeginn']),
            "runtime": v['Laufzeit [Monate]'],
            "rent_end": excelDateToJSDate(v['Mietende']),
            "payment_type": v['Zahlungsrhythmus'] == 'monatlich' ? "monthly" : "yearly",
            "total_investment_costs": v['Gesamtinvestitionskosten'],
            "direct_debit": v['Lastschrifteinzug'] == "ja" ? true : false,
            "asset": createID(v['Asset'])
        });
    }
}

try {
    importData('../../data/Fake-Daten.xlsx');
}
catch (e) {
    console.error(e);
}
