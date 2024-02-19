export const initSeoTextShower = () => {
  const showerTextNodes = document.querySelectorAll( '[data-shower="container"]' );

  showerTextNodes.forEach( ( container ) => {
    const trigger = container.querySelector( '[data-shower="btn"]' );
    trigger.addEventListener( 'click', ( evt ) => {
      evt.preventDefault();
      container.classList.add( 'is-showed' );
    } );
  } );
};
