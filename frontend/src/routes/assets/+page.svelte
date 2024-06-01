<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>
<script>
    import PocketBase from 'pocketbase';

    let records = [];
    let errorMessage = '';

    const authenticateAndFetchData = async () => {
        try {
            const pb = new PocketBase('http://10.32.6.48:8090');

            // Authentifizierung
            const authData = await pb.admins.authWithPassword('s20a3c@umwelt-campus.de', 'code-a-thon2024');
            if(pb.authStore.isValid) {
    

            // Zugriff auf Authentifizierungsdaten
            //console.log(pb.authStore.isValid);
            //console.log(pb.authStore.token);
            //console.log(pb.authStore.model.id);

            // Daten von BrauBier abrufen
            const BrauBier = await pb.collection('customers').getList(1, 50, {
                filter: 'name = "BrauBier GmbH"',
            });
            // ID von BrauBier
            const BrauBierId = BrauBier.items[0].id;
            // Verträge
            const contracts = await pb.collection('contracts').getFullList({
                filter: `customers = "${BrauBierId}"`,
            });
            // ausgabe div definieren
            const ausgabe = document.getElementById('ausgabe');
            // für alle verträge ein eintrag
            for (var i = 0; i < contracts.length; i++) {
                var contract = contracts[i];
                // ausgabe des vertragsnamen
                ausgabe.innerHTML += "<br><strong><u>Vertrag mit: " + contract['leasing_property_company'] + "</u></strong><br>";
                // asset von vertrag
                var assets = contract['asset'];
                const asset = await pb.collection('assets').getFullList({
                    filter: `id = "${assets}"`,
                });
                // addresse von asset
                const address = await pb.collection('addresses').getFullList({
                    filter: `id = "${asset[0].address}"`,
                });
                // ausgabe Asset
                ausgabe.innerHTML += "<div style='text-indent:10px;'><i><b>Asset:</b></i> " + asset[0].type + " (" + address[0].streetname + ", " + address[0].postalcode + " " + address[0].townname + ")<br></div>"; 
                // gesamtinvestition
                ausgabe.innerHTML += "<div style='text-indent:10px'><i><b>Gesamtinvestition:</b></i> " + contract.total_investment_costs + "</div>";
                // vertragsende
                ausgabe.innerHTML += "<div style='text-indent:10px'><i><b>Vertragslaufzeit bis:</b></i> " + datumsumwandlung(contract.rent_end) + "</div>";
                // vertragsbeginn
                ausgabe.innerHTML += "<div style='text-indent:10px'><i><b>Vertragsbeginn:</b></i> " + datumsumwandlung(contract.rent_start) + "</div>";
                // intervall übersetzung
                if(contract.payment_type == 'monthly') {
                    var zahlungsintervall = 'Monatlich';
                }
                if(contract.payment_type == 'yearly') {
                    var zahlungsintervall = 'Jährlich';
                }
                // intervall
                ausgabe.innerHTML += "<div style='text-indent:10px'><i><b>Zahlungsintervall:</b></i> " + zahlungsintervall + "</div>";
                // rechnungen
                const invoices = await pb.collection('invoices').getFullList({
                    filter: `contract = "${contract.id}"`,
                });
                // rechnungen ausgeben
                if(invoices.length > 0) {
                    ausgabe.innerHTML += "<div style='text-indent:10px'><i><b>Rechnungen:</b></i></div>";
                for(var j = 0; j < invoices.length; j++){
                    console.log(invoices[j]);
                    if(invoices[j].paid == false) {
                        ausgabe.innerHTML += "<div style='text-indent:40px; color: #9e0000;'>" + datumsumwandlung(invoices[j].date) + " ("+ invoices[j].amount + "€)</div>";
                    }
                    if(invoices[j].paid == true) {
                        ausgabe.innerHTML += "<div style='text-indent:40px; color: #00733a;'>" + datumsumwandlung(invoices[j].date) + " ("+ invoices[j].amount + "€)</div>";
                    }
                }
                }
                // events
                const events = await pb.collection('contract_events').getFullList({
                    filter: `contract = "${contract.id}"`,
                });
                // events ausgeben
                if(events.length > 0) {
                    ausgabe.innerHTML += "<div style='text-indent:10px'><i><b>Ereignisse / Veränderungen:</b></i></div>";
                for(var k = 0; k < events.length; k++){
                    console.log(events[k]);
                    ausgabe.innerHTML += "<div style='text-indent:40px'>" + datumsumwandlung(events[k].date) + ": "+ events[k].event + "</div>";
                }
                }
            }

        }} catch (error) {
            console.error('Error:', error);
            errorMessage = error.message || 'Error fetching data';
        }
    };

    function datumsumwandlung (datum) {
        // Ursprüngliches Datum als String
        var originalDateStr = datum;

        // Datum als JavaScript-Objekt parsen
        var originalDate = new Date(originalDateStr);

        // Werte für Tag, Monat und Jahr aus dem Datum extrahieren
        var day = originalDate.getUTCDate();
        var month = originalDate.getUTCMonth() + 1; // Monate werden von 0 bis 11 gezählt, daher +1
        var year = originalDate.getUTCFullYear();

        // Datum im gewünschten Format zusammenstellen
        var formattedDate = `${day < 10 ? '0' : ''}${day}.${month < 10 ? '0' : ''}${month}.${year}`;

        return formattedDate;
    }

    // Funktion beim Laden der Komponente aufrufen
    authenticateAndFetchData();
</script>

<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        padding: 8px;
        border-bottom: 1px solid #ccc;
    }

    .error {
        color: red;
    }
</style>

<h1>BrauBier GmbH Übersicht</h1>
<div style="margin: 30px;">
<div id='ausgabe'></div>
</div>