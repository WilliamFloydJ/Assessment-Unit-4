const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

const {
  compliment,
  fortune,
  nameCompliment,
  nameSave,
  updateName,
  deleteName,
} = require("./Controllers/controller.js");

app.get("/api/compliment", compliment);
app.post("/api/fortune", fortune);
app.post("/api/nameCompliment", nameCompliment);
app.post("/api/Name", nameSave);
app.put("/api/Name/:type", updateName);
app.delete("/api/Name", deleteName);

app.listen(4000, () => console.log("Server running on 4000"));
