console.log('it works');
const item=document.querySelector('.item');
// item.innerHTML=`<h1>Hey How are you?</h1>`;
// console.log(item.innerHTML);

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `Cute pup <img onload="alert('hacked');" src="https://picsum.photos/50"/>`;
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;



item.innerHTML = myHTML;
// console.log(item.innerHTML);

// console.log(typeof myHTML);

// // myHTML.classList.add('special');

// const itemImage = document.querySelector('.wrapper img');
// itemImage.classList.add('round');

const myFragment=document.createRange().createContextualFragment(myHTML);

console.log(myFragment.querySelector('img'));
document.body.appendChild(myFragment);
console.log(myFragment);
