// controllers/robotController.js

const { moveRobot } = require("../functions/robotFunctions");
const Robot = require("../models/robotModel");

const navigateRobots = (req, res) => {
  const { plateau, robots } = req.body;

  if (!plateau || !robots) {
    return res
      .status(400)
      .json({ error: "Plateau size and robots data are required" });
  }

  const results = robots.map((robot) => {
    const [x, y, orientation] = robot.start.split(" ");
    const commands = robot.commands;

    const finalPosition = moveRobot(
      commands,
      parseInt(x),
      parseInt(y),
      orientation
    );
    return `${finalPosition.x} ${finalPosition.y} ${finalPosition.orientation}`;
  });

  res.json({ results });
};

module.exports = {
  navigateRobots,
};
