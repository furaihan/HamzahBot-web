<!-- src/components/HeroSection.svelte -->
<script>
  export let title;
  export let content;
  export let imageUrl;
  export let isImageLeft = false;
  export let aspectRatio = 'auto';
  export let id = '';

  // Function to handle different aspect ratio values
  function getAspectRatioClass(ratio) {
    switch (ratio) {
      case 'square':
        return 'aspect-square';
      case 'video':
        return 'aspect-video';
      case '16/9':
        return 'aspect-[16/9]';
      case '4/3':
        return 'aspect-[4/3]';
      case '3/2':
        return 'aspect-[3/2]';
      case '1/1':
        return 'aspect-[1/1]';
      default:
        return 'aspect-auto';
    }
  }

  $: aspectRatioClass = getAspectRatioClass(aspectRatio);
</script>

<section {id} class="flex flex-col w-full md:flex-row items-center justify-between md:w-3/4 p-6 h-1/4 z-10" class:md:flex-row-reverse={isImageLeft}>
  <div class="max-w-lg md:max-w-sm mb-6 md:mb-0">
    <h1 class="text-3xl md:text-3xl font-bold mb-4 text-center md:text-left">{title}</h1>
    <p class="text-sm md:text-md leading-relaxed text-center md:text-justify">{content}</p>
  </div>
  <div class="flex justify-center w-full md:w-auto">
    <div class="w-64 md:w-86 overflow-hidden {aspectRatioClass}">
      <img src={imageUrl} alt={title} class="w-full h-full object-cover rounded-lg">
    </div>
  </div>
</section>