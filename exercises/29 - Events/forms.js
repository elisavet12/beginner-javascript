console.log('it works');

const wes=document.querySelector(".wes");
wes.addEventListener("click",function(event){
    // console.log("YOU CLICKED IT");
    event.preventDefault();
    const shouldChangePage=confirm("his website might be malicious! Do you wish to proceed?");

    if (shouldChangePage) {
        window.location=event.currentTarget.href;
    }
    console.log(shouldChangePage);
});

function signupForm(event){
const signupForm = document.querySelectorAll('[name="signup"]');
signupForm.addEventListener('submit', function(event) {
  console.log(event);
  event.preventDefault();
});
}

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

const photo= document.querySelector(".photo");
photo.addEventListener("click", function handlePhotoClick(){
    console.log("you clicked the photo");
});




// const signupForm = document.querySelectorAll('[name="signup"]');

// signupForm.addEventListener('submit', function(event) {
//   console.log(event);
//   event.preventDefault();
// });

// signupForm.addEventListener('submit', function(event) {
//   const name = event.currentTarget.name.value;
//   if (name.includes('chad')) {
//     alert('Sorry bro');
//     event.preventDefault();
//   }
// });
// signupForm.addEventListener('submit', function(event){
//     event.preventDefault();
//     console.dir(event.currentTarget);
// })