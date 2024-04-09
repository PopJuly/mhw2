console.log('Hello user!');

function onClick(){
    console.log('Hai cliccato "entra"');
}

const b = document.querySelector('.button');
b.addEventListener('click', onClick);

/*Codice per mappa cittadella*/

function createImage(src) {
    const image = document.createElement('img');
    image.src = src;
    return image;
  }
  
  function onThumbnailClick(event) {
    const image = createImage(event.currentTarget.src);
    modalView.appendChild(image);
    modalView.classList.remove('hidden');
  }
  
  function onModalClick() {
    modalView.classList.add('hidden');
    modalView.innerHTML = '';
  }
  
  // Main
  
  const albumView = document.querySelector('#album-view');
  for (let i = 0; i < PHOTO_LIST.length; i++) {
    const photoSrc = PHOTO_LIST[i];
    const image = createImage(photoSrc);
    image.addEventListener('click', onThumbnailClick);
    albumView.appendChild(image);
  }
  
  const modalView = document.querySelector('#modal-view');
  modalView.addEventListener('click', onModalClick);