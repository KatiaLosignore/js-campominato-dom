console.log('JS OK');

//Recupero gli elementi dal DOM
const buttonElement = document.getElementById('button');

const gridElement = document.getElementById('grid');

const selectInput = document.getElementById('select');


// Numero righe e colonne



buttonElement.addEventListener('click', function () {

    gridElement.innerHTML = '';

    const valueSelect = selectInput.value;


    let totalCells;

    if (valueSelect === "1") {
        totalCells = 100;
    } else if (valueSelect === "2") {
        totalCells = 81;
    } else if (valueSelect === "3") {
        totalCells = 49;
    }



    for (let i = 1; i <= totalCells; i++) {

        const cell = createCell(i, valueSelect);


        cell.addEventListener('click', () => {
            cell.classList.toggle('clicked');
            console.log(i);
        });

        gridElement.appendChild(cell);


    }


});


function createCell(content, difficult) {
    const cell = document.createElement('div');
    cell.append(content);
    cell.classList.add('cell');

    if (difficult === "1") {
        cell.classList.add('cell-easy');
    } else if (difficult === "2") {
        cell.classList.add('cell-normal');
    } else if (difficult === "3") {
        cell.classList.add('cell-hard');
    }
    
    return cell;
}