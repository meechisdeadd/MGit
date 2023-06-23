const Ship = require('./Ship');

class Triple extends Ship {
  constructor(name, type, health, row, column, sword) {
    super(name, type, health, row, column);
    this.sword = sword;
  }

  // Additional methods specific to the Warrior class
}

module.exports = Triple;