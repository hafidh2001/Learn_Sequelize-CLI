// import library
import { port } from "./config.js";
import express from "express";
import cors from "cors";

// Initializing variable express
const app = express();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// calling routes
app.get("/", (req, res) => {
  res.send("helo kidozz");
});

// declare route
app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
