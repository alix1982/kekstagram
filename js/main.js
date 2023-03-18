const integerRndRange = (firstInteger = 1, lastInteger = 100) => {
  if (firstInteger < 0 || lastInteger < 0) {
    alert('Ошибка диапазона, включен диапазон по умолчанию [1; 100]')
    firstInteger = 1;
    lastInteger = 100;
  }

  (lastInteger<firstInteger) && ([firstInteger, lastInteger] = [lastInteger, firstInteger]);

  firstInteger = Math.ceil(firstInteger);
  lastInteger = Math.floor(lastInteger);

  return Math.round(Math.random() * (lastInteger - firstInteger) + firstInteger);
}
integerRndRange(1, 2);

const checkLengthString = (string = 'комментарий', stringLength = 50) => {
  return (string.length <= stringLength);
}
checkLengthString('Что-то прокомментировали', 30);

const descriptionList = ['Где-то далеко', 'Росиия прекрасна', 'за рубежом бывает тоже не плохо', 'в гостях хорошо, а дома лучше', 'зима время лыжников'];
const messageList = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
]
const userData = [
  {name: 'Сергей', avatar: '../img/avatar-1.svg'},
  {name: 'Александр', avatar: '../img/avatar-2.svg'},
  {name: 'Наталья', avatar: '../img/avatar-3.svg'},
  {name: 'Иван', avatar: '../img/avatar-4.svg'},
  {name: 'Настя', avatar: '../img/avatar-5.svg'},
  {name: 'Ольга', avatar: '../img/avatar-6.svg'},
];

const creatureCommentsUser = (id) => {
  const user = userData[integerRndRange(1,6)-1]
  const comment = {
    id: id,
    avatar: user.avatar,
    message: messageList[integerRndRange(1, 6)-1],
    name: user.name,
  }
  // console.log(comment)
  return comment;
}

const creatureCard = (idUser, quantinyComments) => {
  let comments = []
  for (let i=1; i<=quantinyComments; i++) {
    comments.push(creatureCommentsUser(i))
  }
  const card = {
    id: idUser,
    url: 'photo/'+idUser+'.jpg', //???
    description: descriptionList[integerRndRange(1, 5)-1],
    likes: integerRndRange(15, 200),
    comments: comments,
  }
  // console.log(card)
  return card
}

const creatureCards = () => {
  let cards = []
  for (let i=1; i<=25; i++) {
    cards.push(creatureCard(i, integerRndRange(1, 5)))
  }
  console.log(cards)
}
creatureCards();
