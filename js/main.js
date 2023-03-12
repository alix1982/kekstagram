let integerRndRange = function (firstInteger = 1, lastInteger = 100) {
  let integerRnd;
  if (firstInteger < 0 || lastInteger < 0 || lastInteger<firstInteger) {
    alert('Ошибка диапазона, включен диапазон по умолчанию [1; 100]')
    firstInteger = 1;
    lastInteger = 100;
  }
  firstInteger = Math.ceil(firstInteger);
  lastInteger = Math.floor(lastInteger);
  integerRnd = Math.round(Math.random() * (lastInteger - firstInteger) + firstInteger);
  // console.log(firstInteger);
  // console.log(lastInteger);
  // console.log(integerRnd);
  return integerRnd;
}
integerRndRange(1, 2);

let checkLengthString = function (string = "комментарий", stringLength = 50) {
  let isStringLendth = false;
  (string.length < stringLength) ? isStringLendth = true : isStringLendth = false
  // console.log("Комментарий: \"" + string + "\"; допустимая длина строки: " + stringLength + "; символов в комментарии: " + string.length + "; Строка удовлетворяет условиям: " + isStringLendth);
  return isStringLendth;
}
checkLengthString("Что-то прокомментировали", 20);
