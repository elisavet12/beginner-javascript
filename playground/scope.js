const age=100;

function go(){
    const myAge=200;
    const hair='blonde';
    console.log(hair);
    console.log(age);
}
console.log(go);

let cool;
if (1===1){
     cool=true;
}
console.log(cool);

function isCool(name){
    var cool;
    if (name==='wes'){
        cool=true;
    }
    console.log(cool);
    return cool;
}

for (let i = 0; i < 10; i++) {
   console.log(i);
}

const dog = 'snickers';
function logDog(dog) {
  console.log(dog);
}
function go() {
  const dog = 'sunny';
  logDog('sunny');
}
go();

function sayHi(name) {
  function yell() {
    console.log(name.toUpperCase());
  }
  yell();
}


