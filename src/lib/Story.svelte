<script lang="ts">
  export let story = undefined;

  $: ({ by: author, title, url } = story);
</script>

{#if story}
  <a href={url} target="_blank">
    <h3>{title}</h3>
    <p>by {author}</p>
  </a>
{/if}

<style>
  a {
    display: block;
    margin-bottom: 10px;
  }

  a:hover h3 {
    text-decoration: underline;
  }
</style>
