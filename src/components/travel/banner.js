const PHOTOS = [
   'https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_400,h_500,c_fill,g_face/v1754370743/2024_06_01_13_26_IMG_4240_mnxtj8.jpg',
   'https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_400,h_500,c_fill,g_face/v1773221731/photo_2026-03-11_17-34-03_pteewl.jpg',
   'https://res.cloudinary.com/docdldire/image/upload/f_auto,q_auto,w_400,h_500,c_fill,g_face/v1754370742/2024_06_01_13_28_IMG_4245_pywjh2.jpg',
];

const template = `
   <div id="travel-banner"
      class="relative min-h-dvh w-full overflow-hidden
            bg-gray-50 dark:bg-gray-900
            flex items-center z-0">

      <!-- ── Dot grid background (matches body::before but contained) ── -->
      <div class="absolute inset-0 pointer-events-none"
         style="background-image:radial-gradient(circle,rgba(49,80,206,0.07) 1px,transparent 1px);background-size:28px 28px;"></div>

      <!-- ── Soft blue blob top-right ── -->
      <div class="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full
                  bg-[#3150CE]/8 dark:bg-[#3150CE]/12 blur-3xl pointer-events-none"></div>
      <!-- ── Soft blob bottom-left ── -->
      <div class="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full
                  bg-[#818cf8]/6 dark:bg-[#818cf8]/10 blur-3xl pointer-events-none"></div>

      <!-- ── Animated plane ── -->
      <div id="travel-plane"
         class="absolute z-10 pointer-events-none
               opacity-0 animate-[planeFly_9s_ease-in-out_0.8s_1_both]">
         <svg width="56" height="28" viewBox="0 0 56 28" fill="none">
            <path d="M4 14L28 2L52 14L28 20L4 14Z" fill="#3150CE" opacity="0.9"/>
            <path d="M20 14L28 20L36 14" fill="#818cf8" opacity="0.7"/>
            <path d="M16 14L22 22" stroke="#3150CE" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M40 14L44 19" stroke="#3150CE" stroke-width="1.5" stroke-linecap="round"/>
         </svg>
      </div>

      <!-- ── Dashed flight path arc (SVG overlay) ── -->
      <svg class="absolute inset-0 w-full h-full pointer-events-none z-[1]"
         viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice" fill="none">
         <path d="M 80 520 Q 320 80 820 120"
               stroke="#3150CE" stroke-width="1.5"
               stroke-dasharray="8 7"
               stroke-dashoffset="400"
               stroke-linecap="round"
               opacity="0.2"
               style="animation: dashDraw 1.8s ease 0.6s both;"/>
      </svg>

      <!-- ── Main content grid ── -->
      <div class="relative z-10 w-full max-w-screen-xl mx-auto
                  px-6 md:px-8 lg:px-12
                  py-24 md:py-16
                  grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

         <!-- LEFT: Text side -->
         <div class="flex flex-col items-start gap-6 order-2 lg:order-1">

            <!-- Eyebrow badge -->
            <div class="opacity-0 animate-[fadeUp_0.5s_ease_0.1s_both]">
               <span class="inline-flex items-center gap-2
                           bg-[#3150CE]/8 dark:bg-[#3150CE]/15
                           border border-[#3150CE]/20 dark:border-[#3150CE]/30
                           text-[#3150CE] dark:text-[#818cf8]
                           text-[0.50rem] md:text-[0.65rem] font-bold tracking-[0.16em] uppercase
                           px-3.5 py-1.5 rounded-full">
                  It's time to
               </span>
            </div>

            <!-- Big stacked headline -->
            <div class="opacity-0 animate-[fadeUp_0.6s_cubic-bezier(.22,.68,0,1.2)_0.2s_both] space-y-2 md:space-y-1">
               <h1 class="font-black leading-[0.9] tracking-[-0.04em] text-gray-900 dark:text-white"
                  style="font-size: clamp(3.5rem, 10vw, 6.5rem);">
                  TRAVEL
               </h1>
               <h1 class="font-black leading-[0.9] tracking-[-0.04em] text-[#3150CE]"
                  style="font-size: clamp(3.5rem, 10vw, 6.5rem);">
                  EXPLORE
               </h1>
               <h1 class="font-black leading-[0.9] tracking-[-0.04em] text-gray-900 dark:text-white"
                  style="font-size: clamp(3.5rem, 10vw, 6.5rem);">
                  ENJOY
               </h1>
            </div>

            <!-- Description -->
            <p class="text-sm/7 text-gray-500 dark:text-gray-400 max-w-[40ch]
                     opacity-0 animate-[fadeUp_0.5s_ease_0.4s_both]">
               Capturing one destination at a time — from sun-soaked islands
               to mountain fog, every trip is a story worth telling.
            </p>
         </div>

         <!-- RIGHT: Stacked rotated photo cards -->
         <div class="relative flex justify-center items-center order-1 lg:order-2
                     h-[340px] sm:h-[420px] lg:h-[520px]
                     opacity-0 animate-[fadeUp_0.7s_cubic-bezier(.22,.68,0,1.2)_0.35s_both]">

            <!-- Card 1 — back-left, most rotated -->
            <div class="absolute
                        w-[180px] h-[230px] sm:w-[210px] sm:h-[270px] lg:w-[240px] lg:h-[310px]
                        rounded-2xl overflow-hidden shadow-xl
                        border-4 border-white dark:border-gray-700
                        -translate-x-[60px] sm:-translate-x-[80px] translate-y-[20px]
                        -rotate-[14deg]
                        transition-transform duration-300 hover:-rotate-[12deg] hover:scale-[1.02]
                        animate-[floatY_7s_ease-in-out_0.5s_infinite]">
               <img src="${PHOTOS[0]}"
                  alt="Travel photo 1" width="240" height="310"
                  class="w-full h-full object-cover"
                  loading="lazy" decoding="async"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>

            <!-- Card 2 — front-center, slight tilt -->
            <div class="absolute z-10
                        w-[190px] h-[250px] sm:w-[220px] sm:h-[290px] lg:w-[255px] lg:h-[330px]
                        rounded-2xl overflow-hidden shadow-2xl
                        border-4 border-white dark:border-gray-700
                        translate-x-[10px] -translate-y-[10px]
                        rotate-[3deg]
                        transition-transform duration-300 hover:rotate-[1deg] hover:scale-[1.02]
                        animate-[floatY_6s_ease-in-out_0s_infinite]">
               <img src="${PHOTOS[1]}"
                  alt="Travel photo 2" width="255" height="330"
                  class="w-full h-full object-cover"
                  loading="lazy" decoding="async"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            <!-- Card 3 — back-right -->
            <div class="absolute
                        w-[170px] h-[220px] sm:w-[200px] sm:h-[260px] lg:w-[230px] lg:h-[295px]
                        rounded-2xl overflow-hidden shadow-xl
                        border-4 border-white dark:border-gray-700
                        translate-x-[65px] sm:translate-x-[90px] translate-y-[30px]
                        rotate-[12deg]
                        transition-transform duration-300 hover:rotate-[10deg] hover:scale-[1.02]
                        animate-[floatY_8s_ease-in-out_1s_infinite]">
               <img src="${PHOTOS[2]}"
                  alt="Travel photo 3" width="230" height="295"
                  class="w-full h-full object-cover"
                  loading="lazy" decoding="async"/>
               <div class="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent"></div>
            </div>

            <!-- Destination badge floating over cards -->
            <div class="absolute z-20 bottom-4 left-1/2 -translate-x-1/2
                        bg-white dark:bg-gray-800
                        border border-gray-100 dark:border-gray-700
                        rounded-2xl px-4 py-2.5 shadow-lg
                        flex items-center gap-2.5
                        animate-[floatY_5s_ease-in-out_0.3s_infinite]">
               <span class="text-xs font-bold text-[#3150CE]">Philippines 🇵🇭</span>
            </div>
         </div>

      </div>
   </div>
`;

const setTravelBannerSection = (element) => {
   element.innerHTML = template;

   // Position plane at bottom-left to start flight across
   const plane = document.getElementById('travel-plane');
   if (plane) {
      plane.style.left   = '0px';
      plane.style.bottom = '30%';
   }

   // Hide scroll hint
   const hint = document.getElementById('travel-scroll-hint');
   if (hint) {
      window.addEventListener('scroll', () => {
         hint.style.opacity = window.scrollY > 80 ? '0' : '';
      }, { passive: true });
   }
};

export default setTravelBannerSection;