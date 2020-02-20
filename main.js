const checkoutFrom = document.querySelector('#checkout-form');
const card = document.querySelector('#card');
const cardInfo = document.querySelector('#card-ccv');
const printBottom = document.querySelector('.print');

checkoutFrom.addEventListener(
  'click',
  () => {
    if (card.classList.contains('card-flip')) {
      card.classList.add('card-flip-back');
      card.classList.remove('card-flip');
    }
  },
  { capture: true }
);

cardInfo.addEventListener('click', () => {
  if (card.classList.contains('card-flip')) {
    card.classList.remove('card-flip');
    card.classList.add('card-flip-back');
  } else if (card.classList.contains('card-flip-back')) {
    card.classList.remove('card-flip-back');
    card.classList.add('card-flip');
  }
});
cardInfo.addEventListener(
  'click',
  () => {
    card.classList.add('card-flip');
  },
  { once: true }
);

checkoutFrom.addEventListener('submit', e => {
  e.preventDefault();
  checkoutFrom.classList.toggle('submit-error');
});

printBottom.addEventListener('click', () => {
  checkoutFrom.classList.toggle('show-from');
  printBottom.classList.toggle('hide-print');
});
