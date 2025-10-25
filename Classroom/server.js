const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("madeIn", "India", {signed: true});
//     res.send("Signed Cookie Send");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("Verified");
// });


// app.get("/", (req, res) => {
//     console.log(req.cookies);
//     res.send("Hi, I am Root");
// });

// app.get("/getcookie", (req, res) => {
//     res.cookie("greet", "Namaste");
//     res.cookie("madeIn", "India");
//     res.send("Hello, this is a getcookie route page !");
// });

const sessionOptions = {
    secret: "mysupersecretString",
    resave: false,
    saveUninitialized: true,
};  

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.successMsg = req.flash('succcess');
    res.locals.errorMsg = req.flash('error');
    next();
}); 

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if(name === "anonymous") {
        req.flash("error", "user not registered !");
    } else {
        req.flash("success", "user registered successfully!");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    res.render("page.ejs", { name: req.session.name });
});


app.listen(3000, (req, res) => {
    console.log("Connection successful with port 3000")
});

