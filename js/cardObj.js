import { descriptionList, messageList, userData } from './data.js';
import { integerRndRange } from './util.js'

// создание комента
const creatureCommentsUserObj = (id) => {
  const user = userData[integerRndRange(1,6)-1]
  const comment = {
    idComment: id,
    avatar: user.avatar,
    message: messageList[integerRndRange(1, 6)-1],
    name: user.name,
  }
  return comment;
}

// создание карточки
const creatureCardObj = (idUser, quantinyComments) => {
  let comments = []
  for (let i=1; i<=quantinyComments; i++) {
    comments.push(creatureCommentsUserObj(i))
  }
  const card = {
    id: idUser,
    url: 'photos/'+idUser+'.jpg',
    description: descriptionList[integerRndRange(1, 5)-1],
    likes: integerRndRange(15, 200),
    comments: comments,
  }
  return card
}

// создание массива из 25 карточек
const creatureCardsObj = () => {
  let cards = []
  for (let i=1; i<=25; i++) {
    cards.push(creatureCardObj(i, integerRndRange(1, 5)))
  }
  // console.log(cards);
  return cards;
}
export { creatureCardObj, creatureCardsObj }
