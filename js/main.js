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
