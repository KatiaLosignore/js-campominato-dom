console.log('JS OK');

//Recupero gli elementi dal DOM
const buttonElement = document.getElementById('button');

const gridElement = document.getElementById('grid');

const selectInput = document.getElementById('select');

const resultElement = document.getElementById('result');


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
            
         

            if (extractedNumber.includes(i)) {
                cell.classList.add("cell-bomb");
                console.log('partita terminata');
                resultElement.innerText = 0;
            } else  {
                cell.classList.add("cell-blue");
                resultElement.innerText = parseInt(resultElement.innerHTML) + 1;
            }

        });

        const difference = totalCells - 16;

        if (resultElement > difference) {
            console.log('partita terminata');
            resultElement.innertext = 'Non hai vinto la partita';
        } else {
            resultElement.innertext = 'Hai vinto la partita';
        }


        gridElement.appendChild(cell);
    }


});


 