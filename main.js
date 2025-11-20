// Покраска всех карточек 

const productCards = document.querySelectorAll('.card-container');
const changeColorAllCardButton = document.querySelector('#change-color-all-card');
const greenColorHash = '#00ff00';
const blueColorHash = '#0000ff';

changeColorAllCardButton.addEventListener('click', () => {
  productCards.forEach((card) => card.style.backgroundColor = greenColorHash)
})

// Покраска первой карточки

const firstProductCard = document.querySelector('.card-container');
const changeColorFirstCardButton = document.querySelector('#change-color-first-card');

changeColorFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = blueColorHash;
})

// Открыть Google

const openGoogleButton = document.querySelector('#open-google');

openGoogleButton.addEventListener('click',openGoogle)

function openGoogle() {
  const answer = confirm('Вы действительно хотите открыть Google?')
  
  if (answer === true) {
    window.open('https://google.com')
  } else {
    return;
  }
}

// Вывод сообщения в консоль лог

const outputLogButton = document.querySelector('#output-console-log');

outputLogButton.addEventListener('click', () => outputConsoleLog('ДЗ №4'))

function outputConsoleLog(message) {
  alert(message)
  console.log(message)
}

// Вывод в консоль лог заголовок при наведении курсора на него

const mainTitleHeading = document.querySelector('.main-title');

mainTitleHeading.addEventListener('mouseenter', () => {
  console.log(mainTitleHeading.textContent)
});

// Сменить цвет кнопки

const changeColorButton = document.querySelector('#change-color-button');

changeColorButton.addEventListener('click', () => {
  changeColorButton.classList.toggle('change-color-button');
});