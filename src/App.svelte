<script>
  import HeroSection from './HeroSection.svelte';
</script>

<div class="min-h-screen bg-gradient-to-b from-black via-purple-900 to-black text-white">
  <!-- Header section -->
  <header class="w-full flex flex-row justify-between items-center py-4 px-8 bg-black bg-opacity-50">
    <div class="text-2xl font-bold">Hamzah</div>
    <nav class="hidden md:flex space-x-8">
      <a href="#" class="nav-link">Feature</a>
      <a href="#" class="nav-link">Premium</a>
    </nav>
    <div class="hidden md:flex items-center space-x-4">
      <select class="bg-transparent text-white border border-gray-500 p-2 rounded">
        <option>ID</option>
      </select>
      <button class="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded">Login with Discord</button>
    </div>
  </header>
  
  <!-- Main content -->
  <main class="px-8 py-16">
    <section class="text-center space-y-8">
      <h1 class="text-6xl font-bold">Hamzah</h1>
      <p class="max-w-xl mx-auto">
        Hamzah adalah bot Discord yang lengkap, mudah digunakan, yang dipercaya oleh jutaan server Discord di seluruh dunia untuk mengelola, menghibur, dan mengembangkan komunitas mereka.
      </p>
      <button class="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-full">
        Jadikan Server Discord Anda Jauh Lebih Baik
      </button>
    </section>

    <!-- Hero sections -->
    <section class="mt-16 space-y-16">
      <HeroSection 
        title="Kelola server Anda dengan lebih baik" 
        content="Satu fitur manajemen dengan pesan yang dipersonalisasi, pengaturan server pintar, dan bot yang dapat melakukan tugas berkala. Kelas voice channel dengan temporary voice, dan undang teman-teman Anda dari acara di online. Dapatkan fitur-fitur canggih untuk pengalaman server Discord yang lebih baik."
        imageUrl="path/to/your/image1.png"
        isImageLeft={true} 
      />
      <HeroSection 
        title="Asah otak Anda dengan Wordle Bahasa Indonesia" 
        content="Mainkan Wordle hari-hari dalam versi bahasa Indonesia. Kerahkan game ini untuk mengasah kosa kata bahasa Indonesia, melatih otak, dan bersaing dengan teman-teman."
        imageUrl="path/to/your/image2.png"
        isImageLeft={false} 
      />
      <HeroSection 
        title="Promosikan saluran streaming Anda" 
        content="Layanan yang memberikan pemberitahuan kepada pengguna tentang sorotan baru dan penting dari saluran streaming yang mereka sukai. Melalui notifikasi, pengguna dapat tetap terinformasi secara real-time tentang video-video atau siaran yang akan dimulai."
        imageUrl="path/to/your/image3.png"
        isImageLeft={true} 
      />
      <HeroSection 
        title="Ubah imajinasi menjadi nyata dengan AI" 
        content="Uji coba kemampuan AI sistem mengubah gambar untuk gambar seni dan kreatif. Rasakan bot kami mentransformasi sentuhan magis pada foto-foto teman!"
        imageUrl="path/to/your/image4.png"
        isImageLeft={false} 
      />
    </section>
  </main>
</div>

<style>
  .nav-link:hover {
    text-decoration: underline;
  }
</style>
