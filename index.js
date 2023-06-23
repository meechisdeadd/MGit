const readlineSync = require('readline-sync');
const Triple = require('./Triple-deckShip');
const Double = require('./Double-deckShip');
const Single = require('./Single-deckShip');

const rows = 6;
const columns = 6;
const field = [];


const waterEmoji = '\uD83D\uDCA7'; 
const shipEmoji = '\uD83D\uDEA2'; 
// во время запуска игры выводится форма регистрации и присваивается имя игрока
const name = readlineSync.question('Приветствуем тебя!\nВведи своё имя: ');


for (let i = 0; i < rows; i++) {
  field[i] = Array(columns).fill(waterEmoji);
}

const generateRandomPosition = (occupiedPositions, shipSize, orientation) => {
  let row, column;
  let isValidPosition = false;

  do {
    row = Math.floor(Math.random() * rows);
    column = Math.floor(Math.random() * columns);
    isValidPosition = !isPositionOccupied(occupiedPositions, row, column, shipSize, orientation);
  } while (!isValidPosition);

  return { row, column };
};

const isPositionOccupied = (occupiedPositions, row, column, shipSize, orientation) => {
  const buffer = 1;
  let startRow, startColumn, endRow, endColumn;

  if (orientation === 0) {
    startRow = row - buffer;
    startColumn = column - buffer;
    endRow = row + buffer;
    endColumn = column + shipSize + buffer;
  } else { 
    startRow = row - buffer;
    startColumn = column - buffer;
    endRow = row + shipSize + buffer;
    endColumn = column + buffer;
  }

  for (let i = startRow; i <= endRow; i++) {
    for (let j = startColumn; j <= endColumn; j++) {
      if (i >= 0 && i < rows && j >= 0 && j < columns) {
        if (occupiedPositions[i][j] !== waterEmoji) {
          return true;
        }
      }
    }
  }
  return false;
};

const tripleSize = 3;

const tripleOrientation = Math.floor(Math.random() * 2);
let triplePosition = generateRandomPosition(field, tripleSize, tripleOrientation);
if (tripleOrientation === 0 && triplePosition.column + tripleSize <= columns) {
  const triple = new Triple('Conon', 'triple', tripleSize, triplePosition.row, triplePosition.column, 30);
  for (let i = 0; i < tripleSize; i++) {
    field[triple.row][triple.column + i] = shipEmoji;
  }
} else if (tripleOrientation === 1 && triplePosition.row + tripleSize <= rows) {
  const triple = new Triple('Conon', 'triple', tripleSize, triplePosition.row, triplePosition.column, 30);
  for (let i = 0; i < tripleSize; i++) {
    field[triple.row + i][triple.column] = shipEmoji;
  }
}

const doubleSize = 2;
const doubleOrientation = Math.floor(Math.random() * 2);
let doublePosition = generateRandomPosition(field, doubleSize, doubleOrientation);
if (doubleOrientation === 0 && doublePosition.column + doubleSize <= columns) {
  const double = new Double('Marlyn', 'Double', doubleSize, doublePosition.row, doublePosition.column, 25);
  for (let i = 0; i < doubleSize; i++) {
    field[double.row][double.column + i] = shipEmoji;
  }
} else if (doubleOrientation === 1 && doublePosition.row + doubleSize <= rows) {
  const double = new Double('Marlyn', 'Double', doubleSize, doublePosition.row, doublePosition.column, 25);
  for (let i = 0; i < doubleSize; i++) {
    field[double.row + i][double.column] = shipEmoji;
  }
}

const singleSize = 1;
const singlePosition = generateRandomPosition(field, singleSize, 0);
const single = new Single('Chort', 'single', singleSize, singlePosition.row, singlePosition.column, 40);
field[single.row][single.column] = shipEmoji;

const triplePosition = generateRandomPosition(field, tripleSize);
const triple = new Triple(
  'Conon',
  'triple',
  tripleSize,
  triplePosition.row,
  triplePosition.column,
  30
);
for (let i = 0; i < tripleSize; i++) {
  field[triple.row][triple.column + i] = triple;
}

const doubleSize = 2;
const doublePosition = generateRandomPosition(field, doubleSize);
const double = new Double(
  'Marlyn',
  'Double',
  doubleSize,
  doublePosition.row,
  doublePosition.column,
  25
);
for (let i = 0; i < doubleSize; i++) {
  field[double.row][double.column + i] = double;
}

const singleSize = 1;
const singlePosition = generateRandomPosition(field, singleSize);
const single = new Single(
  'Chort',
  'single',
  singleSize,
  singlePosition.row,
  singlePosition.column,
  40
);
field[single.row][single.column] = single;


console.table(field);
