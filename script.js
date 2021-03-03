let size = 0;
let divs;
const container = document.querySelector("#container");

// HTML, CSS: initialize grid at 2*2 of white boxes (subject to change)
// HTML: Create divs in html
// HTML, JS: New grids should be generated in the same total space as before (e.g. 500px wide)

// CSS, JS: Use event listener to set up :hover state so the div changes color when mouse passes over them,
//      by adding a new class to the div 
// JS: when mouse hovers over a square, addClassList "fill" to square, 
//      "fill" class changes color to random RGB value every time it passes through
// (alternatively: change the div’s background color using JavaScript.)

// HTML: Add a resetBtn that clears the current grid
// JS: when resetBtn clicked, remove all square's classes, leaving white

// HTML, JS: Add a resizeBtn that when clicked, prompts user to enter int between 1-64 (size of sides)
//     if user enters value within range then change size variable and draw new grid
//     else it's not an int OR not in range, reprompt.
function resize() {
    size = prompt("Enter grid: ");
    size = Number(size);
    if (size > 0 && size < 65) {
        document.querySelector(".container").style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        document.querySelector(".container").style.gridTemplateRows = `repeat(${size}, 1fr)`;
        // number of divs must be adjustable by JS to equal CSS grid-template-columns and grid-template-row
        // use for loop and createElement to create divs by loop counter = size
        for (let i = 0; i <= (size * size); i++) {
            divs = document.createElement('div');
            container.appendChild(divs); // CONTINUE HERE the key is in this function. check the DOM tree
        }
        
    } else {
        resize();
    }
    ;
}
// HTML: Add a colorBtn that changes color mode and makes JS function run when clicked
// JS: when colorBtn clicked, run function to change color mode from RGB to BW
// JS: in BW mode, have each pass add just 10% of black, so 10 passes makes the square completely black.

// Notes:
// JS: Add console.log statements to debug
// README: Record what and how I overcame tough challenges in real time







