// const p = document.querySelector('p');
// const imgs = document.querySelectorAll('.item img');
// const item2= document.querySelector('.item2');
// const item2Image= document.querySelector('img');
// const heading=document.querySelector('h2');
// // heading.textContent='Wes is cool';
// console.log(heading.textContent);
// console.log(heading.innerText);
// console.log(heading.innerHTML);
// console.log(heading.outerHTML);

// const pizzaList=document.querySelector('.pizza');
// console.log(pizzaList.textContent);
// // pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText('afterbegin','🍕');

const pic=document.querySelector('.nice');
pic.classList.add("open");
pic.classList.remove("cool");
pic.classList.toggle("round");
// pic.classList.toggle("round");
pic.classList.contains('open');
pic.alt="cute pup";
console.log(pic.classList);


function toggleRound(){
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);

pic.addEventListener('load', function(){
console.log(pic.naturalWidth);
});
console.log(pic.getAttribute('alt'));

pic.setAttribute('alt', 'REALLY CUTE PUP');
console.log(pic.getAttribute('alt'));
 console.log(pic.hasAttribute('alt'));

const custom=document.querySelector('.custom');
console.log(custom.dataset);
custom.addEventListener('click', function(){
  alert(`Welcome ${custom.dataset.name} ${custom.dataset.last} `);
});







