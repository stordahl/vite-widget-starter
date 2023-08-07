<script lang="ts">
import { onMount } from "svelte";

  import { DB, fetchDataAndUpdateDB } from "../data";
  import Story from "./Story.svelte";

  $: stories = $DB.stories

  onMount(() => {
    fetchDataAndUpdateDB(DB);
  });
</script>

<div class="widget-root">
  <header>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1920px-Y_Combinator_logo.svg.png"/>
    <h2>Top Stories</h2>
  </header>
  {#if stories.length === 0}
    <p>Loading...</p>
  {:else}
    {#each stories as story}
      <Story {story} />
    {/each}
  {/if}
</div>

<style>
  .widget-root {
    padding: 15px;
    border: 4px dashed var(--border-color, #000);
    max-width: 700px;
    margin: 0 auto;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 8px;
    margin-bottom: 8px;
  }

  header img {
    width: 45px;
    height: auto;
  }
</style>
