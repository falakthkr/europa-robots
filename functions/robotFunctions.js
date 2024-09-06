// functions/robotFunctions.js

const moveRobot = (commands, x, y, orientation, fuel) => {
  const directions = "NESW";
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let idx = directions.indexOf(orientation);

  let indexOfCommand = commands.length;
  if (commands.length > fuel) {
    indexOfCommand = fuel;
  }

  for (let i = 0; i < indexOfCommand; i++) {
    if (commands[i] === "L") {
      idx = (idx - 1 + 4) % 4;
    } else if (commands[i] === "R") {
      idx = (idx + 1) % 4;
    } else if (commands[i] === "M") {
      x += dx[idx];
      y += dy[idx];
    } else if (commands[i] === "B") {
      x -= dx[idx];
      y -= dy[idx];
    }
  }

  return { x, y, orientation: directions[idx] };
};

module.exports = {
  moveRobot,
};
