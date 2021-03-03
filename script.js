//Reference container for DOM
const container = document.querySelector(".container");

//Function to make our 16x 16 grid
//For each loop, create a horizontal row and then create 16 divs and make them a child of the row.
//By the end we have 16 rows, with 16 divs in each. Classes are added to each div.
//Make the grid a child of our container Div in HTML.

function makeGrid() {
  for (let i = 0; i < 16; i++) { 
      let gridRow = document.createElement('div'); // Creates a div object
      gridRow.classList.add("gridRow") // Gives created div gridRow class
      for (let j = 0; j < 16; j++) { 
          let gridSquare = document.createElement("div"); // Creates a div object
          gridSquare.classList.add("gridSquare"); // Gives created div GridSquare class
          gridRow.appendChild(gridSquare);
      }
    container.appendChild(gridRow);
  }  
}


makeGrid();

//Event Listeners
const gridSquares = document.querySelectorAll(".gridSquare");
gridSquares.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
        gridSquare.classList.add("filled");
    });
});

