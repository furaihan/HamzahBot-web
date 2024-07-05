<script>
    const plans = [
      {
        title: "Free",
        price: "Gratis",
        originalPrice: "IDR 0",
        features: [
          "Server Management",
          "Woedle Bahasa Indonesia",
          "Promosi Streaming 30 post/bln",
          "AI Image Generator\nGPU time 15 menit/bulan"
        ],
        buttonText: "Get the Lifetime plan"
      },
      {
        title: "Lifetime",
        price: "IDR 1.500.000",
        originalPrice: "IDR 3.000.000",
        features: [
          "Server Management",
          "Woedle Bahasa Indonesia",
          "Promosi Streaming Unlimited",
          "AI Image Generator\nGPU time 3 Jam/bulan"
        ],
        buttonText: "Get the Lifetime plan"
      },
      {
        title: "Tahunan",
        price: "IDR 50.000",
        originalPrice: "IDR 900.000",
        features: [
          "Server Management",
          "Woedle Bahasa Indonesia",
          "Promosi Streaming Unlimited",
          "AI Image Generator\nGPU time 3 Jam/bulan"
        ],
        buttonText: "Get the Lifetime plan"
      },
      {
        title: "Bulanan",
        price: "IDR 80.000",
        originalPrice: "IDR 3.000.000",
        features: [
          "Server Management",
          "Woedle Bahasa Indonesia",
          "Promosi Streaming Unlimited",
          "AI Image Generator\nGPU time 3 Jam/bulan"
        ],
        buttonText: "Get the Lifetime plan"
      }
    ];
  </script>
  
  <div class="bg-gray-900 text-white py-12">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        {#each plans as plan}
          <div class="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h2 class="text-2xl font-bold mb-4">{plan.title}</h2>
            <p class="text-xl line-through">{plan.originalPrice}</p>
            <p class="text-4xl font-bold mb-4">{plan.price}</p>
            <ul class="mb-6">
              {#each plan.features as feature}
                <li class="flex items-start mb-2">
                  <span class="mr-2">✔️</span>
                  <span>{feature}</span>
                </li>
              {/each}
            </ul>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
              {plan.buttonText}
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>
  
  <style>
    ul li span {
      white-space: pre-wrap; /* To handle new lines in feature text */
    }
  </style>
  