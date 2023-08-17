import { fillProducts } from "./products.js";

let products;

axios
  .get("https://dummyjson.com/products")
  .then((response) => {
    // .log(console'response: ', response);
    products = response.data.products;
    fillProducts(products);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
