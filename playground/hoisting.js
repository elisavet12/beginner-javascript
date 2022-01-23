console.log(age);
var age=10;

console.log('It works');

sayHi();
function sayHi(){
    console.log('hey')
    console.log(add(10,2));
}

function add(a,b){
    return a+b;
}

const middle = "";


// const count = 2;
// let word;

const count = 0;
const word = count === 1 ? 'item' : 'items';

// if (count === 1) {
//     word = 'item';
// } else {
//     word = 'items';
// }

const sentence = `You have ${count} ${word} in your cart`;
console.log(sentence);

isAdmin ? showAdminBar() : null;