<script>
  import '../theme.postcss';
  import "@skeletonlabs/skeleton/styles/all.css";
  import "../app.postcss";

  let showLoading;

</script>
<!--  -->
<div class="pt-2 ml-4 mx-20 flex flex-col items-center">
  <div class="ml-4 mt-2  py-4 bg-primary-800 rounded-xl sm:w-full lg:w-4/5">
    <div class="mx-6 pl-4 p-6 flex justify-between items-center bg-[url('/img/park_fountain_header.jpg')] bg-no-repeat bg-center bg-cover border-4 border-warning-800 rounded-xl mb-2">
      <h1 class="font-bold text-primary-300">Park Fountain Music App</h1>
    </div>
    <div class="block ml-4 p-2 flex space-x-5">
      <a
        href="/"
        class="mb-1 text-xl font-bold text-surface-500 hover:text-tertiary-500"
        >Home</a
      >
      <form method="POST" action="/search">
        <div class="flex justify-start items-center">
          <input
            name="searchWord"
            type="text"
            class="bg-tertiary-900/50 px-3 py-1 rounded-lg"
            placeholder="search"
          />
          <button on:click={() => (showLoading = true)} type="submit" class="ml-1 px-2 rounded-xl bg-secondary-800"
            >Go</button>
          {#if showLoading}
           <span class="box bg-secondary-700 px-3 ml-2 rounded-xl">Loading...</span>
          {/if}

        </div>
      </form>
    </div>
  
  <slot />
</div>
<footer>By Kyle Larson, 2/2013</footer>
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
