import {
  observerConfig,
} from './configs.js';
import {
  isEscKey,
} from './utils.js';

const burgerOpenNode = document.querySelector( '.header-main__burger-open' );
const burgerCloseNode = document.querySelector( '.header-main__burger-close' );
const headerModalNode = document.querySelector( '.header-modal' );

const openMenu = ( evt ) => {
  evt.preventDefault();
  document.documentElement.classList.add( 'is-open-menu' );
  menuIsOpenEvt();
};

const closeMenu = ( evt ) => {
  evt.preventDefault();
  document.documentElement.classList.remove( 'is-open-menu' );
  menuIsCloseEvt();
};

const onEscKeydown = ( evt ) => {
  if ( isEscKey( evt ) && document.documentElement.classList.contains( 'is-open-menu' ) ) {
    closeMenu( evt );
  }
};

function menuIsOpenEvt() {
  headerModalNode ? headerModalNode.setAttribute( 'aria-hidden', 'false' ) : '';
}

function menuIsCloseEvt() {
  headerModalNode ? headerModalNode.setAttribute( 'aria-hidden', 'true' ) : '';
}

const initObserver = () => {
  const targetNode = document.querySelector( '.header-main.header-fixed' );
  const observeNode = document.querySelector( '.header-main:not(.header-fixed)' );
  if ( !observeNode || !targetNode ) return;
  const cb = ( entries ) => {
    entries.forEach( ( entry ) => {
      if ( !entry.isIntersecting ) {
        targetNode.classList.add( 'header-fixed--show' );
      } else {
        targetNode.classList.remove( 'header-fixed--show' );
      }
    } );
  };
  new IntersectionObserver( cb, observerConfig.header ).observe( observeNode );
};

const initHeaderSettings = () => {
  initObserver();

  if ( !burgerOpenNode || !burgerCloseNode ) return;

  burgerOpenNode.addEventListener( 'click', openMenu );
  burgerCloseNode.addEventListener( 'click', closeMenu );
  document.addEventListener( 'keydown', onEscKeydown );
};

export {
  initHeaderSettings
}
