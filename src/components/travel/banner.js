const template = `
   <div class="h-dvh flex items-center justify-center md:justify-start">
      <div class="w-full text-center md:space-y-4">
         <p class="text-lg md:text-2xl md:text-4xl text-gray-700 dark:text-gray-300">Welcome to</p>
         <p class="text-4xl md:text-8xl font-bold">My Travel Journey</p>
      </div>
   <div/>
`;

const setTravelBannerSection = (element) => {
   element.innerHTML = template;
};

export default setTravelBannerSection;