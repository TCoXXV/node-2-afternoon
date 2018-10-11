const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Server is in port ${port} ⛵️`);
})