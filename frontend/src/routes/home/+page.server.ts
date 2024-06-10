import { serializeNonPOJOs } from '$lib/helpers';
import type DLAUser from '../../interfaces/dla_user.js';

export const load = async ({ locals }) => {
    const userArr = await locals.pb.collection("customer_user").getList(1, 50, {
        expand: "works_for, isUser",
        //@ts-ignore
        filter: locals.pb.filter("isUser ~ {:id}", { id: locals.user.id }),
    });
    const user = userArr.items[0];
    const customerArr = await locals.pb.collection("contracts").getList(1, 50, {
        expand: "asset, asset.address",
        filter: locals.pb.filter("customers ~ {:id}", { id: user.works_for }),
    });
    for (const contract of customerArr.items) {
        const invoices = await locals.pb.collection("invoices").getList(1, 50, {
            filter: locals.pb.filter("contract ~ {:id}", {
                id: contract.id,
            }),
        });
        contract.invoices = invoices.items;
        const events = await locals.pb.collection('contract_events').getList(1, 50, {
            filter: locals.pb.filter("contract ~ {:id}", {
                id: contract.id,
            }), sort: "-date"
        });
        contract.events = events.items;
    }
    const employee: DLAUser = await locals.pb
        .collection("dla_user")
        .getOne("ua6pfcqf53phimk", {
            expand: "isUser",
        });
    employee.user = employee.expand.isUser;
    return {
        user: serializeNonPOJOs(user),
        contracts: serializeNonPOJOs(customerArr).items,
        employee: serializeNonPOJOs(employee),
    };
};