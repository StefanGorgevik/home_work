var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var hbs = require('express-hbs');
var todos = require("./handlers/todosH");

app.engine('hbs', hbs.express4());
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get("/todo", todos.GetTodos);

var PORT = process.env.PORT || 8080;
app.listen(PORT, (err) => {
    if(err) {
        return console.log("Server could not be started!");
    }
    return console.log(`Server started successfully and is listening on port ${PORT}!`);
})