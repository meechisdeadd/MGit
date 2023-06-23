const Ship = require('./Ship');

class Double extends Ship {
  constructor(name, type, health, row, column, stick) {
    super(name, type, health, row, column);
    this.stick = stick;
  }

  // Additional methods specific to the Wizard class
}

module.exports = Double;
