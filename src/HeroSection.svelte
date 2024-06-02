<!-- src/components/HeroSection.svelte -->
<script>
  export let title;
  export let content;
  export let imageUrl;
  export let isImageLeft = false;
</script>

<div class="flex flex-col md:flex-row items-center justify-around w-full md:w-5/6 p-6 h-1/4 md:h-1/4 border-1 border-gray-950 rounded-3xl shadow-xl bg-gray-800" class:md:flex-row-reverse={isImageLeft}>
  <div class="w-full md:max-w-lg mb-6 md:mb-0">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 text-center md:text-left">{title}</h1>
    <p class="text-base md:text-lg leading-relaxed text-center md:text-left">{content}</p>
  </div>
  <div class="flex justify-center w-full md:w-auto">
    <div class="w-64 md:w-80 aspect-auto overflow-hidden">
      <img src={imageUrl} alt={title} class="w-full h-full object-cover rounded-lg">
    </div>
  </div>
</div>

<style>
</style>