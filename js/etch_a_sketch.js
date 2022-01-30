const slider = document.querySelector("#myRange")
let gridSize = slider.innerHTML.value;
let paintColor = "#000000";

document.body.onload = setupGrid;

const colorpick = document.querySelector("#colorPick");
colorpick.addEventListener('input',setColor,false);
colorpick.addEventListener('change', setColor,false);

slider.addEventListener('change', e=> {
    gridSize = slider.value;
    setupGrid();
})

function setColor(event)
{
    paintColor = event.target.value;
}
function setupGrid() {
    const content = document.getElementById("content");
    if (content.innerHTML === "") {
        gridSize = 16;
    } else {
        content.innerHTML = "";

    }

    for (r=0;r<gridSize;r++){
        let newRow = document.createElement("div");
        newRow.className= "row";
        content.appendChild(newRow);
        
        for(i=0;i<gridSize;i++){

            let newSquare = document.createElement("div");
           newSquare.className = "square";
           
           newRow.appendChild(newSquare); 

           newSquare.addEventListener('mouseenter',e=> {
               newSquare.style.backgroundColor = paintColor;
           })

           newSquare.addEventListener('mouseleave', e=> {
               //newSquare.style.backgroundColor = '#000000';
           })
        }    
    }
}

