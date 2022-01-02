console.log('test');

// Select the elements on the page - canvas, shake button

const canvas=document.querySelector('#etch-a-sketch');

const ctx=canvas.getContext('2d');

const shakebutton=document.querySelector('.shake');


// set up our canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;
ctx.beginPath();
const {width, height} = canvas;

let x= Math.floor(Math.random()*width);
ctx.moveTo(x,200);
ctx.lineTo(x, 200);
ctx.stroke();
let y=Math.floor(Math.random()*height);
ctx.moveTo(x,y);
ctx.lineTo(x,y);



// write a handler for the keys

function handleKey(){
    console.log("HANDLING KEY");
}

window.addEventListener('keydown', handleKey);


// clear or shake function
function handleKey(e) {
    if (e.key.includes("Arrow")) {
        e.preventDefault();
  console.log(e.key);
  console.log("HANDLING KEY");
    }
  ;
}

// listen for arrow keys
// if (e.key.includes("Arrow")) {
//   e.preventDefault();
//   console.log(e.key);
//   console.log("HANDLING KEY");
// }

// write a draw function

function draw({key}){
console.log(key);
ctx.beginPath();
ctx.moveTo(x, y);
x = x - 10;
y = y - 10;
ctx.lineTo(x, y);
ctx.stroke();

}

function HandleKey(e) {
  if(e.key.includes('Arrow')) {
    e.preventDefault();
    draw({ key: e.key });
    // console.log(e.key);
    // console.log('HANDLING KEY');
  };
}