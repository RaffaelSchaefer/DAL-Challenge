<script lang="ts">
    import {
        Collapse,
        NavbarToggler,
        NavbarBrand,
        Nav,
        Navbar,
        NavItem,
        NavLink,
        Button,
        Container, 
    } from "@sveltestrap/sveltestrap";
    import PocketBase from "pocketbase";
    const pb = new PocketBase("http://10.32.6.48:8090");
    const authData = pb.admins.authWithPassword(
        "s20a3c@umwelt-campus.de",
        "code-a-thon2024"
    );
    let isOpen = false;

    function handleUpdate(event: any) {
        isOpen = event.detail.isOpen;
    }
</script>

<Navbar color="danger" class="mb-4" light expand="md" container="md" dark={true}>
    <NavbarBrand href="/">
        <img src="../icons/White_neg/Logo_DAL_neg.svg" alt="" />
    </NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
            {#if pb.authStore.isValid}
            <NavItem>
                <NavLink href="/" class="link">Konto</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">Postfach</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">Verträge</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/">Assets</NavLink>
            </NavItem>
            <Button outline color="light" size="md">
                Abmelden
            </Button>
            {:else}
            <Button outline color="light" size="md">
                Anmelden
            </Button>
            {/if}
        </Nav>
    </Collapse>
</Navbar>

<style>

    img {
        height: 64px;
    }
</style>
