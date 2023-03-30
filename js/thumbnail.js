import { creatureCardsObj } from './cardObj.js'
import {openBigCard} from './imgPopup.js'

//создание карточки из template с id=picture
const pictureTemplate = document.querySelector('#picture').content;
function creatureThumbnail({url, comments, likes, description}) {
  const card = pictureTemplate.querySelector('.picture').cloneNode(true);

  card.querySelector('.picture__img').src = url;
  card.querySelector('.picture__comments').textContent = comments.length;
  card.querySelector('.picture__likes').textContent = likes;
  card.addEventListener('click', ()=>{
    openBigCard({url, comments, likes, description});
  })
  return card
}

// отрисовка карточек в container

const container = document.querySelector('.pictures');
const cardsObj = creatureCardsObj();
// console.log(cardsObj);
const renderingThumbnails = () => {
  let thumbnailsFragment = document.createDocumentFragment();
  cardsObj.forEach((cardObj)=>{
    thumbnailsFragment.appendChild(creatureThumbnail(cardObj))
  })
  container.appendChild(thumbnailsFragment)
}

export {renderingThumbnails, cardsObj}
