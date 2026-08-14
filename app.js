const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ExpressError  = require("./utils/ExpressError.js");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const session = require("express-session");


const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");

const listings = require("./routes/listing.js");
const reviews = require("./routes/review.js");



//Database connection setup:->
const mongoose = require('mongoose');
main().then(() =>{
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust'); 
}


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));


app.use("/listings" , listings);
app.use("/listings/:id/reviews" , reviews);


app.all("*splat", (req, res, next) =>{
    next(new ExpressError(404, "Page Not found!"));
});

app.use((err, req, res, next) =>{
    let {statusCode=500, message= "something went wrong!"} = err;
    res.render("error.ejs" , {message});
    // res.status(statusCode).send(message);
});

//Express - Session
const sessionOptions = {
    secret: "musupersecretcode",
    resave: false,
    saveUninitialized: true
}

app.use(session(sessionOptions));

const port = 3000;
app.get("/" , (req, res) =>{
    res.send("Hi, I am root!");
})

app.listen(port , () =>{
    console.log(`server is listening on the port ${port}`);
});

