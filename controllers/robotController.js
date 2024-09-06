// controllers/robotController.js

const { moveRobot } = require("../functions/robotFunctions");
const Robot = require("../models/robotModel");

const navigateRobots = (req, res) => {
  const { robots, query } = req.body;

  if (!robots) {
    return res.status(400).json({ error: "Robots data are required" });
  }

  let plateauData = robots.map((robot, index) => {
    return {
      id: index,
      finalPosition: "",
      fuelStatus: "",
    };
  });

  let queryData = plateauData[query - 1];

  const results = robots.map((robot, index) => {
    const [x, y, orientation, fuel] = robot.start.split(" ");
    const commands = robot.commands;

    const finalPosition = moveRobot(
      commands,
      parseInt(x),
      parseInt(y),
      orientation,
      fuel
    );
    plateauData[robots.indexOf(robot)].finalPosition = finalPosition;
    return `${finalPosition.x} ${finalPosition.y} ${finalPosition.orientation}`;
  });

  const fuelStatus = robots.map((robot, index) => {
    const [x, y, orientation, fuel] = robot.start.split(" ");
    const commands = robot.commands;

    if (commands.length > fuel) {
      plateauData[robots.indexOd(robot)].fuelStatus = 0;
      return `Robot ran out of fuel!!`;
    } else {
      plateauData[robots.indexOf(robot)].fuelStatus = fuel - commands.length;
      return `Robot has ${fuel - commands.length} amount of fuel available!`;
    }
  });

  res.json({ results, fuelStatus, queryData });
};

module.exports = {
  navigateRobots,
};
