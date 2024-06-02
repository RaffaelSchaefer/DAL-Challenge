<script lang="ts">
    import {
        Card,
        CardHeader,
        CardBody,
        CardTitle,
        CardSubtitle,
        CardText,
        CardFooter,
        Row,
        Col,
        Container,
        Badge,
        Button,
        Icon,
    } from "@sveltestrap/sveltestrap";
    import DALEmployeeView from "../../components/DALEmployeeView.svelte";
    import Navigation from "../../components/Navigation.svelte";

    export let data;

    function destroyID(id: string) {
        while (id[0] == "0") {
            id = id.substring(1);
        }
        return id.replace("_", ".");
    }

    function getPDFURL(invoice: any) {
        return `http://10.32.6.48:8090/api/files/invoices/${invoice.id}/${invoice.file}`;
    }
</script>

<Navigation />
<Container>
    <h1>Vertrags Übersicht der {data.user.expand.works_for.name}</h1>
    <Row></Row>
    {#each data.contracts as contract}
        <Card class="mb-4">
            <CardHeader>
                <CardTitle>Vertrag: {destroyID(contract.id)}</CardTitle>
            </CardHeader>
            <CardBody>
                <CardSubtitle>
                    Zwischen {contract.leasing_property_company} und {data.user
                        .expand.works_for.name}
                </CardSubtitle>
                <hr />
                <CardText>
                    <Row>
                        <Col>
                            <p>
                                <strong>Gesamtinvestition</strong>: {contract.total_investment_costs}€
                                <br />
                                <strong>Laufzeit</strong>: {contract.rent_start.split(
                                    " "
                                )[0]} bis {contract.rent_end.split(" ")[0]}
                                <br />
                                <strong>Zahlungsrhythmus</strong>: {contract.payment_type ==
                                "monthly"
                                    ? "Monatlich"
                                    : "Jährlich"}
                            </p>
                        </Col>
                        <Col>
                            <p>
                                <strong>Lastschrifteinzug</strong>: {contract.direct_debit
                                    ? "Ja"
                                    : "Nein"}
                                <br />
                                <strong>Vertrags Typ</strong>: <Badge
                                    color="danger">{contract.type}</Badge
                                >
                            </p>
                        </Col>
                    </Row>
                    <hr />
                    <Row class="mt-2">
                        <Col>
                            <h5>Letzte Ereignisse</h5>

                            {#each contract.events as event}
                                <p class="invoice">
                                    {event.date.split(" ")[0]}: {event.event}
                                </p>
                            {/each}
                        </Col>
                        <Col>
                            <h5>Letzte Rechnungen</h5>

                            {#each contract.invoices as invoice}
                                {#if invoice.paid == false}
                                    <p class="invoice">
                                        <strong
                                            ><a
                                                style="color: #9e0000; text-decoration: none;"
                                                href={getPDFURL(invoice)}
                                                >{invoice.date.split(" ")[0]} ({invoice.amount}€) <Icon name="cloud-download" /></a
                                            ></strong
                                        >
                                    </p>
                                {/if}
                                {#if invoice.paid == true}
                                    <p class="invoice">
                                        <a
                                            style="color: #00733a; text-decoration: none;"
                                            href={getPDFURL(invoice)}
                                            >{invoice.date.split(" ")[0]} ({invoice.amount}€) <Icon name="cloud-download" /></a
                                        >
                                    </p>
                                {/if}
                            {/each}
                        </Col>
                    </Row>
                </CardText>
                <Card>
                    <CardHeader>
                        <CardTitle
                            >{contract.expand.asset.expand.address.streetname}
                            {contract.expand.asset.expand.address.townname}
                            {contract.expand.asset.expand.address
                                .postalcode}</CardTitle
                        >
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col style="display: flex; align-content: start" lg>
                                <img
                                    class="p-2"
                                    src="https://via.placeholder.com/150"
                                    alt="Placeholder"
                                />
                                <p>
                                    <strong>Zustand</strong>: {contract.expand
                                        .asset.condition}
                                    <br />
                                    <strong>Objektart</strong>: {contract.expand
                                        .asset.type}
                                    <br />
                                    <strong>Grundstücksart</strong>: {contract
                                        .expand.asset.property_type}
                                    <br />
                                    <strong>Untermieter</strong>: {contract
                                        .expand.asset.subtenant
                                        ? "Vorhanden"
                                        : "Nicht vorhanden"}
                                </p>
                            </Col>
                            <Col>
                                <Button
                                    color="danger"
                                    style="height: 100%; width: 100%"
                                    href="https://youtu.be/dQw4w9WgXcQ?si=Oh7EVM0bJ6v91m9q"
                                    >Mehr Informationen <Icon
                                        name="arrow-right-circle"
                                    /></Button
                                >
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </CardBody>
            <CardFooter style="display: flex; justify-content: space-between;">
                <span style="align-self: center;">Brauchen sie Hilfe?</span>
                <DALEmployeeView employee={data.employee}></DALEmployeeView>
            </CardFooter>
        </Card>
    {/each}
</Container>

<style>
    p.invoice {
        margin-bottom: 1;
        border-bottom: 1px solid #eee;
        display: block;
    }
    img {
        padding-right: 10px;
    }
</style>
