const product = [
  {
    id: 1,
    name: "Iced Lemon Cooler",
    image:
      "https://freshcart.codescandy.com/assets/images/products/product-img-1.jpg",
    oldPrice: 2000,
    newPrice: 1500,
    category: "Soft Drink",
    rating: 4.5,
    specialOffer: "Discount",
  },
  {
    id: 2,
    name: "Classic Cola",
    image:
      "https://freshcart.codescandy.com/assets/images/products/product-img-2.jpg",
    oldPrice: 800,
    newPrice: 600,
    category: "Soft Drink",
    rating: 4.3,
  },
  {
    id: 3,
    name: "Cold Brew Can",
    image:
      "https://freshcart.codescandy.com/assets/images/products/product-img-3.jpg",
    newPrice: 1200,
    category: "Beverage",
    rating: 4.6,
    specialOffer: "Special Sale",
  },
  {
    id: 4,
    name: "Whiskey on Ice",
    image:
      "https://freshcart.codescandy.com/assets/images/products/product-img-4.jpg",
    oldPrice: 6500,
    newPrice: 6000,
    category: "Alcoholic Drink",
    rating: 4.7,
  },
  {
    id: 5,
    name: "Sparkling Lemon Soda",
    image:
      "https://freshcart.codescandy.com/assets/images/products/product-img-5.jpg",
    newPrice: 1000,
    category: "Soft Drink",
    rating: 4.2,
  },
  {
    id: 6,
    name: "Vintage Rum",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-alcohol-drink-png-image_12110605.png",
    oldPrice: 7500,
    newPrice: 6800,
    category: "Alcoholic Drink",
    rating: 4.8,
  },
  {
    id: 7,
    name: "Cold Cola Can",
    image:
      "https://static.vecteezy.com/system/resources/previews/006/576/202/original/realistic-drink-can-png.png",
    oldPrice: 900,
    newPrice: 750,
    category: "Soft Drink",
    rating: 4.1,
  },
  {
    id: 8,
    name: "Classic Gin Tonic",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-alcohol-drink-png-image_12110605.png",
    newPrice: 5000,
    category: "Alcoholic Drink",
    rating: 4.4,
    specialOffer: "Discount",
  },
  {
    id: 9,
    name: "Iced Black Coffee",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-cola-drink-png-image_12110606.png",
    newPrice: 1800,
    category: "Beverage",
    rating: 4.6,
  },
  {
    id: 10,
    name: "Mango Juice Can",
    image:
      "https://static.vecteezy.com/system/resources/previews/006/576/202/original/realistic-drink-can-png.png",
    oldPrice: 1300,
    newPrice: 1100,
    category: "Beverage",
    rating: 4.3,
  },
  {
    id: 11,
    name: "Premium Lager",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-alcohol-drink-png-image_12110605.png",
    oldPrice: 4200,
    newPrice: 3900,
    category: "Alcoholic Drink",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Chilled Lemon Water",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-iced-drink-png-image_12110604.png",
    newPrice: 500,
    category: "Soft Drink",
    rating: 4.0,
  },
  {
    id: 13,
    name: "Fruit Punch Can",
    image:
      "https://static.vecteezy.com/system/resources/previews/006/576/202/original/realistic-drink-can-png.png",
    newPrice: 1400,
    category: "Beverage",
    rating: 4.5,
  },
  {
    id: 14,
    name: "Citrus Energy Drink",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-cola-drink-png-image_12110606.png",
    oldPrice: 1600,
    newPrice: 1400,
    category: "Beverage",
    rating: 4.4,
  },
  {
    id: 15,
    name: "White Wine Glass",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-alcohol-drink-png-image_12110605.png",
    oldPrice: 5200,
    newPrice: 4800,
    category: "Alcoholic Drink",
    rating: 4.8,
  },
  {
    id: 16,
    name: "Herbal Green Tea",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-iced-drink-png-image_12110604.png",
    newPrice: 1500,
    category: "Beverage",
    rating: 4.6,
  },
  {
    id: 17,
    name: "Dark Stout Beer",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-alcohol-drink-png-image_12110605.png",
    oldPrice: 5500,
    newPrice: 5000,
    category: "Alcoholic Drink",
    rating: 4.7,
  },
  {
    id: 18,
    name: "Berry Soda",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-cola-drink-png-image_12110606.png",
    newPrice: 1200,
    category: "Soft Drink",
    rating: 4.3,
  },
  {
    id: 19,
    name: "Tropical Juice Can",
    image:
      "https://static.vecteezy.com/system/resources/previews/006/576/202/original/realistic-drink-can-png.png",
    oldPrice: 1500,
    newPrice: 1300,
    category: "Beverage",
    rating: 4.5,
  },
  {
    id: 20,
    name: "Champagne Glass",
    image:
      "https://png.pngtree.com/png-clipart/20230921/original/pngtree-realistic-alcohol-drink-png-image_12110605.png",
    newPrice: 8500,
    category: "Alcoholic Drink",
    rating: 4.9,
    specialOffer: "Special Sale",
  },
];
module.exports = product;
