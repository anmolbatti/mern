require("dotenv").config();
require("./db");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const routes = require("./routes/routes");
app.use(routes);

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(process.env.PORT, function(){
    console.log(`Server is running at ${process.env.PORT} port`);
});