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
    } from "@sveltestrap/sveltestrap";
    let isOpen = false;

    function handleUpdate(event: any) {
        isOpen = event.detail.isOpen;
    }
</script>

<Navbar
    color="danger"
    class="mb-4"
    light
    expand="md"
    container="md"
    dark={true}
>
    <NavbarBrand href="/">
        <img src="../icons/White_neg/Logo_DAL_neg.svg" alt="" />
    </NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
        <Nav class="ms-auto" navbar>
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
            <Button outline color="light" size="md" href="/logout">Abmelden</Button>
        </Nav>
    </Collapse>
</Navbar>

<style>
    img {
        height: 64px;
    }
</style>
