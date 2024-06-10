<script lang="ts">
    import { Container } from "@sveltestrap/sveltestrap";
    import Navigation from "../../components/Navigation.svelte";
    import LLMChat from "../../components/LLMChat.svelte";
</script>

<LLMChat></LLMChat>
<Navigation />
<Container>
    <slot/>
</Container>