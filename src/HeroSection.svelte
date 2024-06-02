<!-- src/HeroSection.svelte -->
<script>
  export let title;
  export let content;
  export let imageUrl;
  export let isImageLeft = false;
</script>

<div class="flex items-center justify-around h-1/4 w-5/6 border-1 border-gray-950 rounded-3xl shadow-xl bg-gray-800" class:flex-row-reverse={isImageLeft}>
  <div class="max-w-lg">
    <h1 class="text-4xl font-bold mb-4">{title}</h1>
    <p class="text-lg leading-relaxed">{content}</p>
  </div>
  <div class="mt-8 md:mt-0 flex justify-center">
    <div class="w-64 aspect-auto overflow-hidden">
      <img src={imageUrl} alt={title} class="w-full h-full object-cover">
    </div>
  </div>
</div>