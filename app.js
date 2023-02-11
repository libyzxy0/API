const express = require('express');
const app = express();
const cors = require('cors');
const routes = require('./routes/api');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

app.use(cors());
app.use(express.json());
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

//app.use(notFound);
//app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Api is listening on port ${port}!`));
