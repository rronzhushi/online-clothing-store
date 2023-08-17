import { filterProducts } from "./products.js";
const input = document.getElementById("search-input");
// console.log(headerContainer);

input.addEventListener("keyup", (param) => {
  console.log(param);
  filterProducts(param.target.value);
  document.querySelector("#arrows").classList.add("d-none");
});
