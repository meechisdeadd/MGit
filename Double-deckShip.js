const Ship = require('./Ship');

class Double extends Ship {
  constructor(name, type, health, row, column, stick) {
    super(name, type, health, row, column);
    this.stick = stick;
  }


}

module.exports = Double;
