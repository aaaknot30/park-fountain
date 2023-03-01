<script lang="ts">
  import type { PageData } from './$types';
  let showLoading

  import { cover_image } from '../../../stores';

let mainImage;

cover_image.subscribe((value) => {
  mainImage = value;
});

  export let data: PageData;

</script>

<div class="bg-warning-900 rounded-xl p-2 m-4">
  <div class="bg-primary-900 rounded-xl p-2 pb-12 pt-1 m-4">

  <h1 class="pb-3 ml-4 pt-3 text-secondary-100">{data.content.name}</h1>
  <p class="px-4 mb-3 text-secondary-200">{data.content.profile}</p>

  <h2 class="pt-2 ml-4 text-secondary-100">All Releases</h2>
      <p class="px-8">
        <a class="font-medium hover:font-black" on:click={()=> showLoading = true} href="/artists/{data.content.id}/releases">{data.content.name}</a> 
      {#if showLoading}
      <span class="box bg-secondary-700 px-3 ml-1 rounded-xl">Loading</span>
      {/if}
      </p>

  {#if data.content.members}
    <h2 class="pt-4 ml-4 text-secondary-100">Members</h2>
      {#if data.content.members}
        {#each data.content.members as member}
        <p class="px-8"><a class="font-medium hover:font-black" href="/artists/{member.id}">{member.name}</a> </p>
        {/each}
      {/if}
  {/if}

  {#if data.content.urls}
    {#if data.content.urls}
      <h2 class="pt-4 ml-4 text-secondary-100">Links</h2>
      {#each data.content.urls as url}
      <p class="px-8 text-warning-300"><a class="font-medium hover:font-black" target="_blank" href={url}>{url}</a></p>
      {/each}
    {/if}
  {/if}
  
  </div>
  </div>


<style>
   .box {
    background: #19714b(154, 111, 111);
    animation: grow 0.4s 0s infinite alternate;
  }

  @keyframes grow {
    0% {
      background: #5d835e;
    }
    100% {
      background: #99a399;
    }
  }
</style>