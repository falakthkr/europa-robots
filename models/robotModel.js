// models/robotModel.js

class Robot {
  constructor(x, y, orientation, commands) {
    this.x = parseInt(x, 10);
    this.y = parseInt(y, 10);
    this.orientation = orientation;
    this.commands = commands;
  }
}

module.exports = Robot;
