const alertStyles = {
   success: 'text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800/50 bg-green-50 dark:bg-green-900/20',
   error: 'text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800/50 bg-red-50 dark:bg-red-900/20'
}

const alertTypes = {
   success: 'Success! ',
   error: 'Error! '
}

const setAlerts = (state, message) => {
   return `
      <div class="w-full flex items-center p-4 text-sm rounded-sm ${alertStyles[state]}" role="alert">
         <svg class="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
         </svg>   
         <span class="sr-only">Info</span>
         <div><span class="font-medium">${alertTypes[state]}</span>${message}</div>
      </div>
   `
}

export default setAlerts;