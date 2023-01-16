const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config()

const app = express();

const db = require('./db');
const apiRoutes = require('./routes/api');
app.use(cors())
app.use(express.json());
app.use('/api', apiRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));


