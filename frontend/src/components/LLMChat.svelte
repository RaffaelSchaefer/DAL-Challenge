<script lang="ts">
    import {
        Card,
        CardBody,
        CardHeader,
        CardTitle,
        CardFooter,
        Badge,
        Button,
        Icon,
        Form,
        Input
    } from "@sveltestrap/sveltestrap";
    import axios from "axios";
    export let isOpen = true;

    function toggle() {
        isOpen = !isOpen;
    }
</script>

{#if isOpen}
    <div class="center-float">
        <Card
            style="max-height: 800px;height: 100vh; max-width: 600px; width: 100vw"
        >
            <CardHeader>
                <CardTitle>
                    <div
                        style="display: flex; align-items: center; justify-content: space-between"
                    >
                        <div style="display: flex; align-items: center">
                            Chat+
                            <Badge color="danger" style="margin-left: 10px;">KI <Icon name="stars" /></Badge>
                        </div>
                        <Button close on:click={toggle}></Button>
                    </div>
                </CardTitle>
            </CardHeader>
            <CardBody>
            </CardBody>
            <CardFooter>
                <Form style="display: flex">
                    <Input type="text" style="margin-right:10px"/>
                    <Button color="danger"><Icon name="arrow-right" /></Button>
                </Form>
            </CardFooter>
        </Card>
    </div>
{/if}

<style>
    div.center-float {
        z-index: 1;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
    }
</style>
