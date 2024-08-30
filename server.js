const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const robotRoutes = require("./routes/robotRoutes");

app.use(express.json());

app.use("/api", robotRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
