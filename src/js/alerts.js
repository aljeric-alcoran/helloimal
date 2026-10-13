import checkIcon   from '@phosphor-icons/core/assets/regular/check-circle.svg?raw';
import warningIcon from '@phosphor-icons/core/assets/regular/warning-circle.svg?raw';
import { icon } from './icons.js';

const alertStyles = {
   success: { box: 'border-line bg-sunken', icon: icon(checkIcon, 'size-5 text-emerald-600') },
   error:   { box: 'border-danger/40 bg-danger-soft', icon: icon(warningIcon, 'size-5 text-danger') },
}

const alertTypes = {
   success: 'Success.',
   error: 'Error.'
}

const setAlerts = (state, message) => {
   const style = alertStyles[state];
   return `
      <div class="flex w-full items-start gap-3 rounded-xl border p-4 text-sm text-ink ${style.box}" role="alert">
         ${style.icon}
         <p><span class="font-semibold">${alertTypes[state]}</span> ${message}</p>
      </div>
   `
}

export default setAlerts;
