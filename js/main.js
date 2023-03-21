import { creatureCard } from './card.js'
import { integerRndRange } from './util.js'

// создание массива из 25 карточек
const creatureCards = () => {
  let cards = []
  for (let i=1; i<=25; i++) {
    cards.push(creatureCard(i, integerRndRange(1, 5)))
  }
  // console.log(cards)
  return cards;
}
creatureCards();
