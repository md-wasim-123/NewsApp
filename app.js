const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express();
const routes = require('./router/web')
const body = require("body-parser");
const math = require('math')
const port = 3000


app.use(express.static("public"))

app.use(body.urlencoded({ extended: false}));

// set the view engine to ejs
app.set('view engine', 'ejs');
// view engine setup
app.set('views','./views')





app.use('/', routes)


app.listen(port, function () {
    console.log(`hello run this program at http://localhost:${port}`);
})