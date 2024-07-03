const express = require("express");
let app = express();

app.use(express.urlencoded({extended: true}));
// tell the website to look into a folder names "public" whenever the browser needs any static files, "public" can be renamed to anything else we want.
app.use(express.static("public")); 
// set the view engine to ejs. must have a folder names "views" to hold the ejs files.
app.set("view engine", "ejs");

const PORT = 3000;

let result = "";

app.get("/", (req, res)=> { 
    res.render("pages/index", { result });
})

app.post("/convert", (req, res) => {
    // the router now render pages under "views" folder.
    const { userInput, buttonType } = req.body;

    if(buttonType === "ctof") {
        const f = Math.round((1.8 * userInput) + 32);
        result = `${userInput} C is ${f} F`;
    } else {
        const c = Math.round(5 / 9 * (userInput - 32));
        result = `${userInput} F is ${c} C`
    }
    res.redirect("/")
})

app.listen(PORT, () => console.log("Server Running..."));