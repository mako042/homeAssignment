import product_8 from '../assets/images/product_8.jpg'
import product_10 from '../assets/images/product_10.jpg'
import product_11 from '../assets/images/product_11.jpg'
import product_14 from '../assets/images/product_14.jpg'

const products = [
  { id: 1, category: "tv", make: "Samsung", model: 'QLED 4K Q80C 65"', price: 1299, images: [product_14, product_8, product_10], isSpecialOffer: true, brand: "Samsung" },
  { id: 2, category: "tv", make: "LG", model: 'OLED C3 55"', price: 1499, images: [product_8, product_14], brand: "LG" },
  { id: 3, category: "tv", make: "Sony", model: 'Bravia XR A80L 65"', price: 1899, images: [product_10], isSpecialOffer: true, brand: "Sony" },
  { id: 4, category: "tv", make: "Samsung", model: 'Neo QLED 8K QN900C 75"', price: 3499, images: [product_11, product_10], brand: "Samsung" },
  { id: 5, category: "tv", make: "TCL", model: '6-Series 4K 55"', price: 649, images: [product_14], brand: "TCL" },
  { id: 6, category: "tv", make: "Hisense", model: 'U8K Mini-LED 65"', price: 899, images: [product_8, product_11, product_14], isSpecialOffer: true, brand: "Hisense" },
  { id: 7, category: "tv", make: "LG", model: 'NanoCell 75" 4K', price: 799, images: [product_10], brand: "LG" },
  { id: 8, category: "tv", make: "Sony", model: 'X90L 4K 55"', price: 999, images: [product_11, product_8], brand: "Sony" },
  { id: 9, category: "phone", make: "Apple", model: "iPhone 15 Pro Max", price: 1199, images: [product_14, product_8, product_14], isSpecialOffer: true, brand: "Apple" },
  { id: 10, category: "phone", make: "Samsung", model: "Galaxy S24 Ultra", price: 1299, images: [product_14, product_8], brand: "Samsung" },
  { id: 11, category: "phone", make: "Google", model: "Pixel 8 Pro", price: 999, images: [product_11], brand: "Google" },
  { id: 12, category: "phone", make: "OnePlus", model: "12 Pro", price: 899, images: [product_14, product_10], isSpecialOffer: true, brand: "OnePlus" },
  { id: 13, category: "phone", make: "Apple", model: "iPhone 15", price: 899, images: [product_10, product_14, product_14], brand: "Apple" },
  { id: 14, category: "phone", make: "Samsung", model: "Galaxy Z Fold 5", price: 1799, images: [product_14], brand: "Samsung" },
  { id: 15, category: "phone", make: "Xiaomi", model: "14 Pro", price: 799, images: [product_8, product_14], brand: "Xiaomi" },
  { id: 16, category: "phone", make: "Google", model: "Pixel 8", price: 699, images: [product_14], isSpecialOffer: true, brand: "Google" },
  { id: 17, category: "laptop", make: "Apple", model: 'MacBook Pro 16" M3 Max', price: 3499, images: [product_10, product_11, product_8], isSpecialOffer: true, brand: "Apple" },
  { id: 18, category: "laptop", make: "Dell", model: "XPS 15 9530", price: 1899, images: [product_11, product_8], brand: "Dell" },
  { id: 19, category: "laptop", make: "Lenovo", model: "ThinkPad X1 Carbon Gen 11", price: 1699, images: [product_8], brand: "Lenovo" },
  { id: 20, category: "laptop", make: "HP", model: 'Spectre x360 14"', price: 1499, images: [product_8, product_10], brand: "HP" },
  { id: 21, category: "laptop", make: "Apple", model: 'MacBook Air 15" M3', price: 1299, images: [product_10, product_11], isSpecialOffer: true, brand: "Apple" },
  { id: 22, category: "laptop", make: "ASUS", model: "ROG Zephyrus G14", price: 1599, images: [product_11, product_8, product_11], brand: "ASUS" },
  { id: 23, category: "laptop", make: "Microsoft", model: "Surface Laptop 5", price: 1299, images: [product_11], brand: "Microsoft" },
  { id: 24, category: "laptop", make: "Acer", model: "Swift X 14", price: 899, images: [product_8, product_11], isSpecialOffer: true, brand: "Acer" },
];

export default products