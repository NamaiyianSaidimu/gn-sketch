document.addEventListener('DOMContentLoaded', function() {
  // gridCreate(32);
  let size = getSize();
  gridCreate(size);
  //getSize();
})

// Getting the grid container by use of selector:
let gridContainer = document.querySelector(".grid-container");

// Function to create a grid with specific dimensions:
function gridCreate(size) {
  gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  
    for (let divCount = 0; divCount < size * size; divCount++) {
      let square = document.createElement('div');
      square.style.cssText = `
        background-color: white;
        `;
        square.addEventListener('mouseover', function () {
          square.style.backgroundColor = 'black';
        });
      gridContainer.insertAdjacentElement("beforeend", square);
    }
}

// Function to get the specific dimensions of the sketchpad:
function getSize() {
  let user_input = prompt("Enter board dimensions: ");
  let intro_line = document.getElementById('intro-line');
  if (user_input == "") {
    intro_line("Please enter a number");
  }
  else if (user_input < 0 || user_input > 100) {
    intro_line.textContent = "Enter a number between 0 and 100";
  }
  else {
    intro_line.textContent = "Sketch Away!";
  }
  return (user_input);
}

function colorSketch() {

}