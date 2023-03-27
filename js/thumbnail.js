import { creatureCardsObj } from './cardObj.js'

//создание карточки из template с id=picture
const pictureTemplate = document.querySelector('#picture').content;
function creatureThumbnail({url, comments, likes}) {
  const card = pictureTemplate.querySelector('.picture').cloneNode(true);

  card.querySelector('.picture__img').src = url;
  card.querySelector('.picture__comments').textContent = comments.length;
  card.querySelector('.picture__likes').textContent = likes;

  return card
}

// отрисовка карточек в container

const container = document.querySelector('.pictures');
const renderingThumbnails = () => {
  let thumbnailsFragment = document.createDocumentFragment();
  creatureCardsObj().forEach((cardObj)=>{
    thumbnailsFragment.appendChild(creatureThumbnail(cardObj))
  })
  container.appendChild(thumbnailsFragment)
}

export {renderingThumbnails}
