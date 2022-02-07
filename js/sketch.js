// THIS select the Grid.
const grid = document.getElementById('grid')
let gridSize = 16

// THIS f create the grid with the box element.
function createGrid(elements) {
    let gridArray = []
    for (let i = 1; i <= (elements * elements); i++) {
        // THIS create each div.
        box = document.createElement('div');
        let itemName = 'box' + i;
        box.setAttribute('id', itemName)
        box.setAttribute('class', 'box')
        // THIS is the action on event (change color to black).
        box.addEventListener('mouseover', function () {
            this.style.background = 'black'
        })
        // THIS log the value of grid columns.
        grid.appendChild(box)
        if (i <= elements) {
            gridArray.push(i)
        }
    }
    //  THIS set the grid colums.
    grid.style.setProperty('grid-template-areas', ("'" + gridArray.join(' ') + "'"))
}
createGrid(gridSize)

let boxes = document.getElementsByClassName('box')
let clearButton = document.getElementsByName('clear')[0]
// THIS is the event on "Clear" Button.
clearButton.addEventListener('click', function () {
    // Code here.
    for (i = 0; i < (gridSize * gridSize); i++) {
        boxes[i].style.background = ''
    }
})
