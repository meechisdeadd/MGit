const Ship = require('./Ship');

class Single extends Ship {
  constructor(name, type, health, row, column, weapon) {
    super(name, type, health, row, column);
    this.weapon = weapon;
  }

  // Additional methods specific to the Enemy class
}

module.exports = Single;