/* ===== EDIT PRODUCTS HERE =====
   Add/remove items freely. Fields:
   id (unique number), name, category (must match a CATEGORIES name),
   price (BDT), oldPrice (0 = no discount), rating (1-5), stock (0 = sold out),
   emoji (shown if no image), desc,
   images: ["images/a.jpg", "images/b.jpg", "images/c.jpg"]  <- add as many photos as you like (first one is the main photo)
   image: "images/a.jpg"  <- old single-photo way, still works

   OPTIONAL colour / size choice (see product id 12 below as an example):
   colors: ["Black", "Navy", "Red"]   <- only products with this line show a Color choice
   sizes:  ["M", "L", "XL"]           <- only products with this line show a Size choice
   Use only colors, only sizes, or both. No line (or []) = no option shown for that product.
   The customer must pick the option before Add to cart / Buy now, and the choice goes into the order message. */
const CATEGORIES = [
  { name: "Electronics", icon: "📱" },
  { name: "Home Appliance", icon: "🏠" },
    { name: "Winter", icon: "🧥" },
  { name: "Kitchen", icon: "🍴" },
   { name: "Combo Offers", icon: "✨" }
];

const PRODUCTS = [
  {
    id: 1,
    name: "Multi-Function Small Portable Juicer (Multi colour)",
    category: "Kitchen",
    price: 1080,
    oldPrice: 1260,
    rating: 4.5,
    stock: 12,
    emoji: "🍴",
    images: [
      "https://i.imgur.com/sKUZ6YU.jpeg",   // main photo (shown on the product card)
      "https://i.imgur.com/wLRtkMv.jpeg",   // 2nd photo
      "https://i.imgur.com/HRnos9K.jpeg"    // 3rd photo
    ],
    desc: "The biggest advantage of this package is that it comes with two 400 ml cups, allowing you to make juice in one while storing it in the other, or enabling two people to use them separately. Beyond just making juice, it can also be used to prepare smoothies, milkshakes, and protein shakes for the gym. Additionally, it is easy to carry in a bag, making it convenient to take to the office, while traveling, or during outdoor sports activities."
  },
  {
    id: 2,
    name: "Magical Garage Key Hanger with LED Mini Car Display",
    category: "Home Appliance",
    price: 1100,
    oldPrice: 1260,
    rating: 4.5,
    stock: 18,
    emoji: "🏠",
    images: [
      "https://i.imgur.com/QA8WXt0.jpeg",   // main photo
      "https://i.imgur.com/voK3MbM.jpeg",   // 2nd photo
      "https://i.imgur.com/o1bfRjz.jpeg"    // 3rd photo
    ],
    desc: "The Infinite Garage LED Key Hanger is designed like a miniature luxury garage, complete with a 3D infinity mirror tunnel effect that lights up your keys every time you hang them. Instead of hiding your keys, it puts them on display — exactly where they belong."
  },
  {
    id: 3,
    name: "Instant Electric Digital Display Hot Water Tap",
    category: "Home Appliance",
    price: 1900,
    oldPrice: 2200,
    rating: 0,
    stock: 18,
    emoji: "🏠",
    images: [
      "https://i.imgur.com/rjexwaL.jpeg",   // main photo
      "https://i.imgur.com/FbcfGzC.jpeg",   // 2nd photo
      "https://i.imgur.com/lZLCBIm.jpeg"    // 3rd photo
    ],
    desc: "Heats water in just 3 to 5 seconds, reaching 30 to 60 degree celcius. It features a digital LED temperature display, dual hot/cold control handle, 3000W power, and IPX4 splash protection.Why Buy This?Provides instant hot water for winter kitchen chores, ablution, and daily washing without needing a bulky geyser setup or continuous heating, saving energy by heating water only on demand.Safety Warning:Requires proper electrical earthing to prevent shocks and must be plugged into a high-amperage socket."
  },
  {
    id: 4,
    name: "Foldable Powerful Winds Turbo Handheld Fan",
    category: "Electronics",
    price: 590,
    oldPrice: 830,
    rating: 4.5,
    stock: 22,
    emoji: "📱",
    images: [
      "https://i.imgur.com/ARJ0xxx.png",   // main photo
      "https://i.imgur.com/XHfwRqP.png",   // 2nd photo
      "https://i.imgur.com/CMeeU2y.png"    // 3rd photo
    ],
    desc: "This compact fan features a powerful motor that delivers instant cooling performance. With 5 adjustable speed levels, you can easily control the airflow according to your comfort. Its 180° foldable and lightweight design allows for effortless use as a handheld or desktop fan. Powered by an 1800mAh rechargeable battery with fast Type-C charging, it also includes a lanyard for convenient, hands-free portability wherever you go."
  },
  {
    id: 5,
    name: "Q86 Retro Camera Design Wireless Earbuds ",
    category: "Electronics",
    price: 700,
    oldPrice: 780,
    rating: 4.5,
    stock: 22,
    emoji: "📱",
    images: [
      "https://i.imgur.com/NNgYWNw.png",   // main photo
      "https://i.imgur.com/62QHM1f.png",   // 2nd photo
      "https://i.imgur.com/WGmshd2.png"    // 3rd photo
    ],
    desc: "blending a vintage camera design with premium leather texture, the Q86 Retro Wireless Earbuds feature a smart LED display, fast Bluetooth 5.4, ENC noise reduction for crisp calls, and low-latency gaming with sweat resistance. The perfect all-in-one blend of timeless style and modern Hi-Fi sound!"
  },
  {
    id: 6,
    name: "6 In 1 Combo Offer - Kitchen Items",
    category: "Combo Offers",
    price: 1500,
    oldPrice: 2280,
    rating: 4.5,
    stock: 22,
    emoji: "🍴",
    images: [
      "https://i.imgur.com/W4A5CUc.jpeg",   // main photo
      "https://i.imgur.com/R7spgD2.png",   // 2nd photo
      "https://i.imgur.com/Kcc2Yd3.png"    // 3rd photo
    ],
    desc: ""
  },
  {
    id: 7,
    name: "2 In 1 Combo Offer - Kitchen Items",
    category: "Combo Offers",
    price: 1149,
    oldPrice: 1900,
    rating: 0,
    stock: 32,
    emoji: "🍴",
    images: [
      "https://i.imgur.com/22Qg4Lk.jpeg",   // main photo
      "https://i.imgur.com/H7YMLmS.png",   // 2nd photo
      "https://i.imgur.com/hZl1uvO.png"    // 3rd photo
    ],
    desc: ""
  },
  {
    id: 8,
    name: "2-in-1 Sprayable & Pourable Oil Bottle",
    category: "Kitchen",
    price: 400,
    oldPrice: 460,
    rating: 0,
    stock: 45,
    emoji: "🍴",
    images: [
      "https://i.imgur.com/hZl1uvO.png",   // main photo
      "https://i.imgur.com/xoo9zIi.png",   // 2nd photo
      "https://i.imgur.com/DvJSxBA.png"    // 3rd photo
    ],
    desc: "Enhance your daily cooking with our 2-in-1 dual-function oil bottle, featuring versatile spray and pour modes, a leak-proof design, and heat-resistant glass for safe, hassle-free use. Available in 450ml and 600ml capacities with a wide mouth for easy cleaning, it keeps your kitchen neat and healthy."
  },
  {
    id: 9,
    name: "16-in-1 Multifunctional Vegetable Chopper & Mandoline Slicer",
    category: "Kitchen",
    price: 730,
    oldPrice: 1900,
    rating: 0,
    stock: 32,
    emoji: "🍴",
    images: [
      "https://i.imgur.com/m3EUHdP.png",   // main photo
      "https://i.imgur.com/AKQA8DW.png",   // 2nd photo
      "https://i.imgur.com/OLi4Lpf.png"    // 3rd photo
    ],
    desc: "Streamline your meal prep with our 16-in-1 multifunctional vegetable chopper, featuring ultra-sharp stainless steel blades and food-grade ABS plastic for effortless slicing, dicing, and grating. Built with a built-in storage container, safety handguard, and non-slip base, it cuts prep time while keeping your kitchen clean, safe, and organized."
  },
  {
    id: 10,
    name: "3-Piece Stainless Steel Vacuum Flask Set",
    category: "Kitchen",
    price: 550,
    oldPrice: 680,
    rating: 0,
    stock: 15,
    emoji: "🫖",
    images: [
      "https://i.imgur.com/pmhDYtg.png",
      "https://i.imgur.com/2hs3erk.png",
      "https://i.imgur.com/ZAiLTTW.png"
    ],
    desc: "A 3-piece stainless steel vacuum flask set designed to keep your beverages hot or cold for longer. Durable, practical, and suitable for everyday use at home, office, or while traveling."
  },
{
    id: 11,
    name: "K8 Sport True Wireless Earbuds",
    category: "Electronics",
    price: 480,
    oldPrice: 700,
    rating: 0,
    stock: 12,
    emoji: "📱",
    images: [
      "https://i.imgur.com/bPjuFEW.png",   // main photo
      "https://i.imgur.com/tHsvzy1.png",   // 2nd photo
      "https://i.imgur.com/IClsZFF.png"    // 3rd photo
    ],
    desc: "Designed for active lifestyles, the K8 Sport True Wireless Earbuds deliver powerful bass and crisp audio with an ergonomic ear-hook design that stays securely in place during workouts. Features fast Bluetooth connectivity, touch controls, sweat resistance, and a compact charging case for reliable all-day performance."
  },
{
  id: 12,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/ft7XkfF.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 13,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 90,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/JOWyJP4.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 14,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 90,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/I83PGYD.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},
{
  id: 15,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/DDO9jVr.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 16,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/H6E69mE.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 17,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/a2bbjX6.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

  {
  id: 18,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/ObxXoim.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 19,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/87M1dxD.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 20,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/lAFxDlR.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie offers a modern look that's perfect for casual outings, university, travel, and daily wear. Its versatile black colour pairs effortlessly with any outfit, while the comfortable fit makes it an ideal choice for chilly days. Available in M, L, XL, and XXL. Upgrade your winter wardrobe with style and comfort at an affordable price."
},

   {
  id: 21,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/Mt3HLZB.png",
    "https://i.imgur.com/D6BUBVe.png"
  ],
  colors: ["Black", "White"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie features a modern look perfect for university, casual outings, travel, and daily wear. Available in classic Black and White colour options, with sizes M, L, XL, and XXL. A versatile winter essential that combines comfort, style, and affordability."
},

   {
  id: 22,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/kIJE338.png"
  ],
  colors: ["Black"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie features a modern look perfect for university, casual outings, travel, and daily wear. Available in classic Black and White colour options, with sizes M, L, XL, and XXL. A versatile winter essential that combines comfort, style, and affordability."
},
   {
  id: 23,
  name: "Men's Stylish Winter Hoodie",
  category: "Winter",
  price: 690,
  oldPrice: 940,
  rating: 0,
  stock: 112,
  emoji: "🧥",
  images: [
    "https://i.imgur.com/XnUTG4X.png"
  ],
  colors: ["Black", "White"],
  sizes: ["M", "L", "XL", "XXL"],
  desc: "Stay warm and stylish this winter with our Men's Stylish Winter Hoodie. Designed for everyday comfort, this hoodie features a modern look perfect for university, casual outings, travel, and daily wear. Available in classic Black and White colour options, with sizes M, L, XL, and XXL. A versatile winter essential that combines comfort, style, and affordability."
},
   {
  id: 24,
  name: "Awei T51 True Wireless Earbuds",
  category: "Electronics",
  price: 1250,
  oldPrice: 1560,
  rating: 0,
  stock: 20,
  emoji: "📱",
  images: [
    "https://i.imgur.com/0fAuwhu.png",
    "https://i.imgur.com/aa5unrZ.png"
  ],
  desc: "Experience wireless freedom with the Awei T51 True Wireless Earbuds. Designed for everyday listening, these earbuds offer a stylish, compact design that's perfect for music, videos, calls, study sessions, and travel. Enjoy a convenient wireless experience and a comfortable fit wherever you go. A great choice for everyday entertainment at an affordable price."
},
   {
  id: 25,
  name: "SQ-112 Smart Touch Lamp Quran Speaker",
  category: "Electronics",
  price: 2420,
  oldPrice: 2600,
  rating: 0,
  stock: 20,
  emoji: "📱",
  images: [
    "https://i.imgur.com/6tkivAA.png",
    "https://i.imgur.com/p6c78GI.png",
    "https://i.imgur.com/w5qRyDe.png"
  ],
  desc: "Enhance your spiritual experience with the SQ-112 Smart Touch Lamp Quran Speaker. Combining elegant lamp design with a Quran speaker, it is a beautiful addition to your bedroom, living room, or prayer space. Its smart touch control offers convenient operation, while its stylish design makes it suitable for everyday use and gifting. A thoughtful choice for anyone looking to combine modern home décor with Islamic audio features."
},
   
   {
  id: 26,
  name: "ENCHEN Boost USB Electric Hair Clipper & Beard Trimmer",
  category: "Electronics",
  price: 1320,
  oldPrice: 1500,
  rating: 5,
  stock: 12,
  emoji: "💈",
  images: [
    "https://i.imgur.com/4Z3Djea.png",
    "https://i.imgur.com/NBWiZ4l.png",
    "https://i.imgur.com/ln93qW9.png",
    "https://i.imgur.com/PIhI5Qq.png"
  ],
  colors: ["Black", "White"],
  desc: "Keep your grooming routine simple with the ENCHEN Boost USB Electric Hair Clipper & Beard Trimmer. Featuring a sleek, modern design, this clipper is suitable for everyday hair trimming and beard grooming at home or while travelling. Its USB charging design offers convenient power access, while the compact build makes it easy to handle and store. Available in Black and White to match your style. Enjoy convenient personal grooming at an affordable price."
},
   {
  id: 27,
  name: "Premium Skinning Knife",
  category: "Kitchen",
  price: 550,
  oldPrice: 640,
  rating: 0,
  stock: 13,
  emoji: "🔪",
  images: [
    "https://i.imgur.com/co115oD.png",
    "https://i.imgur.com/OqD8zPj.png"
  ],
  desc: "Upgrade your kitchen toolkit with the Premium Skinning Knife, designed for precise food preparation. Its specialized blade shape is suitable for separating meat from skin and trimming meat with greater control. Featuring a practical design for kitchen use, this knife is a useful addition for home cooks and food preparation tasks. Handle carefully, keep the blade clean and dry, and store it securely after use."
},
{
  id: 28,
  name: "16-Color Plug-In USB Galaxy Night Light",
  category: "Home Appliance",
  price: 1050,
  oldPrice: 1200,
  rating: 4.5,
  stock: 10,
  emoji: "🌌",
  images: [
    "https://i.imgur.com/46DwNM8.png",
    "https://i.imgur.com/IeRJHM9.png",
    "https://i.imgur.com/8x9FR6L.png"
  ],
  desc: "Transform your room into a magical galaxy with the 16-Color Plug-In USB Galaxy Night Light. Featuring 16 vibrant colour options, this decorative light creates a relaxing and beautiful atmosphere for bedrooms, living rooms, gaming spaces, and special occasions. Its compact design makes it easy to place wherever you want a touch of ambient lighting. Perfect for everyday room décor or as a thoughtful gift."
},
   {
  id: 29,
  name: "HONPHIER 108 LED Warm White Tree Lamp",
  category: "Home Appliance",
  price: 1300,
  oldPrice: 1480,
  rating: 4.5,
  stock: 14,
  emoji: "🌳",
  images: [
    "https://i.imgur.com/mCNUEC1.png",
    "https://i.imgur.com/PmfGd6K.png",
    "https://i.imgur.com/siaaFpH.png",
    "https://i.imgur.com/WfD6CUG.png"
  ],
  desc: "Add a warm and elegant touch to your home with the HONPHIER 108 LED Warm White Tree Lamp. Featuring 108 LED lights with a beautiful warm white glow, this decorative tree lamp creates a cozy and relaxing atmosphere in bedrooms, living rooms, and other spaces. Its stylish tree-inspired design makes it perfect for home décor, festive decorations, and special occasions. A beautiful lighting accent for your home or a thoughtful gift for someone special."
},
   
   
];
