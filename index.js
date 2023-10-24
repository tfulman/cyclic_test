const express = require("express");

const myApp = express();

myApp.listen(3000, () => { console.log("SUCCESS!"); });

// myApp.use(express.static("pages"));

myApp.get('/', (req, res) => {
	res.send("Hello WEB322!")
});

myApp.get('/*/', (req, res) => {
	res.send("FAILED! Fix your URL.")
});
