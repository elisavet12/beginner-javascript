const item=document.querySelector('.item');
item.innerHTML=`<h1>Hey How are you?</h1>`;
console.log('item.innerHTML');

const src = `https://picsum.photos/200`;
const desc = "Cute pup";
const myHTML = `
  <div class="wrapper">
    <h2>Cute ${desc}</h2>
    <img src="${src}" alt="${desc}"/>
  </div>
`;

item.innerHTML = myHTML;
console.log(item.innerHTML);