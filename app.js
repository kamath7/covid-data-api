const express = require("express");

const { getDataofcovid } = require("./getData");
const app = express();
const port = process.env.port || 5000;

app.get("/api/data", async (req, res) => {
  try {
    const result = await getDataofcovid();
    await res.status(200).send({
      message: "Many thanks to https://api.covid19india.org/",
      data: result,
    });
  } catch (error) {
    res.status(400).send(error);
  }
});

app.listen(port, () => {
  console.log("Server up and running!");
});
