const express = require("express");
const app = express();
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("./schema.js");
const Review = require("./models/review.js");


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

const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};

const validateReview = (req, res, next) =>{
    let {error} = reviewSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};


//index route:
app.get("/listings", wrapAsync(async(req, res) =>{
   const allListings = await Listing.find({});
res.render("listings/index",{ allListings});
}));


//New Route 
app.get("/listings/new",wrapAsync(async(req, res)=>{
    res.render("listings/new.ejs");
}));


//show Route
app.get("/listings/:id", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const listing  = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));

//Create Route
// app.post("/listings", async (req, res) => {
//     let { title, description, price, country, location, image } = req.body.listing;

//     const newListing = new Listing({
//         title,
//         description,
//         price,
//         country,
//         location,
//         image: { filename: "listingimage", url: image }
//     });

//     await newListing.save();
//     res.redirect("/listings");
// });

app.post(
    "/listings",
    validateListing,
    wrapAsync (async( req, res, next) => {
    
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);


//Edit Route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//Update Route
app.put("/listings/:id",
    validateListing,
    wrapAsync(async (req, res) => {
    
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
}));

//delete Route
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    res.redirect("/listings");
}));

//Reviews 
//Post Route

app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
   let listing = await Listing.findById(req.params.id);  
   let newReview = new Review(req.body.review);           

   listing.reviews.push(newReview);

   await newReview.save();
   await listing.save();

   res.redirect(`/listings/${listing._id}`);
}));



app.all("*splat", (req, res, next) =>{
    next(new ExpressError(404, "Page Not found!"));
});

app.use((err, req, res, next) =>{
    let {statusCode=500, message= "something went wrong!"} = err;
    res.render("error.ejs" , {message});
    // res.status(statusCode).send(message);
});



const port = 3000;
app.get("/" , (req, res) =>{
    res.send("Hi, I am root!");
})

app.listen(port , () =>{
    console.log(`server is listening on the port ${port}`);
});

