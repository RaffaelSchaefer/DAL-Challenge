<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<script>

    import PocketBase from 'pocketbase';
    import { goto } from '$app/navigation';
    import { createEventDispatcher } from 'svelte';

    let email = '';
    let password = '';
    let errorMessage = '';
    const dispatch = createEventDispatcher();

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Basic client-side validation
        if (!email || !password) {
            errorMessage = 'Please fill in both fields.';
            return;
        }

        try {
            const pb = new PocketBase('http://10.32.6.48:8090');
            await pb.collection('users').authWithPassword(email, password);
            const resultList = await pb.collection('users').getFullList({
                sort: '-created',
            });

            if (resultList.length > 0) {
                const user = resultList[0];
                const userid = user.id;

                if (pb.authStore.isValid) {
                    await pb.admins.authWithPassword('s20a3c@umwelt-campus.de', 'code-a-thon2024');

                    const response = await pb.collection('dla_user').getFullList({
                        sort: '-created',
                    });

                    if (response.length > 0) {
                        const dla_user = response[0];
                        const dla_userid = dla_user.isUser;

                        pb.authStore.clear();
                        await pb.collection('users').authWithPassword(email, password);

                        if (userid === dla_userid) {
                            goto('/test');
                        } else {
                            goto('/users');
                        }
                    } else {
                        errorMessage = 'No dla_user found.';
                    }
                } else {
                    errorMessage = 'Authentication is not valid.';
                }
            } else {
                errorMessage = 'No users found.';
            }
        } catch (error) {
            errorMessage = error.message;
        }
    };
</script>

<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';

    .btn-primary,
    .btn-primary:focus,
    .btn-primary.focus,
    .btn-primary:active {
        background-color: #ee0000 !important;
        border-color: #ee0000 !important;
    }
    .btn-primary:hover {
        background-color: #cc0000 !important;
        border-color: #cc0000 !important;
    }
    .custom-background {
        background-color: #E3DCCE;
    }
    .custom-background {
        background-color: #E3DCCE;
    }
</style>

<body>
    <div class="custom-background" style="margin: 50px;padding: 20px; border: 2px solid black; border-radius: 15px;">
        <h2 class="mt-5">Login</h2>
        <form class="mt-3" on:submit={handleSubmit}>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" bind:value={email} required>
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" bind:value={password} required>
            </div>
            {#if errorMessage}
                <div class="alert alert-danger">{errorMessage}</div>
            {/if}
            <button type="submit" class="btn btn-primary">Login</button>
        </form>
    </div>
</body>
