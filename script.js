console.log('JS OK');

//Recupero gli elementi dal DOM
const buttonElement = document.getElementById('button');

const gridElement = document.getElementById('grid');

const selectInput = document.getElementById('select');

const resultElement = document.getElementById('result');

const resultMessage = document.getElementById('result-message');


// Functions create 

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

function getUniqueRandomRumber(min, max, listRandom) {
    let randomNumber;

    do {
        randomNumber = Math.floor(Math.random() * (max + 1 - min)) + min;

    } while (listRandom.includes(randomNumber));

    console.log(randomNumber);
    return randomNumber;

}


// Logica inserita al click del button

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


    let extractedNumber = [];


    let resultNumber = 0;
    let loser = false;

    // Creo un ciclo che crea 16 numeri random da 1 al numero totale di celle e le aggiungo in un array chiamato extractedNumber

    for (let i = 1; i <= 16; i++) {

        const cellNumber = getUniqueRandomRumber(1, totalCells, extractedNumber);

        extractedNumber.push(cellNumber);
    }



    // Creo un totale di celle uguale al livello di difficoltà scelta

    for (let i = 1; i <= totalCells; i++) {


        const cell = createCell(i, valueSelect);

        // aggiungo una funzione che verrà eseguita ogni volta che si cliccherà sulla singola cella

        cell.addEventListener('click', () => {

            if (extractedNumber.includes(i) && !loser) {
                cell.classList.add("cell-bomb");
                console.log('partita terminata');
                resultNumber = 0;
                resultMessage.innerText = 'Hai Perso';
                loser = true;
            } else if (!loser) {
                if (!cell.classList.contains('cell-blue')) {
                    resultNumber += 1;
                    cell.classList.add("cell-blue");
                }
            }

            resultElement.innerText = resultNumber;

            const difference = totalCells - 16;

            if (resultNumber === difference) {
                console.log('Hai vinto la partita');
                resultMessage.innerText = `Hai vinto la partita con: ${resultNumber} punti`;
            }

        });

        gridElement.appendChild(cell);
    }

});


