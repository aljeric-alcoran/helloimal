import xIcon      from '@phosphor-icons/core/assets/regular/x.svg?raw';
import caretLeft  from '@phosphor-icons/core/assets/regular/caret-left.svg?raw';
import caretRight from '@phosphor-icons/core/assets/regular/caret-right.svg?raw';
import { getFullSizedImage, generateImageThumbnail } from '../../js/helpers.js';
import { icon } from '../../js/icons.js';

const fullUrl  = (src, w, h) => getFullSizedImage(src, w, h, 1400);
const thumbUrl = (src) => generateImageThumbnail(src, 80, 80);
const blurUrl  = (src) => generateImageThumbnail(src, 20, 20);

const btnBase = `flex items-center justify-center rounded-full bg-white/10 text-white backdrop-blur
   transition-colors duration-150 hover:bg-white/20
   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`;

const buildShell = (total) => `
   <!-- close -->
   <button id="sldr-close" type="button" aria-label="Close photo viewer"
      class="${btnBase} absolute right-4 top-4 z-30 size-10 cursor-pointer md:right-6 md:top-6">
      ${icon(xIcon, 'size-5')}
   </button>

   <!-- counter -->
   <p id="sldr-counter" aria-live="polite"
      class="absolute left-1/2 top-6 z-30 -translate-x-1/2 select-none font-mono text-xs text-white/70 md:top-8">
      1 / ${total}
   </p>

   <!-- prev arrow -->
   <button id="sldr-prev" type="button" aria-label="Previous photo"
      class="${btnBase} absolute left-3 top-1/2 z-30 size-11 -translate-y-1/2 cursor-pointer
             disabled:pointer-events-none disabled:opacity-20 md:left-6">
      ${icon(caretLeft, 'size-5')}
   </button>

   <!-- main image stage -->
   <div id="sldr-stage"
        class="relative flex flex-1 select-none items-center justify-center overflow-hidden touch-none"
        style="max-height: calc(100dvh - 130px);">

      <!-- blur placeholder -->
      <div id="sldr-blur"
           class="absolute inset-0 bg-cover bg-center transition-opacity duration-300"
           style="filter:blur(20px);transform:scale(1.05);"></div>

      <!-- main image (transform handled by JS) -->
      <img id="sldr-img" src="" alt="" draggable="false"
           class="relative max-h-full max-w-full select-none object-contain opacity-0 transition-opacity duration-300 md:rounded-2xl"
           style="transform-origin: center center; will-change: transform;" />
   </div>

   <!-- next arrow -->
   <button id="sldr-next" type="button" aria-label="Next photo"
      class="${btnBase} absolute right-3 top-1/2 z-30 size-11 -translate-y-1/2 cursor-pointer
             disabled:pointer-events-none disabled:opacity-20 md:right-6">
      ${icon(caretRight, 'size-5')}
   </button>

   <!-- thumbnail strip -->
   <div id="sldr-thumbs"
        class="absolute bottom-0 left-0 right-0 z-20 flex items-center justify-center gap-2 overflow-x-auto px-4 py-4
               [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
   </div>
`;

