<script lang="ts">
    import { page } from '$app/stores';
    import { Container, Card, Icon, Button } from "@sveltestrap/sveltestrap";
</script>

<div class="center-float">
    <Container style="max-width: 600px;">
        <Card class="p-4">
            <h1 style="text-align: center;">{$page.status}</h1>
            <hr />
            <div class="flex-box">
                <p style="font-size: 4rem;">
                    <Icon name="bug" />
                </p>
                <p>Error {$page.status}: {$page.error.message}</p>
            </div>
            <Button color="danger" href="/" size="lg" >Zurück zur Startseite</Button>
        </Card>
    </Container>
</div>

<style>
    div.center-float {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-size: 100% 170%;
        background-repeat: no-repeat;
        background-image: url("../../bg_login.webp");
    }
    div.flex-box {
        display: flex;
        align-items: center;
    }
    div.flex-box p:first-child {
        margin-right: 20px;
    }
</style>
