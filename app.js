const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");



//Database connection setup:->
const mongoose = require('mongoose');
main().then(() =>{
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust'); 
}

const ejsMate = require("ejs-mate");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));

// app.get("/testListing",async (req,res) =>{
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description:"By the beach",
//         price: 1200,
//         location:"Calangute, Goa",
//         country: "India",
//     });
//     await sampleListing.save()
//     console.log("sample was saved");
//     res.send("Successful testing");
// });

//index route:
app.get("/listings",async (req, res) =>{
   const allListings = await Listing.find({});
res.render("listings/index",{ allListings});
});


//New Route 
app.get("/listings/new",async(req, res)=>{
    res.render("listings/new.ejs");
});


//show Route
app.get("/listings/:id", async (req,res) =>{
    let {id} = req.params;
    const listing  = await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
});

//Create Route
app.post("/listings", async (req, res) => {
    let { title, description, price, country, location, image } = req.body.listing;

    const newListing = new Listing({
        title,
        description,
        price,
        country,
        location,
        image: { filename: "listingimage", url: image }
    });

    await newListing.save();
    res.redirect("/listings");
});

//Edit Route
app.get("/listings/:id/edit", async (req, res) => {
    
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
});

//Update Route
app.put("/listings/:id", async (req, res) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);

    let { title, description, price, country, location, image } = req.body.listing;

    listing.title = title;
    listing.description = description;
    listing.price = price;
    listing.country = country;
    listing.location = location;

    // Always replace image wholesale — don't try to mutate the existing value
    listing.image = { filename: "listingimage", url: image };

    await listing.save();
    res.redirect(`/listings/${id}`);
});

//delete Route
app.delete("/listings/:id", async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    res.redirect("/listings");
});

const port = 3000;
app.get("/" , (req, res) =>{
    res.send("Hi, I am root!");
})

app.listen(port , () =>{
    console.log(`server is listening on the port ${port}`);
});

