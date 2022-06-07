const express = require("express");
const app = express();
const mainRoutes = require('./routes/main');

app.use(express.json());
app.use('/api/v1',mainRoutes);


app.use('/', (req, res) => {
  res.send('hello');
})

app.listen(3000, () => console.log('server connected'))