// THIS select the Grid.
const grid = document.getElementById('grid')

// THIS f create the grid with the box element.
function createGrid(elements) {
    for (let i = 0; i < elements; i++) {
        console.log('count')
        // THIS create each div.
        box = document.createElement('div');
        grid.appendChild(box)
    }
}
createGrid(16)
