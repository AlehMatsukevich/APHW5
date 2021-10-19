const $COLUMN = document.querySelectorAll('.column');
const $BODY = document.querySelector('body');
const $PROMPT = document.querySelector('#prompt');
const $TITLE = document.querySelector('.title');
const $ADV = document.querySelector('.adv');
const $MENU = document.querySelectorAll('.menu-item');
$BODY.style.background = "url(../img/apple_true.jpg) center no-repeat";


$TITLE.textContent = 'Мы продаем только подлинную технику Apple';

$COLUMN[1].removeChild($ADV);
console.log($COLUMN[1]);
console.log($MENU);



$PROMPT.textContent = prompt('как вы относитесь к технике apple?');
console.log($PROMPT);
console.log($BODY.style.backgroundImage);