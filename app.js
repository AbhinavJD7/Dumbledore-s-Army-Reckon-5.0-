const express = require("express");
const app = express();

const path = require("path");
const methodOverride = require("method-override");

app.use(express.static(path.join(__dirname, "assets")));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req, res) => {
    res.render("emergency.ejs");
}); 

// app.get("/dashboard/dash", (req, res) => {
//     const indexPath = path.join(__dirname, "index.html");
//     res.sendFile(indexPath);
// });

app.get("/dashboard/dash", (req, res) => {
    res.render("index.ejs")
});
app.get("/emergency-redirect", (req, res) => {
    res.render("emergency-redirect.ejs")
});



app.get("/", (req, res) => {
    
});

app.listen(5000, () => {
    console.log("Server is live locally at 5000");
});
