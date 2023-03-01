<script lang="ts">
  import type { PageData } from "./$types";
  import { cover_image } from '../../stores';

  function loadImage(image) {
    cover_image.set(image);

  }

  export let data: PageData;
</script>

<div class="bg-warning-900 p-4 m-4 rounded-xl">
  <div class="bg-warning-800 rounded-2xl p-4 m-2 grid grid-cols-2">
    {#each data.content.results as { thumb, title, id, resource_url, cover_image, year }, i}
      <div class="bg-primary-900 border-2 p-4 m-4 rounded-2xl">
        
        {#if resource_url.includes("masters")}
        <h2 class="text-white p-2">
          <a on:click={() => loadImage({cover_image})} href="/master/{id}"> {title} {year ? ' - ' + year : ''}</a></h2>
          <a on:click={() => loadImage({cover_image})} href="/master/{id}"><img class="rounded-2xl" src={thumb} alt="Cover art." /></a>
        
          {:else if resource_url.includes("releases")}
          <h2 class="text-white p-2"><a href="/releases/{id}"> {title} {year ? ' - ' + year : ''}</a></h2>
          <a href="/releases/{id}"><img class="rounded-2xl" src={thumb} alt="Cover art." /></a>
       
          {:else if resource_url.includes("artists")}
          <h2 class="text-white p-2"><a href="/artists/{id}"> {title} {year ? ' - ' + year : ''}</a></h2>
          <a href="/artists/{id}"><img class="rounded-2xl" src={thumb} alt="Cover art." /></a>
        
          {:else if resource_url.includes("labels")}
          <h2 class="text-white p-2"><a href="/labels/{id}"> {title} {year ? ' - ' + year : ''}</a></h2>
          <a href="/labels/{id}"><img class="rounded-2xl" src={thumb} alt="Cover art." /></a>
        
          {:else}
          <p><a class="mt-8" href="/"> {title}</a></p>
        {/if}
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">

</style>
