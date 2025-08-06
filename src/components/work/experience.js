const template = `
   <div class="h-full flex flex-col items-center justify-center">
      <div class="mt-24 w-full max-w-screen-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-t-sm border-b">
         <div class="w-14 h-14 flex items-center justify-center p-4 rounded-sm bg-gray-200 dark:bg-gray-700">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
               <path fill-rule="evenodd" d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z" clip-rule="evenodd"/>
            </svg>
         </div>
         <p class="mt-6 text-xl font-semibold">Work Experience</p>
         <p class="mt-3 text-base text-gray-500 dark:text-gray-400 w-full lg:w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quase. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quase.</p>
      </div>
      <div class="mb-24 w-full max-w-screen-lg bg-gray-100 dark:bg-gray-800 p-8 rounded-b-sm">
         <p class="mt-6 text-lg font-semibold">Work Experience</p>
         <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Easypick • Fulltime</p>
      </div>
   <div/>
`;

const setWorkExperience= (element) => {
   element.innerHTML = template;
};

export default setWorkExperience;