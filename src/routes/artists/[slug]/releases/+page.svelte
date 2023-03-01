<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>

<div class="bg-warning-900 rounded-xl p-2 m-4">
  <div class="bg-primary-900 rounded-xl p-2 pb-12 m-4">

 <div class="flex justify-start items-center">
      <h1 class="pb-3 ml-4 pt-2 text-secondary-100">{data.content.releases[0].artist}</h1>
    </div>


    <h2 class="pt-2 mx-4 text-secondary-100">Artist Bio</h2>
    <p class="px-8"><a class="font-medium hover:font-black" href="/artists/{data.id}">Artist Details</a> </p>


  <h2 class="py-2 pt-6 mx-4 text-secondary-100">All Releases</h2>
  {#each data.content.releases as release}
    {#if release.resource_url.includes('master')}
    <p class="px-8"><a class="font-medium hover:font-black" href="/master/{release.id}">{release.title} - {release.year}</a> </p>
    {:else}
    <p class="px-8"><a class="font-medium hover:font-black" href="/releases/{release.id}">{release.title} - {release.year}</a> </p>
    {/if}
    
  {/each}



  </div>
  </div>


<style>
</style>