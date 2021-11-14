// console.log("it works");

// //anonymous function
// // function (firstName){
// //     return `Dr. ${firstName}`;
// // }

// //  function expression

// const doctorize = function (firstName) {
//   return `Dr. ${firstName}`;
// }


// /* eslint-disable */
// const inchToCM = (inches) => inches * 2.54;

// // function add(a, b=3){
// // const total=a+b;
// // return total;
// // }

// const add=(a,b=3)=>a+b;

// // function makeABady(first, last){
// //   const baby={
// //   name:`${first} ${last}`,
// //   age:0,
// // };

// // return baby;
// // }



// function makeABaby(first, last) {
//   const baby = {
//     name: `${first} ${last}`,
//     age: 0,
//   };
//   return baby;
// }

// const makeABady=(first, last) => ({name: `${first} ${last}`, age: 0});


(function (age) {
  console.log("Running the Anon function");
  return `Your are cool and ${age}`;
})(age);

// const wes = {
//   name: function sayHi() {
//     console.log("Hey wes");
//     return "Hey Wes!";
//   }
// };



function wes();

const wes = {
  name: "Wes Bos",
  // Method!
  sayHi: function sayHi() {
    console.log("Hey Wes!");
    return "Hey Wes!";
  },
  //Short hand Method
  yellHi() {
    console.log("HEY WESSSSS");
  },
};