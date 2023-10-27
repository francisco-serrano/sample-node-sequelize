const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

require('./routes/appointmentRoutes')(app);
require('./routes/physicianRoutes')(app);
require('./routes/patientRoutes')(app);

app.listen(port, () => console.log(`server started on port ${port}`));
