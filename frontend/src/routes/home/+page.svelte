<script lang="ts">
    import { onMount } from "svelte";
    import DALEmpolyeeView from "../../components/DALEmployeeView.svelte"

    export let data;

    onMount(async () => {
        console.log(data)
    })
</script>

<DALEmpolyeeView employee={data.employee} />
