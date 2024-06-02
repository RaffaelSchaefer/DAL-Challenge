<script>
    import {
        Card,
        CardHeader,
        CardTitle,
        CardBody,
        Container,
        Button,
        Form,
        FormGroup,
        FormText,
        Label,
        Input,
        Icon,
    } from "@sveltestrap/sveltestrap";
    let errorMessage = "";
</script>

<Container style="max-width: 600px">
    <img
        src="../../icons/White_neg/Logo_DAL_neg.svg"
        alt="Logo"
        class="logo mt-4"
    />
    {#if errorMessage}
        <div class="alert alert-danger my-4">{errorMessage}</div>
    {/if}
    <Card class="mt-4 rounded-2">
        <CardHeader>
            <CardTitle class="text-center m-1 display-6">Login</CardTitle>
        </CardHeader>
        <CardBody>
            <Form class="mt-3" method="POST" action="?/login">
                <Label for="email" class="mb-3"
                    ><Icon name="envelope" /> Email</Label
                >
                <FormGroup floating label="Bitte Adresse eingeben">
                    <Input
                        type="email"
                        class="form-control"
                        id="email"
                        name="email"
                        required
                    />
                </FormGroup>
                <Label for="password" class="mb-3"
                    ><Icon name="shield-lock" /> Password</Label
                >
                <FormGroup floating label="Bitte Passwort eingeben">
                    <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        required
                    />
                </FormGroup>
                <div style="display: flex; justify-content: flex-end;">
                    <FormText>
                        Password vergessen? <a
                            href="/"
                            style="font-weight: bold; color:rgb(125,0,0); text-decoration: none"
                            >Hier zurücksetzten</a
                        >
                    </FormText>
                </div>
                <Button
                    type="submit"
                    class="mt-4"
                    color="danger"
                    style="width: 100%;"
                    size="lg">Sign-in</Button
                >
                <Button
                    class="mt-2"
                    outline
                    color="danger"
                    style="width: 100%; font-weight: 600;"
                    disabled
                    size="md">Register</Button
                >
            </Form>
        </CardBody>
    </Card>
</Container>
