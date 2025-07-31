const template = `
   <div class="h-dvh flex items-center justify-center md:justify-start">
      <div class="w-full text-center md:space-y-4">
         <p class="text-xl font-semibold text-gray-800 dark:text-gray-100">Welcome to</p>
         <p class="text-6xl md:text-8xl font-bold">My Travel Journey</p>
      </div>
   <div/>
`;

const setTravelBannerSection = (element) => {
   element.innerHTML = template;
};

export default setTravelBannerSection;