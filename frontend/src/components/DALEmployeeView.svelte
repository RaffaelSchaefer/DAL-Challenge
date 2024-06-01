<script lang="ts">
    import PocketBase from "pocketbase";
    import type DLAUser from "../interfaces/dla_user";
    import {
        Toast,
        ToastBody,
        ToastHeader,
        Button,
        Col,
        Row,
        Badge,
        ButtonGroup,
        Icon,
        Spinner,
    } from "@sveltestrap/sveltestrap";
    import { onMount } from "svelte";

    const pb = new PocketBase("http://10.32.6.48:8090");

    onMount(async () => {
        const authData = await pb.admins.authWithPassword(
            "s20a3c@umwelt-campus.de",
            "code-a-thon2024"
        );
        if (!pb.authStore.isValid) console.error("Authentication failed.");
    });

    export let id;

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;
    }

    function open() {
        isOpen = true;
    }

    async function getEmployee(id: string) {
        const employee: DLAUser = await pb.collection("dla_user").getOne(id, {
            expand: "isUser",
        });
        employee!.user = employee?.expand.isUser;
        return employee;
    }

    let employeePromise = getEmployee(id);
</script>

{#await employeePromise}
    <Button color="danger" on:click={open} disabled
        ><Icon name="person-fill" /> Ihr Ansprechpartner</Button
    >
{:then employee}
    {#if isOpen}
        <Toast {isOpen}>
            <ToastHeader {toggle}
                >{#if employee?.user}{employee?.user?.first_name}
                    {employee?.user?.last_name}{:else}Ihr Ansprechpartner{/if}</ToastHeader
            >
            <ToastBody>
                <Row>
                    {#if employee?.user}
                        <Col>
                            <img
                                src="http://10.32.6.48:8090/api/files/_pb_users_auth_/v4b3clmvcewif9t/person_1024x1024_K6Mvg1jyjy.jpeg?token="
                                alt="{employee?.user?.first_name} {employee
                                    ?.user?.last_name}s Avatar"
                                class="rounded"
                            />
                        </Col>
                        <Col id="info">
                            <h6>
                                {employee?.user?.first_name}
                                {employee?.user?.last_name}
                            </h6>
                            <Badge color={"danger"}
                                >{employee?.department}</Badge
                            >
                            <hr class="mx-1" />
                            <p class="mb-1">{employee?.working_hours}</p>
                            <p class="mb-1">
                                <Icon name="envelope" />
                                {employee?.user?.email}
                            </p>
                            <p>
                                <Icon name="phone" />{employee?.user
                                    ?.phone_number}
                            </p>
                        </Col>
                    {:else}
                        <div class="wrapper">
                            <Spinner color="danger" />
                        </div>
                    {/if}
                </Row>
                {#if employee?.user}
                    <hr class="mt-1" />
                    <div class="spread">
                        <ButtonGroup>
                            <Button color="danger" outline
                                ><Icon name="envelope" /> E-Mail</Button
                            >
                            <Button color="danger"
                                ><Icon name="chat-left-text" /> Direct Message</Button
                            >
                        </ButtonGroup>
                    </div>
                {/if}
            </ToastBody>
        </Toast>
    {:else}
        <Button color="danger" on:click={open}
            ><Icon name="person-fill" /> Ihr Ansprechpartner</Button
        >
    {/if}
{/await}

<style>
    img {
        width: 100%;
    }
    div.spread {
        display: flex;
        justify-content: flex-start;
    }
    div.wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
</style>
