// Icon helper for Phosphor icons (@phosphor-icons/core, "regular" weight).
//
// Usage:
//    import arrowRight from '@phosphor-icons/core/assets/regular/arrow-right.svg?raw';
//    import { icon } from '../js/icons.js';
//    `${icon(arrowRight, 'size-4')}`
//
// Icons are decorative by default (aria-hidden). Give the parent control
// an aria-label or visible text.

export const icon = (raw, cls = 'size-4') =>
   raw.replace('<svg ', `<svg class="${cls} shrink-0" aria-hidden="true" focusable="false" `);
