<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css">
</svelte:head>

<script lang="ts">
    import PocketBase from "pocketbase";
    
    const pb = new PocketBase('http://10.32.6.48:8090');
    const authData = pb.admins.authWithPassword('s20a3c@umwelt-campus.de', 'code-a-thon2024');

    let vis = true;

    async function fetchData() {
        const resultList = await pb.collection('assets').getList(1, 50, {
            filter: 'id ~ "00000068912(_.*)?"',
        });
    }

    fetchData();

</script>

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

</style>

<nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
        <a href="#" class="navbar-brand">
            <img src="../icons/RGB/Logo_DAL_RGB.png" height="34" alt="DAL">
        </a>
        <div class="navbar-nav">
            {#if vis}
            <a href="#" class="nav-item nav-link">Konto</a>
            <a href="#" class="nav-item nav-link">Postfach</a>
            <div class="dropdown dd">
                <button class="dropbtn nav-item nav-link">Verträge</button>
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
            </div>  
            <div class="dropdown dd">
                <button class="dropbtn nav-item nav-link">Assets</button>
                <div class="dropdown-content">
                  <a href="#">Link A</a>
                  <a href="#">Link B</a>
                  <a href="#">Link C</a>
                </div>
            </div>                     
            {/if}
        </div>
        <div class="navbar-nav ms-auto">
            {#if vis}
                <a href="#" class="nav-item nav-link">Logout</a>
            {/if}
            {#if !vis}
                <a href="#" class="nav-item nav-link">Login</a>
            {/if}
            <a href="#" class="nav-item nav-link">Einstellungen </a>
        </div>
    </div>
</nav>


