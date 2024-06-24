const express = require("express");
let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

const PORT = 3000;

const TITLE = "Temperature Converter";

app.get("/", (req, res)=> { 
    res.render("pages/index", { title: TITLE, result: ""}); 
})

app.post("/index", (req, res)=> {
    let formData = req.body;
    // let userName = formData.username;
    // if (databaseOfUsernames.includes(userName)) {
    //     res.render("pages/result", { result: MESSAGES.SUCCESS });
    // } 
    //     res.render("pages/result", { result: MESSAGES.FAILURE }); 
    let userInput = formData.userInput;
    console.log(isNaN(userInput));
    let buttonType = formData.buttonType;

    if(userInput == "" || isNaN(userInput)) {
        res.render("pages/index", {title: TITLE, result: `Please make sure to input a number`});
    } else {
        if(buttonType === "ctof") {
            const f = (1.8 * userInput) + 32;
            res.render("pages/index", {title: TITLE, result: `${userInput} degrees celsius is ${f} degrees fahrenheit`})
        } else {
            const c = 5 / 9 * (userInput - 32);
            res.render("pages/index", {title: TITLE, result: `${userInput} degrees fahrenheit is ${c} degrees celsius`})
        }
    }
    
});

app.listen(PORT);