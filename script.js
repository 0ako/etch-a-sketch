let size = 0;
let divs;
const container = document.querySelector("#container");
let randomNumber = 0;
let randomColorString = "";

// V HTML, CSS: initialize grid of empty boxes
// V HTML: Create divs in html
// V HTML, JS: New grids should be generated in the same total space as before (e.g. 500px wide)

// V HTML, JS: Add resizeBtn function that when clicked, prompts user to enter int between 1-20 (size of sides)
// V     if user enters value within range then change size variable and draw new grid
// V    else it's not an int OR not in range, reprompt.

function resize() {
    size = prompt("Enter grid size (1-64): ");
    size = Number(size);
    
    // delete all existing divs within container when function runs
    while (container.lastElementChild) {
        container.removeChild(container.lastElementChild);
    }

    if (size > 0 && size <= 64) {
        document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        document.querySelector(".container").style.gridTemplateRows = `repeat(${size}, 1fr)`;
        console.log(document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`)
        console.log(document.querySelector(".container").style.gridTemplateRows = `repeat(${size}, 1fr)`)
        // use for loop and createElement to create divs by loop counter in proportion to size
        
        for (let i = 0; i <= ((size)**2 -1); i++) { 
            divs = document.createElement('div');
            divs.classList.add('divs');
            container.appendChild(divs);
        }
        
    } else {
        return divs;
    };
}

// CSS, JS: Use event listener to set up so that divs get random backgroundColor on every mouseover event 
container.addEventListener('mouseover', function(e) {
    e.target.style.backgroundColor = randomNumberGenerator();
    console.log(e.target.style.backgroundColor);
});

// function that generates string literal (using random numbers to plug into rgb values)
let randomNumberGenerator = function() {
    randomNumberRed = Math.random()*255;
    randomNumberGreen = Math.random()*255;
    randomNumberBlue = Math.random()*255;
    randomColorString = `rgb(${randomNumberRed},${randomNumberGreen},${randomNumberBlue})`;
    return randomColorString;
};

// // "filled" class changes color to random RGB value every time it passes through
// function addColorClass(e) {
//     e.target.classList.add('filled');
//     console.log(event);
// }

// HTML: Add a resetBtn that clears the current grid
// JS: when resetBtn clicked, remove all square's classes, leaving white

// HTML: Add a colorBtn that changes color mode and makes JS function run when clicked
// JS: when colorBtn clicked, run function to change color mode from RGB to BW
// JS: in BW mode, have each pass add just 10% of black, so 10 passes makes the square completely black.

// Notes:
// JS: Add console.log statements to debug
// README: Record what and how I overcame tough challenges in real time








