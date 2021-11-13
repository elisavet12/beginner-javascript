console.log("it works");

//anonymous function
// function (firstName){
//     return `Dr. ${firstName}`;
// }

//  function expression

const doctorize = function (firstName) {
  return `Dr. ${firstName}`;
}


/* eslint-disable */
const inchToCM = (inches) => inches * 2.54;

function add(a, b=3){
const total=a+b;
return total;
}

// const add(a,b=3)=>a+b;
