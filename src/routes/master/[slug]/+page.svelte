<script lang="ts">
  import type { PageData } from './$types';
  import { cover_image } from '../../../stores';

  let mainImage;

	cover_image.subscribe((value) => {
		mainImage = value;
	});

  console.log(mainImage)

  export let data: PageData;

</script>

<div class="bg-warning-900 rounded-xl p-2 m-4">
  <div class="bg-primary-900 rounded-xl p-2 m-4">
     

    <div class="flex items-start justify-start">
      <div class="w-2/3">
      <h1 class="pb-3 ml-4 mt-2 text-secondary-100">{data.content.title}</h1>
      <h2 class="pt-2 mx-4 text-secondary-100">Artist Bio</h2>
      <p class="px-8"><a class="font-medium hover:font-black" href="/artists/{data.content.artists[0].id}">Artist Details</a> </p>

      <h2 class="mx-4 pt-4 text-secondary-100">Releases</h2>
      <p class="px-4 mx-4 text-secondary-200"><a href="/releases/{data.content.main_release}">Main Release</a> </p>
      <p class="px-4 mb-3 mx-4 text-secondary-200"><a href="/releases/{data.content.most_recent_release}">Most Recent Release</a> </p>

      <h2 class="py-2 mx-4 text-secondary-100">Tracklist</h2>
      {#each data.content.tracklist as track}
       <p class="px-2 mx-6 font-medium text-secondary-100">{track.title} </p>
      {/each}

      {#if data.content.videos} 
        <h2 class="py-2 pt-6 mx-4 text-secondary-100">Videos</h2>
        {#each data.content.videos as video}
          <p class="px-2 mx-2 font-bold text-surface-100">{video.title} </p>
          <p class="px-10 pb-2 text-warning-300"><a class="font-medium hover:font-black" target="_blank" href={video.uri}>{video.uri}</a></p>
        {/each}
      {/if}

    </div>
    <div class="w-96 pr-8">
       <img class="w-96 rounded-2xl mt-4 ml-4" src="{mainImage.cover_image}" alt="">
    </div>
      
  </div>

      
      


</div>

</div> 


<style>
</style>