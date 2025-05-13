// JavaScript to change the background color on button click.

let button = document.getElementById('changeColorBtn');
let colorCode = document.getElementById('colorCode');
let body =  document.querySelector('body');

// genrate random hex color code.
function randomColor () {
    const randomHexColor = Math.floor(Math.random() * 0xffffff).toString(16);
    return '#' + randomHexColor.padStart(6, '0');
}

// change background color and set it to random color.
button.addEventListener('click', () => {
    const currentColor = randomColor();
    body.style.backgroundColor = currentColor;
    colorCode.innerText = `${currentColor}`;
}) 


// check and display the background hex code.
document.getElementById('reset').addEventListener('click', () => {
    if(body.style.backgroundColor !== '#dadada') {
        body.style.backgroundColor = '#000000'
        colorCode.innerText = `#000000`
    }
}) 
