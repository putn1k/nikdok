import {
  initSlider
} from './utils.js';

import {
  sliderConfig
} from './configs.js';

const initSliders = () => {
  initSlider( '.main-hero', sliderConfig.mainHero );
};

export {
  initSliders,
};
