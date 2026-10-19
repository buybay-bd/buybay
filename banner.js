/* ===== HOME PAGE ADVERTISEMENT BANNER (the card on the right side of the top blue section) =====
   Put your image links inside BANNERS, one link per line, each in quotes and ending with a comma.
   The images slide automatically one after another.
   - BANNER_SECONDS = how many seconds each image stays before the next one slides in.
   - Best image size: square-ish, about 1000 x 1000 px (the frame keeps the same shape as your hoodie ad image).
   - Imgur, Google Drive share links and images/xxx.jpg paths all work.
   - If BANNERS is empty (no links), nothing is shown on the right side at all. */
const BANNER_SECONDS = 2;

const BANNERS = [
   "https://i.imgur.com/0aEiWTD.png",
   "https://i.imgur.com/NNgYWNw.png",
    "https://i.imgur.com/mCNUEC1.png",
   "https://i.imgur.com/ARJ0xxx.png",
    "https://i.imgur.com/4Z3Djea.png",
    "https://i.imgur.com/QA8WXt0.jpeg",

  // "https://i.imgur.com/sKUZ6YU.jpeg",   // <- remove the // and put your 1st image link
  // "https://i.imgur.com/yyyyyyy.jpeg",   // <- 2nd image link
  // "https://i.imgur.com/zzzzzzz.jpeg",   // <- 3rd image link (add as many as you like)
];

/* ===== PROMO CODES =====
   Write a code and its discount PERCENT, one per line:   CODE: percent,
   - A code written here is ACTIVE: it is shown in the top bar of the website and the customer
     can type it at checkout (before payment) to get the discount.
   - To stop a code, delete its line. Remove all lines (leave it empty) and the website shows
     NO promo code anywhere: no top-bar message and no coupon box at checkout.
   - Capital letters are best (the customer can type small letters too). */
const PROMO_CODES = {
  WELCOME5: 5,    // 5% off
};










