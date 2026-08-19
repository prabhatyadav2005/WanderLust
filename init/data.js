const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description:
      "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Malibu",
    country: "United States",
  },
  {
    title: "Modern City Apartment",
    description:
      "A stylish apartment in the heart of the city, perfect for travelers who want to explore restaurants, shopping, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "New York",
    country: "United States",
  },
  {
    title: "Mountain View Retreat",
    description:
      "Relax in this peaceful mountain retreat surrounded by beautiful landscapes, fresh air, and scenic hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Aspen",
    country: "United States",
  },
  {
    title: "Luxury Villa with Pool",
    description:
      "Experience luxury in this spacious villa featuring a private swimming pool, modern interiors, and beautiful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Miami",
    country: "United States",
  },
  {
    title: "Peaceful Forest Cabin",
    description:
      "Stay in a cozy wooden cabin surrounded by dense forests. A perfect place for a quiet weekend away from the city.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=800&q=60",
    },
    price: 1100,
    location: "Lake Tahoe",
    country: "United States",
  },
  {
    title: "Seaside Luxury Resort",
    description:
      "Enjoy a luxurious stay by the sea with comfortable rooms, beautiful views, and easy access to the beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=800&q=60",
    },
    price: 2800,
    location: "Honolulu",
    country: "United States",
  },
  {
    title: "Rustic Countryside Home",
    description:
      "A charming countryside home offering a peaceful atmosphere, spacious rooms, and beautiful views of nature.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 900,
    location: "Nashville",
    country: "United States",
  },
  {
    title: "Downtown Luxury Suite",
    description:
      "Stay in a modern luxury suite located close to major attractions, restaurants, shopping centers, and public transportation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Chicago",
    country: "United States",
  },
  {
    title: "Charming Lake House",
    description:
      "Enjoy a relaxing vacation in this beautiful lake house with peaceful water views and outdoor spaces.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Lake Placid",
    country: "United States",
  },
  {
    title: "Modern Beach House",
    description:
      "A bright and modern beach house designed for travelers looking for comfort, relaxation, and spectacular ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "San Diego",
    country: "United States",
  },
  {
    title: "Royal Palace Stay",
    description:
      "Experience traditional architecture and royal hospitality in this magnificent property located near historic attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=60",
    },
    price: 3200,
    location: "Jaipur",
    country: "India",
  },
  {
    title: "Himalayan Mountain Lodge",
    description:
      "Stay close to the Himalayas in this comfortable lodge surrounded by breathtaking mountain scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Manali",
    country: "India",
  },
  {
    title: "Goa Beach Villa",
    description:
      "A beautiful beach villa perfect for a relaxing vacation with sandy beaches, palm trees, and a vibrant atmosphere nearby.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Goa",
    country: "India",
  },
  {
    title: "Heritage Haveli",
    description:
      "Discover Indian heritage in this beautifully restored haveli featuring traditional architecture and comfortable rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Udaipur",
    country: "India",
  },
  {
    title: "Modern Delhi Apartment",
    description:
      "A comfortable modern apartment located near popular attractions, restaurants, markets, and transportation.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "New Delhi",
    country: "India",
  },
  {
    title: "Kerala Backwater Retreat",
    description:
      "Relax beside the famous Kerala backwaters in this peaceful retreat surrounded by tropical greenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1593693411515-c20261bcad6e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Alleppey",
    country: "India",
  },
  {
    title: "Riverside Cottage",
    description:
      "A cozy riverside cottage offering peaceful views, comfortable interiors, and a relaxing atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Rishikesh",
    country: "India",
  },
  {
    title: "Luxury Mumbai Penthouse",
    description:
      "Enjoy a premium stay in this spacious penthouse with modern facilities and stunning city views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=60",
    },
    price: 3000,
    location: "Mumbai",
    country: "India",
  },
  {
    title: "Cozy Shimla Cottage",
    description:
      "Enjoy a peaceful mountain vacation in this warm and cozy cottage surrounded by pine trees.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=800&q=60",
    },
    price: 1200,
    location: "Shimla",
    country: "India",
  },
  {
    title: "Desert Camp Retreat",
    description:
      "Experience the beauty of the desert from this comfortable camp with traditional decor and unforgettable sunsets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Jaisalmer",
    country: "India",
  },
  {
    title: "Parisian Studio Apartment",
    description:
      "Stay in a charming Parisian studio close to cafes, museums, shopping streets, and famous landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "Paris",
    country: "France",
  },
  {
    title: "Swiss Alpine Chalet",
    description:
      "A beautiful alpine chalet offering stunning mountain views, cozy interiors, and easy access to hiking trails.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1520984032042-162d526883e0?auto=format&fit=crop&w=800&q=60",
    },
    price: 2900,
    location: "Zermatt",
    country: "Switzerland",
  },
  {
    title: "Santorini Cliffside Villa",
    description:
      "Enjoy breathtaking views of the Aegean Sea from this elegant villa built into the famous Santorini cliffs.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=800&q=60",
    },
    price: 4000,
    location: "Santorini",
    country: "Greece",
  },
  {
    title: "Italian Countryside Villa",
    description:
      "Escape to the Italian countryside and enjoy a peaceful stay surrounded by vineyards, hills, and beautiful landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Tuscany",
    country: "Italy",
  },
  {
    title: "Barcelona Beach Apartment",
    description:
      "A stylish apartment close to the beach and city attractions, perfect for travelers exploring Barcelona.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Barcelona",
    country: "Spain",
  },
  {
    title: "London Townhouse",
    description:
      "Stay in a charming London townhouse with comfortable rooms and convenient access to the city's major attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "London",
    country: "United Kingdom",
  },
  {
    title: "Amsterdam Canal House",
    description:
      "Experience Amsterdam from a beautiful canal-side home located near museums, restaurants, and historic streets.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=800&q=60",
    },
    price: 2400,
    location: "Amsterdam",
    country: "Netherlands",
  },
  {
    title: "Bali Tropical Villa",
    description:
      "Relax in a private tropical villa surrounded by lush greenery, peaceful gardens, and beautiful Balinese scenery.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Bali",
    country: "Indonesia",
  },
  {
    title: "Tokyo Modern Loft",
    description:
      "A modern loft in the heart of Tokyo, perfect for exploring restaurants, shopping districts, and cultural attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Tokyo",
    country: "Japan",
  },
  {
    title: "Kyoto Traditional House",
    description:
      "Experience traditional Japanese architecture in this peaceful house located near temples and beautiful gardens.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=60",
    },
    price: 1800,
    location: "Kyoto",
    country: "Japan",
  },
  {
    title: "Dubai Luxury Apartment",
    description:
      "Stay in a luxurious apartment with modern facilities, stunning city views, and easy access to Dubai's attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3500,
    location: "Dubai",
    country: "United Arab Emirates",
  },
  
  {
    title: "Maldives Water Villa",
    description:
      "Wake up above crystal-clear waters in this luxurious villa offering direct ocean access and unforgettable views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=60",
    },
    price: 5000,
    location: "Malé",
    country: "Maldives",
  },
  {
    title: "New Zealand Lakeside Cabin",
    description:
      "A peaceful cabin beside a beautiful lake, surrounded by mountains and breathtaking natural landscapes.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=800&q=60",
    },
    price: 2100,
    location: "Queenstown",
    country: "New Zealand",
  },
  {
    title: "Cape Town Ocean Retreat",
    description:
      "Relax in this beautiful ocean retreat with stunning coastal views and easy access to beaches and attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Cape Town",
    country: "South Africa",
  },
  {
    title: "Canadian Mountain Lodge",
    description:
      "Enjoy a peaceful stay in the mountains with cozy interiors, scenic views, and access to outdoor adventures.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=60",
    },
    price: 1700,
    location: "Banff",
    country: "Canada",
  },
  {
    title: "New York Skyline Loft",
    description:
      "A stylish loft offering incredible skyline views and convenient access to restaurants, shopping, and entertainment.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1496588152823-86ff7695e68f?auto=format&fit=crop&w=800&q=60",
    },
    price: 2600,
    location: "New York",
    country: "United States",
  },
  {
    title: "Hawaii Tropical Bungalow",
    description:
      "Enjoy island life in this cozy bungalow surrounded by tropical plants and located near a beautiful beach.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=60",
    },
    price: 2300,
    location: "Maui",
    country: "United States",
  },
  {
    title: "Rocky Mountain Cabin",
    description:
      "A secluded cabin offering beautiful mountain views, peaceful surroundings, and plenty of opportunities for hiking.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Colorado",
    country: "United States",
  },
  {
    title: "Austin Music House",
    description:
      "Stay in a stylish home close to Austin's famous music venues, restaurants, cafes, and nightlife.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1300,
    location: "Austin",
    country: "United States",
  },
  {
    title: "San Francisco Bay Home",
    description:
      "A comfortable home with beautiful bay views and convenient access to San Francisco's famous attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?auto=format&fit=crop&w=800&q=60",
    },
    price: 2500,
    location: "San Francisco",
    country: "United States",
  },
  {
    title: "Boston Historic Apartment",
    description:
      "Stay in a charming historic apartment located close to museums, universities, restaurants, and historic landmarks.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1560185008-b033106af5c3?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Boston",
    country: "United States",
  },
  {
    title: "Portland Garden Cottage",
    description:
      "A peaceful cottage surrounded by beautiful gardens, perfect for travelers looking for a relaxing escape.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=800&q=60",
    },
    price: 1000,
    location: "Portland",
    country: "United States",
  },
  {
    title: "French Riviera Villa",
    description:
      "Enjoy the beauty of the French Riviera from this elegant villa with comfortable rooms and stunning coastal views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=60",
    },
    price: 3800,
    location: "Nice",
    country: "France",
  },
  {
    title: "Greek Island Cottage",
    description:
      "A charming island cottage with beautiful sea views, traditional architecture, and a peaceful atmosphere.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?auto=format&fit=crop&w=800&q=60",
    },
    price: 2000,
    location: "Mykonos",
    country: "Greece",
  },
  {
    title: "Prague Old Town Flat",
    description:
      "Stay in a comfortable apartment in the heart of Prague, close to historic buildings, restaurants, and attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1519671282429-b44660ead0a7?auto=format&fit=crop&w=800&q=60",
    },
    price: 1400,
    location: "Prague",
    country: "Czech Republic",
  },
  {
    title: "Iceland Northern Lights Cabin",
    description:
      "Experience Icelandic nature from this cozy cabin, an ideal place to watch the Northern Lights and explore the countryside.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=800&q=60",
    },
    price: 2200,
    location: "Reykjavik",
    country: "Iceland",
  },
  
  {
    title: "Swiss Lakeside Villa",
    description:
      "Relax in a beautiful lakeside villa with spectacular views, modern facilities, and peaceful surroundings.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=60",
    },
    price: 3100,
    location: "Lucerne",
    country: "Switzerland",
  },
  {
    title: "Moroccan Desert Riad",
    description:
      "Experience traditional Moroccan architecture in this beautiful riad with peaceful courtyards and comfortable rooms.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=60",
    },
    price: 1600,
    location: "Marrakech",
    country: "Morocco",
  },
  
  {
    title: "Phuket Beach Resort",
    description:
      "Enjoy a relaxing tropical vacation at this beautiful beach resort with comfortable rooms and stunning ocean views.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=60",
    },
    price: 1900,
    location: "Phuket",
    country: "Thailand",
  },
  {
    title: "Singapore Marina Apartment",
    description:
      "A modern apartment offering city views and easy access to Singapore's famous attractions, restaurants, and shopping areas.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=60",
    },
    price: 2700,
    location: "Singapore",
    country: "Singapore",
  },
  {
    title: "Lisbon Hillside Home",
    description:
      "Stay in a charming hillside home with beautiful city views, traditional architecture, and easy access to local attractions.",
    image: {
      filename: "listingimage",
      url: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?auto=format&fit=crop&w=800&q=60",
    },
    price: 1500,
    location: "Lisbon",
    country: "Portugal",
  },
]
module.exports = { data: sampleListings };