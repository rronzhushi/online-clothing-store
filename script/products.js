const productsContainer = document.getElementById("productsContainer");

export function fillProducts(products) {
  if (productsContainer) {
    for (let product of products) {
      const productDiv = document.createElement("div");
      productDiv.className = "product";
      productDiv.innerHTML = `
                <img class="product-image" src="${product.images[0]}" alt="">
                            <h3>${product.title}</h3>
                <h4 class="product-category">${product.category}</h4>
                <p class="product-price">Price: <b>$${product.price.toFixed(
                  2
                )}</b></p>
                <a href="details.html?id=${
                  product.id
                }" class="btn btn-sm btn-outline-success">View item details</a>
                `;

      productsContainer.appendChild(productDiv);
    }
  }
}

export function filterProducts(value) {
  if (value !== "") {
    productsContainer.innerHTML = "";
    axios
      .get(`https://dummyjson.com/products/search?q=${value}`)
      .then((response) => {
        productsContainer.innerHTML = "";
        fillProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    productsContainer.innerHTML = "";
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        fillProducts(response.data.products);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }
}
