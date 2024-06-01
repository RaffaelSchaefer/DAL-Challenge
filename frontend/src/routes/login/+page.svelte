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
    import PocketBase from "pocketbase";
    import { goto } from "$app/navigation";
    import { createEventDispatcher } from "svelte";

    let email = "";
    let password = "";
    let errorMessage = "";
    const dispatch = createEventDispatcher();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic client-side validation
        if (!email || !password) {
            errorMessage = "Please fill in both fields.";
            return;
        }

        try {
            const pb = new PocketBase("http://10.32.6.48:8090");
            await pb.collection("users").authWithPassword(email, password);
            const resultList = await pb.collection("users").getFullList({
                sort: "-created",
            });

            if (resultList.length > 0) {
                const user = resultList[0];
                const userid = user.id;

                if (pb.authStore.isValid) {
                    await pb.admins.authWithPassword(
                        "s20a3c@umwelt-campus.de",
                        "code-a-thon2024"
                    );

                    const response = await pb
                        .collection("dla_user")
                        .getFullList({
                            sort: "-created",
                        });

                    if (response.length > 0) {
                        const dla_user = response[0];
                        const dla_userid = dla_user.isUser;

                        pb.authStore.clear();
                        await pb
                            .collection("users")
                            .authWithPassword(email, password);

                        if (userid === dla_userid) {
                            goto("/test");
                        } else {
                            goto("/users");
                        }
                    } else {
                        errorMessage = "No dla_user found.";
                    }
                } else {
                    errorMessage = "Authentication is not valid.";
                }
            } else {
                errorMessage = "No users found.";
            }
        } catch (error) {
            errorMessage = error.message;
        }
    };
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
<body>
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
                <Form class="mt-3" on:submit={handleSubmit}>
                    <Label for="email" class="mb-3"
                        ><Icon name="envelope" /> Email</Label
                    >
                    <FormGroup floating label="Bitte Adresse eingeben">
                        <Input
                            type="email"
                            class="form-control"
                            id="email"
                            bind:value={email}
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
                            bind:value={password}
                            required
                        />
                    </FormGroup>
                    <div style="display: flex; justify-content: flex-end;">
                        <FormText>
                            Password vergessen? <a href="/forgot-password" style="font-weight: bold; color:rgb(125,0,0); text-decoration: none">Hier zurücksetzten</a>
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
</body>

<style>
    @import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css";

    body {
        background-size: 100% 170%;
        background-repeat: no-repeat;
        background-image: url("../../bg_login.webp");
    }
    img.logo {
        width: 300px;
        margin: 0 auto;
        display: block;
    }
</style>
