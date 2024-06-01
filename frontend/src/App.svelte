<script lang="ts">
    import { Spinner, Container } from "@sveltestrap/sveltestrap";
    import PocketBase from "pocketbase";

    const pb = new PocketBase("http://10.32.6.48:8090");

    async function authenticate(mail: string, password: string) {
        const authData = await pb.admins.authWithPassword(mail, password);
        if (pb.authStore.isValid) {
            console.log("Authenticated successfully.");
        } else {
            console.error("Authentication failed.");
        }
    }

    async function getCustomers() {
        await authenticate("s20a3c@umwelt-campus.de", "code-a-thon2024");
        return await pb.collection("customers").getFullList({
            sort: "-created",
        });
    }

    let customersPromise = getCustomers();
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    />
</svelte:head>

<main>
    <Container class="pt-3">
        {#await customersPromise}
            <Spinner />
        {:then customers}
            {customers}
        {:catch error}
            {error}
        {/await}
        <button on:click={() => (customersPromise = getCustomers())}>
            load
        </button>
    </Container>
</main>

<style>
</style>
