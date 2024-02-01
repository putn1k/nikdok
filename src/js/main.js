import {
  iosVhFix,
} from './modules/utils.js';

import {
  initHeaderSettings,
} from './modules/header.js';

import {
  validateForms,
} from './modules/validate.js';

import {
  initModals,
} from './modules/modal.js';

import {
  initSliders,
} from './modules/slider.js';

import {
  initScrollTop,
} from './modules/scroll-top.js';

import {
  initGalleries,
} from './modules/galleries.js';
import {
  initAnimationInteger,
} from './modules/animation-integers.js';

document.addEventListener( 'DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener( 'load', () => {
    initHeaderSettings();
    validateForms();
    initModals();
    initSliders();
    initScrollTop();
    initGalleries();
    initAnimationInteger();
  } );
} );
