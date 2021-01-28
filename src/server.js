const { response } = require("express");
const express = require("express");

const app = express();

console.log("hello world");

app.get("/", (req, response) => {
    console.log("good")
    response.send({note: "goodbye world now"});
});

app.get("/something", (req, response) => {
    console.log("something")
    response.send({ data: "hello world go"});
});

app.get("/data/:id", (req, response) => {
    console.log(req.params);
    response.send({ name: "Colby", age: 44});
});

app.get("/person/12", (req, response) => {
    console.log(req.params);
    response.send({ name: "paul", age: 21});
});

app.post("/body", (req, response) => {
    console.log(req.bode);
    response.send({ data: req.body });
});



app.listen(5000, () => {
    console.log("listening on port 5000");
})
