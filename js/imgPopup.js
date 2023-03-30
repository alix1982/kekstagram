const bigCard = document.querySelector('.big-picture');

const closeBigCard = () => {
  document.body.classList.remove('modal-open');
  bigCard.classList.add('hidden');
}
document.addEventListener('keydown', (e)=> {
  e.keyCode === 27 && closeBigCard()
})
document.addEventListener('click', (e)=> {
  e.target.attributes.class.value.split(' ').some((item)=>item === 'overlay') && closeBigCard()
})
bigCard.querySelector('.big-picture__cancel').addEventListener('click', closeBigCard);

const bigCardComments = bigCard.querySelector('.social__comments');
let bigCardCommentsArr = Array.from(bigCardComments.children);
const bigCardComment = bigCardComments.querySelector('.social__comment')

const openBigCard = ({url, comments, likes, description}) => {
  document.body.classList.add('modal-open');
  bigCard.classList.remove('hidden');

  bigCard.querySelector('.big-picture__img img').src = url ;
  bigCard.querySelector('.likes-count').textContent = likes;
  bigCard.querySelector('.comments-count').textContent = comments.length;
  bigCard.querySelector('.social__caption').textContent = description;

  if (comments.length < bigCardCommentsArr.length) {
    bigCardCommentsArr.forEach((item)=> item.remove());
    bigCardCommentsArr = [];
  }
  //  заполнение кмментариев при открытии imgPopup
  comments.forEach((comment, index)=>{
    const bigCardCommentClone = bigCardComment.cloneNode(true);
    if (bigCardCommentsArr[index] === undefined) {
      bigCardCommentsArr.push(bigCardCommentClone);
      bigCardComments.appendChild(bigCardCommentClone)
    }
    bigCardCommentsArr[index].children[0].src = comment.avatar;
    bigCardCommentsArr[index].children[0].alt = comment.name;
    bigCardCommentsArr[index].children[1].textContent = comment.message;
  })
}

export {openBigCard}
