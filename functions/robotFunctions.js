// functions/robotFunctions.js

const moveRobot = (commands, x, y, orientation) => {
  const directions = "NESW";
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let idx = directions.indexOf(orientation);

  for (let command of commands) {
    if (command === "L") {
      idx = (idx - 1 + 4) % 4;
    } else if (command === "R") {
      idx = (idx + 1) % 4;
    } else if (command === "M") {
      x += dx[idx];
      y += dy[idx];
    }
  }

  return { x, y, orientation: directions[idx] };
};

module.exports = {
  moveRobot,
};
