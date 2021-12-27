function handleClink(){
    console.log('IT GOT CLICKED!!!!!!!!');
}

const butts = document.querySelector('.butts');
butts.addEventListener('click', handleClink);

const cool=document.querySelector('.cool');

cool.addEventListener('click', handleClink);

butts.removeEventListener('click', handleClink);

// function buyButtons(){
//   console.log()
// }

// butts.addEventListener('click', function() {
//   console.log("I am an anon!");
// });
// butts.removeEventListener("click", function() {
//   console.log("I am an anon!");
// });

// const hooray = () => console.log("HOORAY!");
// cool.addEventListener('click', hooray);

const buyButtons=document.querySelectorAll(".buy");
console.log(buyButtons);

// // console.dir(butts);
// buyButtons.forEach(function(buyButtons)) {
//   console.log(buyButton);
// }

function handleBuyButtonClick(event){
  console.log("You clicked a button");
  // console.log(event);
  // console.log(parseFloat(event.target.dataset.price));
  const button=event.target;
  console.log(event.target);
  console.log(event.currentTarget);
  console.log(event.target===event.currentTarget);
  // event.stopPropagation();
  
}

buyButtons.forEach(function(buyButton) {
  buyButton.addEventListener("click", handleBuyButtonClick);
  
});

window.addEventListener('click', function(event) {
  console.log('you clicked the window');
  console.log(event.target);
  console.log(event.type);
  console.log(event.bubbles);
  event.stopPropagation();
},
{ capture: true },

)

const photoE1=document.querySelector(".photo");
const photoEl = document.querySelector(".photo");
photoEl.addEventListener("mousemove", function(e) {
  console.log(e.currentTarget);
  console.log(this);
});





