/* ===== EDIT PRODUCTS HERE =====
   Add/remove items freely. Fields:
   id (unique number), name, category (must match a CATEGORIES name),
   price (BDT), oldPrice (0 = no discount), rating (1-5), stock (0 = sold out),
   emoji (shown if no image), desc,
   images: ["images/a.jpg", "images/b.jpg", "images/c.jpg"]  <- add as many photos as you like (first one is the main photo)
   image: "images/a.jpg"  <- old single-photo way, still works */
const CATEGORIES = [
  { name: "Electronics", icon: "📱" },
 
  { name: "Home Appliance", icon: "🏠" },
 
 

  { name: "Kitchen", icon: "🍴" }
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
    category: "Kitchen",
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
    category: "Kitchen",
    price: 1149,
    oldPrice: 1900,
    rating: 0, // <-- রেটিং ০ বসানো হয়েছে
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
    rating: 0, // <-- রেটিং ০ বসানো হয়েছে
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
    rating: 0, // <-- রেটিং ০ বসানো হয়েছে
    stock: 32,
    emoji: "🍴",
    images: [
      "https://i.imgur.com/m3EUHdP.png",   // main photo
      "https://i.imgur.com/AKQA8DW.png",   // 2nd photo
      "https://i.imgur.com/OLi4Lpf.png"    // 3rd photo
    ],
    desc: "Streamline your meal prep with our 16-in-1 multifunctional vegetable chopper, featuring ultra-sharp stainless steel blades and food-grade ABS plastic for effortless slicing, dicing, and grating. Built with a built-in storage container, safety handguard, and non-slip base, it cuts prep time while keeping your kitchen clean, safe, and organized."
  }
   {
  id: 9,
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
];
