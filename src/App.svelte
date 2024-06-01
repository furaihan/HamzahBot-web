<script>
  import HeroSection from './HeroSection.svelte';
</script>

<div class="min-h-screen text-white">
  <div class="bg-gradient-to-b from-black to-purple-900">
    <!-- Header section -->
    <header class="w-full flex flex-row justify-between items-center py-4 px-8 bg-black bg-opacity-50">
      <div class="text-2xl font-bold">Hamzah</div>
      <nav class="hidden md:flex space-x-8">
        <a href="#" class="nav-link">Feature</a>
        <a href="#" class="nav-link">Premium</a>
        <a href="#" class="nav-link">Add to Discord</a>
      </nav>
      <div class="hidden md:flex items-center space-x-4">
        <select class="bg-transparent backdrop-blur-sm bg-white/20 text-white border border-gray-500 p-2 rounded-xl">
          <option>ID</option>
        </select>
        <button class="bg-transparent backdrop-blur-sm bg-white/20 border border-gray-500 hover:bg-purple-800 text-white px-4 py-2 rounded-xl">Login with Discord</button>
      </div>
    </header>
    
    <!-- Main content -->
    <main class="px-8 py-16 h-screen-set place-content-center">
      <section class="text-center space-y-8">
        <h1 class="text-6xl font-bold tracking-widest">Hamzah</h1>
        <p class="max-w-xl mx-auto">
          Hamzah adalah bot Discord yang lengkap, mudah digunakan, yang dipercaya oleh jutaan server Discord di seluruh dunia untuk mengelola, menghibur, dan mengembangkan komunitas mereka.
        </p>
        <button class="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full">
          Jadikan Server Discord Anda Jauh Lebih Baik
        </button>
      </section>
    </main>
  </div>
  
  <!-- Hero sections -->
  <section class="p-12 bg-dark-200">

        <!-- First Section -->
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
            <div class="max-w-lg">
                <h1 class="text-4xl font-bold mb-4">Kelola server Anda dengan lebih baik</h1>
                <p class="text-lg leading-relaxed">
                    Sambut member baru dengan pesan yang dipersonalisasi, ciptakan suasana positif dengan bad words filter dan link berbahaya, kelola voice channel dengan temporary voice, dan lindungi komunitas Anda dari ancaman online. Dapatkan fitur-fitur canggih untuk pengalaman server Discord yang lebih baik!
                </p>
            </div>
            <div class="mt-8 md:mt-0">
                <img src="path/to/your/hero-image.png" alt="Hero Image" class="max-w-full h-auto">
            </div>
        </div>

        <!-- Second Section -->
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
          <div class="mt-8 md:mt-0">
              <img src="path/to/your/hero-image.png" alt="Hero Image" class="max-w-full h-auto">
          </div>
            <div class="max-w-lg">
                <h1 class="text-4xl font-bold mb-4">Asah otak Anda dengan Wordle Bahasa Indonesia</h1>
                <p class="text-lg leading-relaxed">
                  Mainkan Wordle hari-hari dalam versi bahasa Indonesia. Kerahkan game ini untuk mengasah kosa kata bahasa Indonesia, melatih otak, dan bersaing dengan teman-teman.
                </p>
            </div>
        </div>

        <!-- Third Section -->
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
            <div class="max-w-lg">
                <h1 class="text-4xl font-bold mb-4">Promosikan saluran streaming Anda</h1>
                <p class="text-lg leading-relaxed">
                  Layanan yang memberikan pemberitahuan kepada pengguna tentang sorotan baru dan penting dari saluran streaming yang mereka sukai. Melalui notifikasi, pengguna dapat tetap terinformasi secara real-time tentang video-video atau siaran yang akan dimulai.
                </p>
            </div>
            <div class="mt-8 md:mt-0">
                <img src="path/to/your/hero-image.png" alt="Hero Image" class="max-w-full h-auto">
            </div>
        </div>

        <!-- Fourth Section -->
        <div class="flex flex-col md:flex-row items-center justify-between mb-12">
          <div class="mt-8 md:mt-0">
              <img src="path/to/your/hero-image.png" alt="Hero Image" class="max-w-full h-auto">
          </div>
          <div class="max-w-lg">
              <h1 class="text-4xl font-bold mb-4">Ubah imajinasi menjadi nyata dengan AI</h1>
              <p class="text-lg leading-relaxed">
                Uji coba kemampuan AI sistem mengubah gambar untuk gambar seni dan kreatif. Rasakan bot kami mentransformasi sentuhan magis pada foto-foto teman!
              </p>
          </div>
        </div>
  </section>

  <!-- Call to Action Section -->
  <section class="flex items-center justify-center py-10 bg-purple-750">
    <button class="flex items-center bg-white text-black font-bold px-6 py-3 rounded-2xl">
      <img src="/src/assets/pngwing 6.png" alt="discord">
      <span class="ml-2 text-gray-700">Add to Discord</span>
    </button>
  </section>

  <!-- Footer -->
  <footer class="bg-gray-900 py-8">
    <div class="container mx-auto flex justify-between items-center">
      <div class="text-center">
        <h1 class="text-white font-semibold text-lg">Hamzah</h1>
      </div>
      <div class="md:text-center">
          <p class="mt-4 max-w-md">
              Hamzah adalah bot Discord yang lengkap, mudah digunakan, yang dipercaya oleh jutaan server Discord di seluruh dunia untuk mengelola, menghibur, dan mengembangkan komunitas mereka.
          </p>
      </div>
      <div class="flex flex-col space-y-2 text-right">
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
  .rounded-gradient-bg {
            background: linear-gradient(to right, #4f46e5, #6366f1);
            border-radius: 20px;
            padding: 2rem;
  }
</style>
