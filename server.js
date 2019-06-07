var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.port || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Homepage, view tables, make reservation

var reservations = [{
    id: 0001,
    name: "Chet Manly",
    email: "nutsack@makeawish.com",
    phone: "303-555-1212"
},
{
    id: 0002,
    name: "Chet Nanly",
    email: "fart@makeawish.com",
    phone: "303-555-1312"
}]

var waitList = [{
    id: 0003,
    name: "Chet Oanly",
    email: "wang@makeawish.com",
    phone: "302-555-1312"

}]

app.get("/", function(req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reservation", function (req, res) {
    // res.send("Welcome to the Star Wars Page!")
    res.sendFile(path.join(__dirname, "make-res.html"));
});

app.get("/api/tables", function (req, res) {
    return res.json(reservations);
});

app.get("/api/waitlist", function (req, res) {
    return res.json(waitList);
});

app.post("/api/reservation", function (req, res) {

    var newReservation = req.body;

    console.log(newReservation);

    // We then add the json the user sent to the character array
    if(reservations.length < 5){
        reservations.push(newReservation);
        console.log("Some bitch got a table")
        res.json(true)
    }else{
        waitList.push(newReservation);
        console.log("Some bitch is gonna wait");
        res.json(false);
    }

    // We then display the JSON to the users
    
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
  
// What to track
// Reservations
const tables = [];
const waiting = [];

// What to do