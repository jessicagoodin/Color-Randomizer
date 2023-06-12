// declare array of hex characters for random hex code generation

const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// function that can get an item from the array by index

function getCharacter(index) {
    return hexCharacters[index];
}

// now a function with for loop (looping 6 times) that fills each of the 6 spaces for a hex color

function generateColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        // generate a random number to represent the index in getCharacters function
        const randomNum = Math.floor(Math.random() * hexCharacters.length)
        // update hexColor to include the result of calling getCharacter using the random number
        hexColor += getCharacter(randomNum);
        // this loops 6 times so when we return hexColor, it should have a specific color value represented by a hex code
    }
    return hexColor;
}

// changing color of the first button using above generateColor function
// first declaring variables to represent the randomize button and each of the colorbox elements

let btn = document.getElementById('randomize');
let boxOneColor = document.getElementById('colorbox1');
let boxTwoColor = document.getElementById('colorbox2');
let boxThreeColor = document.getElementById('colorbox3');

// event listener to listen for click on btn

btn.addEventListener("click", () => {
    const newColor1 = generateColor();
    const newColor2 = generateColor();
    const newColor3 = generateColor();

    boxOneColor.style.backgroundColor = newColor1;

    boxTwoColor.style.backgroundColor = newColor2;
    
    boxThreeColor.style.backgroundColor = newColor3;
})