const imageSliderModal = (gallery, startIndex = 0, returnFocusTo = null) => {
   const modal = document.getElementById('imageModal');
   modal.innerHTML = buildShell(gallery.length);
   modal.classList.remove('hidden');
   modal.classList.add('flex', 'flex-col');
   document.body.classList.add('overflow-hidden');

   const closeBtn = document.getElementById('sldr-close');
   const prevBtn = document.getElementById('sldr-prev');
   const nextBtn = document.getElementById('sldr-next');
   const stage = document.getElementById('sldr-stage');
   const img = document.getElementById('sldr-img');
   const blurBg = document.getElementById('sldr-blur');
   const counter = document.getElementById('sldr-counter');
   const thumbsBar = document.getElementById('sldr-thumbs');

   let current = startIndex;
   let scale = 1;
   let originX = 0; 
   let originY = 0;
   let lastX = 0;
   let lastY = 0;

   gallery.forEach(({ src }, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.setAttribute('aria-label', `Show photo ${i + 1}`);
      btn.className = `shrink-0 w-12 h-12 rounded-lg overflow-hidden ring-2 transition-all duration-200
         ${i === current ? 'ring-white opacity-100 scale-105' : 'ring-transparent opacity-50 hover:opacity-80'}`;
      btn.innerHTML = `<img src="${thumbUrl(src)}" alt="" class="w-full h-full object-cover" loading="lazy" />`;
      btn.addEventListener('click', () => goTo(i));
      btn.dataset.thumb = i;
      thumbsBar.appendChild(btn);
   });

   const syncThumbs = () => {
      thumbsBar.querySelectorAll('[data-thumb]').forEach(btn => {
         const i = parseInt(btn.dataset.thumb);
         btn.className = btn.className.replace(/ring-\S+|opacity-\S+|scale-\S+/g, '').trim();
         btn.classList.add(
            'shrink-0', 'w-12', 'h-12', 'rounded-lg', 'overflow-hidden',
            'ring-2', 'transition-all', 'duration-200',
            ...(i === current
               ? ['ring-white', 'opacity-100', 'scale-105']
               : ['ring-transparent', 'opacity-50', 'hover:opacity-80'])
         );
      });
      // scroll active thumb into view
      const activeThumb = thumbsBar.querySelector(`[data-thumb="${current}"]`);
      activeThumb?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
   };

   // ── Load image 
   const loadImage = (index) => {
      const { src, w, h, alt = '' } = gallery[index];

      // reset zoom & pan
      scale = 1; originX = 0; originY = 0;
      applyTransform(false);

      // blur placeholder
      blurBg.style.backgroundImage = `url('${blurUrl(src)}')`;
      blurBg.style.opacity = '1';

      img.style.opacity = '0';
      img.alt = alt;
      img.src = fullUrl(src, w, h);

      img.onload = () => {
         img.style.opacity = '1';
         blurBg.style.opacity = '0';
      };

      counter.textContent = `${index + 1} / ${gallery.length}`;
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === gallery.length - 1;
      syncThumbs();
   };

   const goTo = (index) => {
      current = Math.max(0, Math.min(gallery.length - 1, index));
      loadImage(current);
   };

   const MIN_SCALE = 1;
   const MAX_SCALE = 5;

   const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

   const applyTransform = (animate = true) => {
      img.style.transition = animate ? 'transform 0.2s ease' : 'none';
      img.style.transform = `scale(${scale}) translate(${originX}px, ${originY}px)`;
   };

   const resetZoom = () => {
      scale = 1; originX = 0; originY = 0;
      applyTransform(true);
   };

   // double-tap/click to toggle zoom
   let lastTap = 0;
   stage.addEventListener('dblclick', (e) => {
      if (scale > 1) { resetZoom(); return; }
      const rect  = stage.getBoundingClientRect();
      const tapX  = e.clientX - rect.left - rect.width  / 2;
      const tapY  = e.clientY - rect.top  - rect.height / 2;
      scale   = 2.5;
      originX = -tapX * (scale - 1) / scale;
      originY = -tapY * (scale - 1) / scale;
      applyTransform(true);
   });

   function clampOrigin() {
      const stageW = stage.clientWidth;
      const stageH = stage.clientHeight;
   
      // Use rendered size (at scale=1), then multiply by current scale
      const renderedW = img.clientWidth  * scale;
      const renderedH = img.clientHeight * scale;
   
      // Only allow panning if the scaled image overflows the stage
      const maxX = Math.max(0, (renderedW - stageW) / 2 / scale);
      const maxY = Math.max(0, (renderedH - stageH) / 2 / scale);
   
      originX = clamp(originX, -maxX, maxX);
      originY = clamp(originY, -maxY, maxY);
   }
   
   // ── Touch: swipe + pinch
   let touchStartX = 0;
   let touchStartY = 0;
   let touchLastDist = 0;
   let isPinching = false;
   let panStartX = 0;
   let panStartY = 0;
   
   stage.addEventListener('touchstart', (e) => {
      if (e.touches.length === 2) {
         isPinching = true;
         touchLastDist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
         );
      } else if (e.touches.length === 1) {
         isPinching = false;
         touchStartX = e.touches[0].clientX;
         touchStartY = e.touches[0].clientY;
         panStartX = originX;
         panStartY = originY;
      }
   }, { passive: true });
   
   stage.addEventListener('touchmove', (e) => {
      if (e.touches.length === 2 && isPinching) {
         const dist = Math.hypot(
            e.touches[0].clientX - e.touches[1].clientX,
            e.touches[0].clientY - e.touches[1].clientY
         );
         const delta = dist / touchLastDist;
         scale = clamp(scale * delta, MIN_SCALE, MAX_SCALE);
         touchLastDist = dist;
         clampOrigin();
         applyTransform(false);
   
      } else if (e.touches.length === 1 && scale > 1) {
         const dx = e.touches[0].clientX - touchStartX;
         const dy = e.touches[0].clientY - touchStartY;
   
         // divide by scale so pan speed matches finger movement
         originX = panStartX + (dx / scale);
         originY = panStartY + (dy / scale);
   
         clampOrigin();
         applyTransform(false);
      }
   }, { passive: true });
   
   stage.addEventListener('touchend', (e) => {
      if (isPinching) { isPinching = false; return; }
      if (scale > 1)  return;
   
      const dx = e.changedTouches[0].clientX - touchStartX;
      const dy = Math.abs(e.changedTouches[0].clientY - touchStartY);
   
      if (Math.abs(dx) > 50 && dy < 80) {
         dx < 0 ? goTo(current + 1) : goTo(current - 1);
      }
   
      const now = Date.now();
      if (now - lastTap < 300) {
         if (scale > 1) resetZoom();
         else {
            scale = 2.5;
            clampOrigin();
            applyTransform(true);
         }
      }
      lastTap = now;
   }, { passive: true });
   
   // ── Mouse drag (desktop pan when zoomed) ─────────────────────────────────
   let isDragging = false;
   
   stage.addEventListener('mousedown', (e) => {
      if (scale <= 1) return;
      isDragging = true;
      lastX = e.clientX; lastY = e.clientY;
      stage.style.cursor = 'grabbing';
   });
   
   const onMouseMove = (e) => {
      if (!isDragging) return;
      originX += e.clientX - lastX;
      originY += e.clientY - lastY;
      lastX = e.clientX; lastY = e.clientY;
      clampOrigin();              // clamp during mouse drag
      applyTransform(false);
   };

   const onMouseUp = () => {
      isDragging = false;
      stage.style.cursor = scale > 1 ? 'grab' : 'default';
   };
   window.addEventListener('mousemove', onMouseMove);
   window.addEventListener('mouseup', onMouseUp);
   
   // ── Mouse wheel zoom ──────────────────────────────────────────────────────
   stage.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? 0.85 : 1.15;
      scale = clamp(scale * delta, MIN_SCALE, MAX_SCALE);
      if (scale === MIN_SCALE) { originX = 0; originY = 0; }
      clampOrigin();              // clamp after wheel zoom
      applyTransform(true);
      stage.style.cursor = scale > 1 ? 'grab' : 'default';
   }, { passive: false });
   
   // ── Keyboard ──────────────────────────────────────────────────────────────
   const onKey = (e) => {
      if (e.key === 'ArrowLeft')  goTo(current - 1);
      if (e.key === 'ArrowRight') goTo(current + 1);
      if (e.key === 'Escape')     closeModal();
   };
   window.addEventListener('keydown', onKey);

   // ── Close 
   const closeModal = () => {
      modal.classList.add('hidden');
      modal.classList.remove('flex', 'flex-col');
      document.body.classList.remove('overflow-hidden');
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      returnFocusTo?.focus();
   };

   closeBtn.addEventListener('click', closeModal);

   // ── Buttons 
   prevBtn.addEventListener('click', () => goTo(current - 1));
   nextBtn.addEventListener('click', () => goTo(current + 1));

   // ── Initial load 
   loadImage(current);
   closeBtn.focus();
};

export default imageSliderModal;