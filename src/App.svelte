<script>
  import HeroSection from './HeroSection.svelte';
  import NavbarItemsDesktop from './NavbarItemsDesktop.svelte';
  import { onMount } from 'svelte';

  let menuOpen = false;
  let showScrollToTop = false;

  const toggleMenu = () => {
    menuOpen = !menuOpen;
    console.log("menu open: ", menuOpen);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  onMount(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');

    const handleMediaQueryChange = (event) => {
      if (event.matches) {
        menuOpen = false;
      }
    };

    mediaQuery.addListener(handleMediaQueryChange);

    const handleScroll = () => {
      showScrollToTop = window.pageYOffset > 300;
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
      window.removeEventListener('scroll', handleScroll);
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
              <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
            </svg>
          </button>
        </div>
      </div>
      <nav class="flex-col space-y-4 bg-gray-800 border rounded border-black flex mx-6 mb-4 items-start pl-4 {menuOpen ? "flex" : "hidden"}">
        <a href="/#" class="nav-link w-full">Feature</a>
        <a href="/#" class="nav-link w-full">Premium</a>
        <a href="/#" class="nav-link w-full text-discord hover:text-white font-bold">Add to Discord</a>
      </nav>
    </header>
    
    <!-- Main content -->
    <main class="px-4 md:px-8 py-16 min-h-screen flex flex-col items-center justify-center relative">
      <section class="text-center space-y-8">
        <h1 class="text-4xl md:text-6xl font-bold tracking-widest">Hamzah</h1>
        <p class="max-w-xl mx-auto text-sm md:text-base">
          Tingkatkan server Discord Anda dengan bot multifungsi kami—dari sambutan ramah hingga keamanan canggih, semua dalam satu paket untuk pengalaman komunitas yang lebih baik!.
        </p>
      </section>
      
      <!-- Bouncing Down Arrow -->
      <div class="absolute bottom-8 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
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
  <section class="flex items-center justify-center py-10 bg-discord">
    <button class="transition flex items-center bg-white font-bold px-4 md:px-6 py-3 rounded-2xl text-sm md:text-base hover:-translate-y-2 ease-in-out">
      <img src="/src/assets/discord-mark-blue.svg" alt="discord" class="w-6">
      <span class="ml-2 text-discord">Add to Discord</span>
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
            Tingkatkan server Discord Anda dengan bot multifungsi kami—dari sambutan ramah hingga keamanan canggih, semua dalam satu paket untuk pengalaman komunitas yang lebih baik!.
          </p>
      </div>
      <div class="flex flex-col space-y-2 text-center md:text-right mb-4 md:mb-0">
          <a href="/#" class="hover:text-white">Contact</a>
          <a href="/#" class="hover:text-white">Social</a>
          <a href="/#" class="hover:text-white">Term of use</a>
          <a href="/#" class="hover:text-white">Privacy Policy</a>
          <a href="/#" class="hover:text-white">Premium</a>
      </div>
    </div>
  </footer>
<!-- Scroll to Top Button -->
<div class="fixed bottom-4 right-4 z-50" class:hidden={!showScrollToTop}>
  <button on:click={scrollToTop} class="bg-purple-600 hover:bg-purple-700 text-white rounded-full p-3 shadow-lg transition-transform hover:scale-110">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
    </svg>
  </button>
</div>
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
