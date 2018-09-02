const express = require('express');
const bodyParser = require("body-parser");
const functions = require("./functions");

const getdata = require("./routes/api/getdata");


const app = express();

//Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/getdata", getdata);

const port = process.env.PORT || 10101;

app.listen(port, () => console.log(`Server running on port ${port}`));



app.listen(80);
