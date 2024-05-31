<!-- src/HeroSection.svelte -->
<script>
    export let title;
    export let content;
    export let imageUrl;
    export let isImageLeft = false;
  </script>
  
  <div class="flex flex-col md:flex-row items-center md:items-start mb-8 space-y-4 md:space-y-0 md:space-x-8">
    {#if isImageLeft}
      <img src={imageUrl} alt={title} class="w-1/2 md:w-1/3 h-auto order-1 md:order-2" />
      <div class="w-full md:w-2/3 text-center md:text-left">
        <h2 class="text-xl font-bold">{title}</h2>
        <p>{content}</p>
      </div>
    {:else}
      <div class="w-full md:w-2/3 text-center md:text-left">
        <h2 class="text-xl font-bold">{title}</h2>
        <p>{content}</p>
      </div>
      <img src={imageUrl} alt={title} class="w-1/2 md:w-1/3 h-auto order-1" />
    {/if}
  </div>
  
  <style>
    .order-1 {
      order: 1;
    }
    .order-2 {
      order: 2;
    }
  </style>
  