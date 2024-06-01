<script lang="ts">
    import { Container } from "@sveltestrap/sveltestrap";
    import Navigation from "../components/Navigation.svelte";
    import DALEmpolyeeView from "../components/DALEmployeeView.svelte"
</script>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
    />
    <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css"
    />
</svelte:head>

<Navigation />
<Container>
    <DALEmpolyeeView id={"ua6pfcqf53phimk"} />
</Container>

<style>
    @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";
</style>
