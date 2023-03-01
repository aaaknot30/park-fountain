<script lang="ts">
  import type { PageData } from './$types';

  export let data: PageData;

</script>

<div class="bg-warning-900 rounded-xl p-2 m-4">
  <div class="bg-primary-900 rounded-xl p-2 m-4 pb-10 ">
  
   <h1 class="p-2 pl-4 text-secondary-100">{data.content.name}</h1>
  
   {#if data.content.profile}
   <h2 class="py-2 mx-4 text-secondary-100">Profile</h2>
   <p class="px-4 text-secondary-200">{data.content.profile} </p>
   {/if}

  
  {#if data.content.contact_info}
  <h2 class="py-2 mx-4 text-secondary-100">Contact</h2>
  <p class="px-4 mb-3 text-secondary-200">{data.content.contact_info}  </p>
  {/if}
  
  
  {#if data.content.urls}
  <h2 class="pt-2 pb-1 mx-4 text-secondary-100">Links</h2>
    {#each data.content.urls as url}
    <p class="px-8 text-warning-300"><a class="font-medium hover:font-black" target="_blank" href={url}>{url}</a></p>
    {/each}
  {/if}

  {#if data.content.parent_label}
  <h2 class="pt-5 mx-4 text-secondary-100">Parent Label</h2>
  <p class="px-8"><a class="font-medium hover:font-black" href="/labels/{data.content.parent_label.id}">{data.content.parent_label.name}</a> </p>
{/if}

{#if data.content.sublabels}
<h2 class="pt-5 mx-4 text-secondary-100">Sublabels</h2>
  {#each data.content.sublabels as sublabel}
  <p class="px-8"><a class="font-medium hover:font-black" href="/labels/{sublabel.id}">{sublabel.name}</a> </p>
  {/each}
{/if}
  
  
  </div>
  </div>


<style>
</style>