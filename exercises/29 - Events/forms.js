

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



// function logEvent(event) {
//   console.log(event.type);
//   console.log(event.currentTarget.value);
// }

// const photo= document.querySelector(".photo"); 
// photo.addEventListener("click", function handlePhotoClick(){
//     console.log("you clicked the photo");
// });




const signupForm = document.querySelector('[name="signup"]');
signupForm.addEventListener("submit", function(event){
    const name=event.currentTarget.name.value;
    if (name.includes("chad")){
        alert("Sorry bro");
        event.preventDefault();
    }
    event.preventDefault();
    console.log(event.currentTarget.name.value);
    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.agree.checked);
    
});

function logEvent(event){
    console.log(event.type);
    console.log(event.currentTarget.value);
}

signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);




// console.log(signupForm);


// const signupFormData = new FormData(signupForm);

// signupForm.addEventListener('submit', function(event) {
//   event.preventDefault();

//   const name = signupFormData.get("name");

//   if (condition) {
    
//   }
  
//   console.log('bla bla');
  
// });

// signupForm.addEventListener('submit', function(event) {
//   const name = event.currentTarget.name.value;
//   if (name.includes('chad')) {
//     alert('Sorry bro');
//     event.preventDefault();
//   }
// });
// signupForm[0].addEventListener('submit', function(event){
//     event.preventDefault();
//     console.dir(event.currentTarget);
// })

// console.log(signupForm);