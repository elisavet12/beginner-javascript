console.log('it works');




function calculateBill(billAmount, taxRate=0.13, tipRate=0.15) {
    console.log(billAmount, taxRate);
    console.log("Running Calculate Bill!!!");
    const total=billAmount+billAmount*taxRate+billAmount*tipRate;
    return total;
    
}
const myBill4=calculateBill(100,undefined, 0.2);

const myTotal=calculateBill(100, 0.13);
const myTotal2=calculateBill(200, 0.13);

console.log(myTotal, myTotal2);

const firstName="wes";

function sayHiTo(){
    return `Hello ${firstName}`;
}

// const greeting = sayHiTo("wes");
// console.log(greeting);
// 

function doctorize(name) {
    return `Dr. ${name}`;
}

function yell(name="Silly Goose"){
    return `HEY ${name.toUpperCase()}`;
}
doctorize ('wes')

