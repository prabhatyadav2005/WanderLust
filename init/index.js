const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

  
//connection with database:
main().then(() =>{
    console.log("connected to DB");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust'); 
}

const initDB = async () =>{
   console.log("Deleting...");
   await Listing.deleteMany({});
   initData.data = initData.data.map((obj) =>({
    ...obj, 
   owner : "6a804596b08bb1d857adfa03",
   }));
   await Listing.insertMany(initData.data);
   console.log("data was initialized");
};

initDB();