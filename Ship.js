class Ship {
  constructor(name, type, health, row, column) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.row = row;
    this.column = column;
  }

  moveRandomly(rows, columns) {
    const directions = ['up', 'down', 'left', 'right'];
    const randomDirection =
      directions[Math.floor(Math.random() * directions.length)];

    switch (randomDirection) {
      case 'up':
        this.row = Math.max(0, this.row - 1);
        break;
      case 'down':
        this.row = Math.min(rows - 1, this.row + 1);
        break;
      case 'left':
        this.column = Math.max(0, this.column - 1);
        break;
      case 'right':
        this.column = Math.min(columns - 1, this.column + 1);
        break;
    }
  }


  checkHealth() {
    if (this.health <= 0) {
      console.log(`${this.name} is dead.`);
    } else {
      console.log(`${this.name} has ${this.health} health remaining.`);
    }
  }
}

module.exports = Ship;
