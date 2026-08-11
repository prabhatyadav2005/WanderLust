const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const {listingSchema , reviewSchema} = require("../schema.js");
const Listing = require("../models/listing.js");



const validateListing = (req, res, next) =>{
    let {error} = listingSchema.validate(req.body);

    if(error){
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    }else{
        next();
    }
};

//index route:
router.get("/", wrapAsync(async(req, res) =>{
   const allListings = await Listing.find({});
res.render("listings/index",{ allListings});
}));


//New Route 
router.get("/new",wrapAsync(async(req, res)=>{
    res.render("listings/new.ejs");
}));


//show Route
router.get("/:id", wrapAsync(async (req,res) =>{
    let {id} = req.params;
    const listing  = await Listing.findById(id).populate("reviews");
    res.render("listings/show.ejs",{listing});
}));


//create routes
router.post(
    "/",
    validateListing,
    wrapAsync (async( req, res, next) => {
    
        const newListing = new Listing(req.body.listing);
        await newListing.save();
        res.redirect("/listings");
    })
);


//Edit Route
router.get("/:id/edit", wrapAsync(async (req, res) => {
    
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
}));

//Update Route
router.put("/:id",
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
router.delete("/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;

    await Listing.findByIdAndDelete(id);

    res.redirect("/listings");
}));


module.exports  = router;