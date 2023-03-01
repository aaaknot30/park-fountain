<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>
<div class="bg-warning-900 rounded-xl p-2 m-4">
  <div class="bg-primary-900 rounded-xl p-2 m-4">
    <div class="flex justify-start items-center">
      <h1 class="pb-3 pt-2 pl-4 text-secondary-100">{data.content.title}</h1>

    </div>
  
  

<h2 class="mx-4 pb-2 text-secondary-200">Overview</h2>
<h4 class="px-2 mx-2 text-3xl text-primary-200">{data.content.title} --- {data.content.released} </h4>

<p class="px-2 mx-2">{data.content.notes ? data.content.notes : ''} </p>

<h2 class="pt-4 mx-4 text-secondary-100">Artist Bio</h2>
    <p class="px-8"><a class="font-medium hover:font-black" href="/artists/{data.content.artists[0].id}">Artist Details</a> </p>

<h2 class="pt-4 mx-4 pt-4 text-secondary-100">Labels</h2>

{#each data.content.labels as label}
<p class="px-8"><a class="font-medium hover:font-black" href="/labels/{label.id}">{label.name}</a> </p>
{/each}

<h2 class="pt-4 pb-2 mx-4 text-secondary-100">Tracklist</h2>
<ul>
{#each data.content.tracklist as track}
<li class="px-2 mx-6 font-medium text-secondary-100">{track.title} </li>
{/each}

</ul>


{#if data.content.videos} 

  <h2 class="py-2 pt-6 mx-4 text-secondary-100">Videos</h2>
  {#each data.content.videos as video}
  <p class="px-2 mx-2 font-bold text-surface-100">{video.title} </p>
  <p class="px-10 pb-2 text-warning-300"><a class="font-medium hover:font-black" target="_blank" href={video.uri}>{video.uri}</a></p>
  {/each}

  {/if} 

</div>
</div>


<style>
</style>