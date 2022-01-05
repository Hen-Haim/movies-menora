const express = require("express");
const cors = require("cors");
const moviesController = require("./movies-controller");
const errorHandler = require("./errors/error-handler");
let ServerError = require("./errors/server-error");
let ErrorType = require("./errors/error-type");

const app = express();

app.use(cors({origin:"http://localhost:3000"}));
app.use(express.json());
app.use("/movies", moviesController); 
app.use(() => {throw new ServerError(ErrorType.GENERAL_ERROR);});
app.use(errorHandler);

app.listen(3001, ()=> console.log("listening to port 3001"));

