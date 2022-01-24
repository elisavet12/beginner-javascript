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

const isAdmin = true;
isAdmin ? showAdminBar() : null;
isAdmin && showAdminBar();


function check1(){
  
  console.log('Running check 1');
  return true;
}
function check2(){
  
  console.log('Running check 2');
  return false;
}
function check3(){
  
  console.log('Running check 3');
  return true;
}
if (check1() && check2() && check3()) {
  console.log('all checks passed');
}else {
  console.log('Some checks failed');
}

