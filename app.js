const express = require("express");
const { errorHandler } = require("./middleware/errorHandle");
const app = express();
require('dotenv').config();

const mainRoutes = require('./routes/main');

app.use(express.json());

app.use('/api/v1',mainRoutes);
app.use(errorHandler);


app.listen(3000, () => console.log('server connected'))