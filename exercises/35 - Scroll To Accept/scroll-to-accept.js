console.log('it works');

const terms = document.querySelector('.terms-and-conditions');
console.log(terms);

const watch = document.querySelector('.watch');

// terms.addEventListener('scroll', function(e){
//     console.log(e.currentTarget.scrollTop);
//     console.log(e.currentTarget.scrollHeight);
// });

// function scrollToAccept() {
//   const terms = document.querySelector('.terms-and-conditions');
//   if(!terms) {
//     return; //quit this there isn't that item on tha page
//   }
//   terms.addEventListner('scroll', function(e) {
//     console.log(e);
//   })
// }
// scrollToAccept();





// function obCallBack (payload) {
//     console.log(payload);
// }

function obCallback(payload) {
  console.log(payload[0].isIntersecting);
}

const ob = new IntersectionObserver(obCallback);


ob.observe(terms.lastElementChild);

function obCallback(payload) {
  console.log(payload[0].intersectionRatio);
}

