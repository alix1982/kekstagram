import { descriptionList, messageList, userData } from './data.js';
import { integerRndRange } from './util.js'

// создание комента
const creatureCommentsUser = (id) => {
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
const creatureCard = (idUser, quantinyComments) => {
  let comments = []
  for (let i=1; i<=quantinyComments; i++) {
    comments.push(creatureCommentsUser(i))
  }
  const card = {
    id: idUser,
    url: 'photo/'+idUser+'.jpg',
    description: descriptionList[integerRndRange(1, 5)-1],
    likes: integerRndRange(15, 200),
    comments: comments,
  }
  return card
}

export { creatureCard }
