if (process.env.NODE_ENV != "production") {
    require("dotenv").config();
}

const mongoose = require("mongoose");
const Listing = require("../models/listing.js");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');

const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

main().then(() => {
    console.log("connected to DB");
    fixGeometry();
})
.catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/wanderlust');
}

const fixGeometry = async () => {
    const listings = await Listing.find({
        $or: [
            { geometry: { $exists: false } },
            { "geometry.coordinates": { $size: 0 } },
        ],
    });

    console.log(`Found ${listings.length} listings to fix.`);

    for (let listing of listings) {
        try {
            const query = `${listing.location}, ${listing.country}`;
            const response = await geocodingClient
                .forwardGeocode({ query, limit: 1 })
                .send();

            if (!response.body.features.length) {
                console.log(`No geocode result for "${listing.title}" (${query})`);
                continue;
            }

            listing.geometry = response.body.features[0].geometry;
            await listing.save();
            console.log(`Fixed "${listing.title}" -> ${JSON.stringify(listing.geometry.coordinates)}`);

            await new Promise((r) => setTimeout(r, 300));
        } catch (err) {
            console.error(`Failed for "${listing.title}":`, err.message);
        }
    }

    console.log("data was fixed");
    mongoose.connection.close();
};