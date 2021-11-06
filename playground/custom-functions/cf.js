console.log('it works');




function calculateBill(billAmount, taxRate) {
    console.log(billAmount, taxRate);
    console.log("Running Calculate Bill!!!");
    const total=billAmount*(1+taxRate);
    return total;
    
}
// const myTotal=calculateBill(100, 0.13);
// const myTotal2=calculateBill(200, 0.13);
// console.log(myTotal, myTotal2);

const firstName="wes";

function sayHiTo(){
    return 'Hello ${firstName}';
}

const greeting = sayHiTo();
console.log(greeting);

