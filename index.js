//npm init -y
//node i express

const express = require("express");
const app = express(); //instance
const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Express");
});

const courses = [
    {id: 1, name: "Farzeen",courses:"CS"},
    {id: 2, name: "Huzaifa",courses:"IT"},
    {id: 3, name: "Ali",courses:"SE"},

]

app.get('/api/courses', (req, res) => {
    res.json(courses);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});