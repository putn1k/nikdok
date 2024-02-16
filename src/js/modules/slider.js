import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-hero', sliderConfig.mainHero );
  document.querySelectorAll( '.slider-gallery .slider' ).forEach( ( slider ) => {
    const currentConfig = Object.assign( {
      pagination: {
        el: slider.querySelector( '.slider__pagination' ),
        clickable: false,
      },
      navigation: {
        prevEl: slider.querySelector( '[data-to-slide="prev"]' ),
        nextEl: slider.querySelector( '[data-to-slide="next"]' ),
      },
    }, sliderConfig.gallery );
    initSlider( slider, currentConfig );
  } );
};

export {
  initSliders,
};
