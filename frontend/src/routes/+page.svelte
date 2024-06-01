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

<style>
    @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css';
    
    .dropdown {
      position: relative;
      display: inline-block;
      background-color: #ee0000;
      color: black;
      font-size: 16px;
      border: none;
      border-radius: 15px;    
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #ee0000;
      min-width: 160px;
      z-index: 1;
      border-radius: 15px;
    }

    .dropdown-content a {
      color: black;
      padding: 12px 16px;
      text-decoration: none;
      display: block;
      border-radius: 15px;
    }

    .dropdown-content a:hover {background-color: #ddd;}

    .dropdown:hover .dropdown-content {display: block;}

    .dropdown:hover .dropbtn {background-color: gray;} 

    nav {
        background-color: #e3dcce;
        padding-top: 10px;
        padding-bottom: 10px;
        margin-bottom: 10px;
    }

    .navbar-nav { padding-right: 10px; }

    .dropbtn {
      background-color: #ee0000;
      color: white;
      padding: 12%;
      font-size: 16px;
      border: none;
      border-radius: 15px;
    }

    .nav-item {
        background-color: #ee0000;
        color: white;
        margin-left: 2%;
        margin-right: 2%;
        font-size: 16px;
        border-radius: 15px;
    }

    .dd {
        margin-left: 2%;
        margin-right: 2%;
    }

    .col {
        border-style: solid;
        border-color: black;
    }

    .col-8 {
        border-style: solid;
        border-color: black;
    }

</style>


<script lang="ts">
    import { onMount } from 'svelte';
    import PocketBase from 'pocketbase';

    interface Contract {
        id: string;
        assetId: string;
        assetDetails?: Asset;
    }

    interface Asset {
        id: string;
        name: string;
    }

    let vis = true;
    let contracts: Contract[] = [];

    const pb = new PocketBase('http://10.32.6.48:8090');

    async function fetchData() {
        try {
            // Authentifizierung
            const authData = await pb.admins.authWithPassword('s20a3c@umwelt-campus.de', 'code-a-thon2024');
            
            // Überprüfen, ob die Authentifizierung erfolgreich war
            if (pb.authStore.isValid && pb.authStore.model) {
                console.log('Authenticated successfully');
                console.log('Token:', pb.authStore.token);
                console.log('Admin ID:', pb.authStore.model.id);

                // Abrufen der Vertragsdaten
                const fetchedContracts = await pb.collection('contracts').getFullList<Contract>();

                // Abrufen der zugehörigen Asset-Daten
                for (const contract of fetchedContracts) {
                    const asset = await pb.collection('assets').getOne<Asset>(contract.asset);
                    contract.assetDetails = asset;
                }

                // Zuweisen der abgerufenen Vertragsdaten
                contracts = fetchedContracts;

                // Logout
                pb.authStore.clear();
            } else {
                console.error('Authentication failed or auth model is null');
            }
        } catch (error) {
            console.error('Fehler beim Abrufen der Daten:', error);
        }
    }

    onMount(() => {
        fetchData();
    });
</script>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a href="/" class="navbar-brand">
            <img src="../icons/RGB/Logo_DAL_RGB.png" height="34" alt="DAL">
        </a>
        <div class="navbar-nav">
            {#if vis}
            <a href="/" class="nav-item nav-link">Konto</a>
            <a href="/" class="nav-item nav-link">Postfach</a>
            <div class="dropdown dd">
                <button class="dropbtn nav-item nav-link">Verträge</button>
                <div class="dropdown-content">
                  <a href="/">Link 1</a>
                  <a href="/">Link 2</a>
                  <a href="/">Link 3</a>
                </div>
            </div>  
            <div class="dropdown dd">
                <button class="dropbtn nav-item nav-link">Assets</button>
                <div class="dropdown-content">
                  <a href="/">Link A</a>
                  <a href="/">Link B</a>
                  <a href="/">Link C</a>
                </div>
            </div>                     
            {/if}
        </div>
        <div class="navbar-nav ms-auto">
            {#if vis}
                <a href="/" class="nav-item nav-link">Logout</a>
            {/if}
            {#if !vis}
                <a href="/" class="nav-item nav-link">Login</a>
            {/if}
            <a href="/" class="nav-item nav-link">Einstellungen </a>
        </div>
    </div>
</nav>

<div class="container">
    {#each contracts as contract}
        <div class="row">
            <div class="col">
                <p>Contract ID: {contract.id}</p>
            </div>
            <div class="col-8">
                <p>Asset ID: {contract.assetDetails.id}</p>
                <p>Asset Name: {contract.assetDetails.type}</p>
            </div>
        </div>
    {/each}
</div>

