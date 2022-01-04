const card = document.querySelectorAll('.card button');



const cardButton = document.querySelectorAll('.card button');

cardButton.forEach(button => button.addEventListener('click', handleCardButtonClick)
);

const modalInner=document.querySelector('.modal-inner');
const modalOuter = document.querySelector('.modal-outer');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  const imgSrc = card.querySelector('img').src;
  const desc = card.dataset.description; 
  // console.log(desc);
  const name = card.querySelector('h2').textContent;
  modalInner.innerHTML = `
  <img src="${imgSrc.replace('200', '600')}" alt="${name}" />
  <p>${desc}</p>
`;
modalOuter.classList.add('open');
modalInner.innerHTML = `
  <img width="600" height="600" src="${imgSrc.replace(
    '200',
    '600'
  )}" alt="${name}" />
  <p>${desc}</p>
`;
}

function closeModal() {
  modalOuter.classList.remove('open');
}

modalOuter.addEventListener('click', function(event) {
  console.log(event.target);
  console.log(event.currentTarget);
})

modalOuter.addEventListener('click', function(event) {
  const isOutside = event.target.closest('.modal-inner');
  if (isOutside) {
    closeModal();
  }
})

window.addEventListener('keydown', event => {
  console.log(event);
  if (event.key === 'Escape') {
    closeModal();
  }
});
  

