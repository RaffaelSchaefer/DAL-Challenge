<script lang="ts">
    import { Container } from "@sveltestrap/sveltestrap";
    import Navigation from "../../components/Navigation.svelte";
</script>

<Navigation />
<Container>
    <slot/>
</Container>