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
        Badge,
        Button,
        Icon,
    } from "@sveltestrap/sveltestrap";
    import DALEmployeeView from "../../components/DALEmployeeView.svelte";

    export let data;
</script>

<h1>Asset Übersicht der {data.user.expand.works_for.name}</h1>
<Row cols={{ lg: 2, md: 2, sm: 1 }}>
    {#each data.contracts as contract}
        <Col>
            <Card class="mb-4">
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
                        <Col class="pb-2" style="display: flex; align-content: start" lg>
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Placeholder"
                            />
                            <p>
                                <strong>Zustand</strong>: {contract.expand.asset
                                    .condition}
                                <br />
                                <strong>Objektart</strong>: {contract.expand
                                    .asset.type}
                                <br />
                                <strong>Grundstücksart</strong>: {contract
                                    .expand.asset.property_type}
                                <br />
                                <strong>Untermieter</strong>: {contract.expand
                                    .asset.subtenant
                                    ? "Vorhanden"
                                    : "Nicht vorhanden"}
                            </p>
                        </Col>
                        <Col>
                            <Button
                                color="secondary"
                                style="height: 100%; width: 100%"
                                disabled
                                >Mehr Informationen <Icon
                                    name="arrow-right-circle"
                                /></Button
                            >
                        </Col>
                    </Row>
                </CardBody>
                <CardFooter
                    style="display: flex; justify-content: space-between;"
                >
                    <span style="align-self: center;">Brauchen sie Hilfe?</span>
                    <DALEmployeeView employee={data.employee}></DALEmployeeView>
                </CardFooter>
            </Card>
        </Col>
    {/each}
</Row>

<style>
    img {
        padding-right: 10px;
    }
</style>
