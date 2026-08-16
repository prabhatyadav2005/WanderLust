const mongoose  = require("mongoose");
const Schema = mongoose.Schema;
const Review  = require("./review.js");

const listingSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description: String,
    image: {
        filename : String,
        // default: "https://www.istockphoto.com/photo/young-woman-sitting-on-edge-looks-out-at-view-gm1065043970-284792252?searchscope=image%2Cfilm",
        // set : (v) => v === "" ? "https://www.istockphoto.com/photo/young-woman-sitting-on-edge-looks-out-at-view-gm1065043970-284792252?searchscope=image%2Cfilm" : v
        url: String,
    },
    price: Number,
    location: String,
    country: String,
    reviews : [{
        type: Schema.Types.ObjectId,
        ref : "Review",
    },
 ],
 owner : {
    type: Schema.Types.ObjectId,
    ref: "User",
 },
});

listingSchema.post("findOneAndDelete", async (listing)=>{
    if (listing) {
    await Review.deleteMany({_id : {$in: listing.reviews}});
    };

})

const Listing = mongoose.model("Listing",listingSchema);
module.exports = Listing;