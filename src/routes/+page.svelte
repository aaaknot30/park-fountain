<script lang="ts">
  import type { PageData } from "./$types";

  const artistsArr = [
    "Stevie Wonder",
    "The Rolling Stones",
    "James Brown",
    "Led Zeppelin",
    "Bob Dylan",
    "Jimi Hendrix",
    "Prince",
    "Bob Marley",
    "Elvis Presley",
    "David Bowie",
    "Marvin Gaye",
    "Madonna",
    "Pink Floyd",
    "Queen",
    "Tupac Shakur",
    "The Who",
    "The Clash",
    "U2",
    "The Doors",
  ];

  const albumArr = [
    "White Album",
    "Revolver",
    "Sgt. Pepper's Lonely Hearts",
    "Abbey Road",
    "Pet Sounds",
    "Rumours",
    "Exile on Main St",
    "Dark Side of the Moon",
    "Thriller",
    "The Joshua Tree",
    "London Calling",
    "Purple Rain",
    "Appetite for Destruction",
    "Nevermind",
    "Achtung Baby",
    "OK Computer",
    "Jagged Little Pill",
    "Back in Black",
  ];

  const labelArr = [
"Sony Music Entertainment",
"Columbia",
"Arista",
"Warner Music Group",
"Elektra Records",
"Atlantic Records",
"Universal Music Group",
"Def Jam Recordings",
"Interscope Geffen AM",
"Island Records",
"Virgin Records",
"RCA Records"
]

  const artists = artistsArr.map((item) => {
    const tUrl = item.split(" ").join("+");
    return { artistName: item, artistUrl: tUrl };
  });

  const albums = albumArr.map((item) => {
    const tUrl = item.split(" ").join("+");
    return { albumName: item, albumtUrl: tUrl };
  });

  const labels = labelArr.map((item) => {
    const tUrl = item.split(" ").join("+");
    return { labelName: item, labelUrl: tUrl };
  });

  let showLoading;

  export let data: PageData;
</script>

<div class="bg-warning-900 rounded-xl p-2 m-4">
  <div
    class="pb-20 bg-tertiary-900 rounded-xl p-2 m-4 bg-[url('/img/park_fountain.jpg')] bg-no-repeat bg-center bg-cover h-4/5"
  >
    <h2 class="example pb-3 pt-4 pl-2 text-secondary-100">What does it do?</h2>
    <p class="px-2 mx-2 text-secondary-100">
      This app allows you to search Artists, Releases, and Label information
      from the Discogs API.
    </p>
    <p class="px-2 mx-2 text-secondary-100">
      The Discogs API lets developers build their own Discogs-powered
      applications for the web, desktop, and mobile devices.
    </p>
    <p class="px-2 mx-2 text-secondary-100">
      You can access content such as Artists, Releases, and Labels.
    </p>

    <div class="flex">
      <div class="w-72">
        <h2 class="mx-4 mt-4 text-secondary-100">Artist searches</h2>
        <ul class="ml-8 mt-2">
          {#each artists as artist}
            <li>
              <a
                on:click={() => (showLoading = artist.artistName)}
                href="/search?searchWord={artist.artistUrl}">{artist.artistName}</a>
              {#if showLoading === artist.artistName}
               <span class="box bg-secondary-700 px-3 ml-1 rounded-xl">Loading</span>
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h2 class="mx-4 mt-4 text-secondary-100">Album searches</h2>
        <ul class="ml-8 mt-2">
          {#each albums as album}
            <li>
              <a
                on:click={() => (showLoading = album.albumName)}
                href="/search?searchWord={album.albumtUrl}">{album.albumName}</a>
              {#if showLoading === album.albumName}
              <span class="box bg-secondary-700 px-3 ml-1 rounded-xl">Loading</span>
              {/if}
            </li>
          {/each}
        </ul>
      </div>

      <div>
        <h2 class="mx-4 mt-4 text-secondary-100">Label searches</h2>
        <ul class="ml-8 mt-2">
          {#each labels as label}
            <li>
              <a
                on:click={() => (showLoading = label.labelName)}
                href="/search?searchWord={label.labelUrl}">{label.labelName}</a>
              {#if showLoading === label.labelName}
              <span class="box bg-secondary-700 px-3 ml-1 rounded-xl">Loading</span>
              {/if}
            </li>
          {/each}
        </ul>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  /* .example { @apply text-primary-800; } */

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
