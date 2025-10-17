const express = require("express");
const bodyParser = require("body-parser");
const activity = require("./routes/activity");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/activity", activity);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Pushy custom activity running on port ${PORT}`));
