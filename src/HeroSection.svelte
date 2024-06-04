<!-- src/components/HeroSection.svelte -->
<script>
  export let title;
  export let content;
  export let imageUrl;
  export let isImageLeft = false;
</script>

<div class="flex flex-col w-full md:flex-row items-center justify-between md:w-5/6 p-6 h-1/4" class:md:flex-row-reverse={isImageLeft}>
  <div class="max-w-lg md:max-w-sm mb-6 md:mb-0">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">{title}</h1>
    <p class="text-sm md:text-md leading-relaxed text-center md:text-justify">{content}</p>
  </div>
  <div class="flex justify-center w-full md:w-auto">
    <div class="w-64 md:w-86 aspect-auto overflow-hidden">
      <img src={imageUrl} alt={title} class="w-full h-full object-cover rounded-lg">
    </div>
  </div>
</div>

<style>
</style>