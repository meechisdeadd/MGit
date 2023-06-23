const Triple = require('./Triple-deckShip');
const Double = require('./Double-deckShip');
const Single = require('./Single-deckShip');

const rows = 6;
const columns = 6;
const field = [];

for (let i = 0; i < rows; i++) {
  field[i] = [];
  for (let j = 0; j < columns; j++) {
    field[i][j] = 0;
  }
}

const generateRandomPosition = (occupiedPositions, shipSize) => {
  let row, column;

  do {
    row = Math.floor(Math.random() * rows);
    column = Math.floor(Math.random() * columns);
  } while (isPositionOccupied(occupiedPositions, row, column, shipSize));

  return { row, column };
};

const isPositionOccupied = (occupiedPositions, row, column, shipSize) => {
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = column - 1; j <= column + shipSize; j++) {
      if (i >= 0 && i < rows && j >= 0 && j < columns) {
        if (occupiedPositions[i][j]) {
          return true;
        }
      }
    }
  }
  return false;
};

const tripleSize = 3;
const triplePosition = generateRandomPosition(field, tripleSize);
const triple = new Triple('Conon', 'triple', tripleSize, triplePosition.row, triplePosition.column, 30);
for (let i = 0; i < tripleSize; i++) {
  field[triple.row][triple.column + i] = triple;
}

const doubleSize = 2;
const doublePosition = generateRandomPosition(field, doubleSize);
const double = new Double('Marlyn', 'Double', doubleSize, doublePosition.row, doublePosition.column, 25);
for (let i = 0; i < doubleSize; i++) {
  field[double.row][double.column + i] = double;
}

const singleSize = 1;
const singlePosition = generateRandomPosition(field, singleSize);
const single = new Single('Chort', 'single', singleSize, singlePosition.row, singlePosition.column, 40);
field[single.row][single.column] = single;

console.table(field);