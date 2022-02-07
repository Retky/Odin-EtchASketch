// THIS select the Grid.
const grid = document.getElementById('grid')

// THIS f create the grid with the box element.
function createGrid(elements) {
    let gridArray = []
    for (let i = 1; i <= (elements * elements); i++) {
        // THIS create each div.
        box = document.createElement('div');
        grid.appendChild(box)
        if (i <= elements) {
            gridArray.push(i)
        }
    }
    //  THIS set the grid colums.
    grid.style.setProperty('grid-template-areas', ("'" + gridArray.join(' ') + "'"))
}
createGrid(16)
