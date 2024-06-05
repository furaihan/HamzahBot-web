<script>
  import HeroSection from './HeroSection.svelte';
  import NavbarItemsDesktop from './NavbarItemsDesktop.svelte';
  import { onMount } from 'svelte';

  let menuOpen = false;
  const toggleMenu = () => {
    menuOpen = !menuOpen;
    console.log("menu open: ", menuOpen);
  }

  onMount(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        menuOpen = false;
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  });
</script>

<div class="min-h-screen text-white">
  <div class="bg-gradient-to-b from-black to-purple-900">
    <!-- Header section -->
    <header class="flex flex-col h-auto bg-black">
      <div class="w-full flex flex-row justify-between items-center py-4 px-4 md:px-8 md:h-18">
        <div class="text-2xl font-bold mb-4 md:mb-0">Hamzah</div>
        <NavbarItemsDesktop />
        <div class="flex flex-row items-center space-y-0 space-x-4">
          <button class="group w-full md:w-auto backdrop-blur-sm bg-discord text-white px-4 py-2 rounded-3xl flex flex-row items-center space-x-2 border border-white hover:bg-white hover:text-discord transition ease-in-out hover:-translate-y-1">
            <div class="aspect-auto items-center">
              <img src="/src/assets/discord-mark-white.svg" alt="discord" class="w-6 group-hover:hidden">
              <img src="/src/assets/discord-mark-blue.svg" alt="discord" class="w-6 hidden group-hover:block">
            </div>
            <p>Login with Discord</p>
          </button>
          <button class="aspect-auto items-center md:hidden" on:click={toggleMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-6 fill-white">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav class="flex-col space-y-4 bg-gray-800 border rounded border-black flex mx-4 mb-4 items-start pl-4 {menuOpen ? "flex" : "hidden"}">
        <a href="#" class="nav-link w-full">Feature</a>
        <a href="#" class="nav-link w-full">Premium</a>
        <a href="#" class="nav-link w-full text-discord hover:text-white font-bold">Add to Discord</a>
      </nav>
    </header>
    
    <!-- Main content -->
    <main class="px-4 md:px-8 py-16 min-h-screen flex items-center justify-center">
      <section class="text-center space-y-8">
        <h1 class="text-4xl md:text-6xl font-bold tracking-widest">Hamzah</h1>
        <p class="max-w-xl mx-auto text-sm md:text-base">
          Hamzah adalah bot Discord yang lengkap, mudah digunakan, yang dipercaya oleh jutaan server Discord di seluruh dunia untuk mengelola, menghibur, dan mengembangkan komunitas mereka.
        </p>
        <p class="text-white px-6 py-3 text-sm self-end md:text-base">
          Jadikan Server Discord Anda Jauh Lebih Baik
        </p>
      </section>
    </main>
  </div>
  
  <!-- Hero sections -->
  <section class=" bg-dark-200 flex flex-col space-y-20 p-20 items-center w-full">
      <HeroSection 
        title="Kelola server Anda dengan lebih baik" 
        content="Satu fitur manajemen dengan pesan yang dipersonalisasi, pengaturan server pintar, dan bot yang dapat melakukan tugas berkala. Kelas voice channel dengan temporary voice, dan undang teman-teman Anda dari acara di online. Dapatkan fitur-fitur canggih untuk pengalaman server Discord yang lebih baik."
        imageUrl="/src/assets/hero1.png"
        isImageLeft={false} 
      />
      <HeroSection 
        title="Asah otak Anda dengan Wordle Bahasa Indonesia" 
        content="Mainkan Wordle hari-hari dalam versi bahasa Indonesia. Kerahkan game ini untuk mengasah kosa kata bahasa Indonesia, melatih otak, dan bersaing dengan teman-teman."
        imageUrl="/src/assets/hero2.svg"
        isImageLeft={true} 
      />
      <HeroSection 
        title="Promosikan saluran streaming Anda" 
        content="Layanan yang memberikan pemberitahuan kepada pengguna tentang sorotan baru dan penting dari saluran streaming yang mereka sukai. Melalui notifikasi, pengguna dapat tetap terinformasi secara real-time tentang video-video atau siaran yang akan dimulai."
        imageUrl="/src/assets/hero3.png"
        isImageLeft={false} 
        aspectRatio="4/3"
      />
      <HeroSection 
        title="Ubah imajinasi menjadi nyata dengan AI" 
        content="Uji coba kemampuan AI sistem mengubah gambar untuk gambar seni dan kreatif. Rasakan bot kami mentransformasi sentuhan magis pada foto-foto teman!"
        imageUrl="/src/assets/hero4.png"
        isImageLeft={true} 
      />
  </section>

  <!-- Call to Action Section -->
  <section class="flex items-center justify-center py-10 bg-purple-750">
    <button class="flex items-center bg-white text-black font-bold px-4 md:px-6 py-3 rounded-2xl text-sm md:text-base">
      <img src="/src/assets/pngwing 6.png" alt="discord" class="w-6 md:w-auto">
      <span class="ml-2 text-gray-700">Add to Discord</span>
    </button>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 py-8">
    <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-0">
      <div class="text-center mb-4 md:mb-0">
        <h1 class="text-white font-semibold text-lg">Hamzah</h1>
      </div>
      <div class="text-center mb-4 md:mb-0 order-3 md:order-none">
          <p class="mt-4 max-w-md text-sm md:text-base">
              Hamzah adalah bot Discord yang lengkap, mudah digunakan, yang dipercaya oleh jutaan server Discord di seluruh dunia untuk mengelola, menghibur, dan mengembangkan komunitas mereka.
          </p>
      </div>
      <div class="flex flex-col space-y-2 text-center md:text-right mb-4 md:mb-0">
          <a href="#" class="hover:text-white">Contact</a>
          <a href="#" class="hover:text-white">Social</a>
          <a href="#" class="hover:text-white">Term of use</a>
          <a href="#" class="hover:text-white">Privacy Policy</a>
          <a href="#" class="hover:text-white">Premium</a>
      </div>
    </div>
  </footer>

</div>

<style>
  .nav-link:hover {
    text-decoration: underline;
  }
   @media (max-width: 768px) {
    .text-center {
      text-align: center;
    }
  }
</style>
