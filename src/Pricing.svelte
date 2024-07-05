<div class="bg-dark-200 text-white py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div bind:this={container} class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each plans as plan}
        <div class="plan-card p-6 bg-gray-900 rounded-lg shadow-lg flex flex-col relative overflow-hidden">
          {#if plan.savings}
            <div class="absolute top-0 right-0 bg-green-500 text-white px-2 py-1 rounded-bl-lg text-sm font-bold">
              {plan.savings}
            </div>
          {/if}
          <h2 class="text-2xl font-bold mb-4">{plan.title}</h2>
          <p class="text-4xl font-bold mb-4">{plan.priceDisplay}</p>
          <ul class="grow mb-6">
            {#each plan.features as feature}
              <li class="flex items-start mb-2">
                <span class="mr-2">✔️</span>
                <span>{feature}</span>
              </li>
            {/each}
          </ul>
          <button
            class="w-full bg-violet-800 text-white font-bold py-3 px-4 rounded transition duration-300 ease-in-out
         {plan.price === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-violet-950'}"
            disabled={plan.price === 0}
          >
            {plan.buttonText}
          </button>
        </div>
      {/each}
    </div>
  </div>
</div>

<script>
  import { onMount } from 'svelte';

  const plans = [
    {
      title: 'Free',
      price: 0,
      priceDisplay: 'Gratis',
      features: [
        'Server Management',
        'Woedle Bahasa Indonesia',
        'Promosi Streaming 30 post/bulan',
        'AI Image Generator\nGPU time 15 menit/bulan',
      ],
      buttonText: 'Gratis Selamanya',
      savings: null,
    },
    {
      title: 'Sekali Bayar',
      price: 1500000,
      priceDisplay: 'IDR 1.500.000',
      features: [
        'Server Management',
        'Woedle Bahasa Indonesia',
        'Promosi Streaming Unlimited',
        'AI Image Generator\nGPU time 3 Jam/bulan',
        'Bayar Sekali Langganan Selamanya',
      ],
      buttonText: 'Dapatkan Sekali Bayar',
      savings: 'Populer',
    },
    {
      title: 'Tahunan',
      price: 50000,
      priceDisplay: 'IDR 50.000',
      features: [
        'Server Management',
        'Woedle Bahasa Indonesia',
        'Promosi Streaming Unlimited',
        'AI Image Generator\nGPU time 3 Jam/bulan',
      ],
      buttonText: 'Dapatkan Paket Tahunan',
      savings: 'Hemat 37.5%',
    },
    {
      title: 'Bulanan',
      price: 80000,
      priceDisplay: 'IDR 80.000',
      features: [
        'Server Management',
        'Woedle Bahasa Indonesia',
        'Promosi Streaming Unlimited',
        'AI Image Generator\nGPU time 3 Jam/bulan',
      ],
      buttonText: 'Dapatkan Paket Bulanan',
      savings: 'Hemat 0%',
    },
  ];

  let container;
  let resizeObserver;

  onMount(() => {
    resizeObserver = new ResizeObserver(() => {
      adjustLayout();
    });
    resizeObserver.observe(container);
    return () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  });

  function adjustLayout() {
    const cards = container.querySelectorAll('.plan-card');
    let maxHeight = 0;
    cards.forEach(card => {
      card.style.height = 'auto';
      maxHeight = Math.max(maxHeight, card.offsetHeight);
    });
    cards.forEach(card => {
      card.style.height = `${maxHeight}px`;
    });
  }

  function formatPrice(price) {
    if (price === 0) return 'Gratis';
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  }
</script>

<style>
  ul li span {
    white-space: pre-wrap;
  }
  .plan-card {
    transition: all 0.3s ease-in-out;
  }
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
</style>
