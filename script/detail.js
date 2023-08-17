console.log("window object: ", window);
const details = document.getElementById("details-container");
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

axios.get(`https://dummyjson.com/products/${id}`).then((response) => {
  if (response.status === 200) {
    const data = response.data;
    console.log("response: ", response);
    const detailsDivLeft = document.createElement("div");
    const detailsDivRight = document.createElement("div");

    detailsDivLeft.className = "col-lg-7 col-md-9 col-sm-12";
    detailsDivLeft.innerHTML = `
    <img  src="${data.thumbnail}">
  `;
    detailsDivRight.className = "col-lg-5 col-md-3 col-sm-12";
    detailsDivRight.innerHTML = `
    <h1>${data.title}</h1>
    <h5 class="text-success">${data.description}</h5>
    <p><i id="favorite" class="bi bi-star mr-2"></i>${data.rating}/5</p>
    <button class="btn btn-sm btn-outline-success"><h3>&euro;${data.price.toFixed(
      2
    )}</h3>
    </button>
  `;
    details.append(detailsDivLeft, detailsDivRight);
    // document.querySelector("#details > div").innerHTML = Detail(detail);
    const favorite = document.getElementById("favorite");
    console.dir(favorite);
    favorite.addEventListener("click", (event) => {
      if (favorite.style.color === "orange") {
        favorite.style.color = "black";
      } else {
        favorite.style.color = "orange";
      }
      const favorites = JSON.parse(localStorage.getItem("favorites"));

      console.log("event: ", event);
      if (localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", JSON.stringify([...favorites, id]));
      } else {
        console.log("ska sen");
        localStorage.setItem("favorites", JSON.stringify(id));
      }
    });
  }
  for (let item of JSON.parse(localStorage.getItem("favorites"))) {
    if (item === id) {
      favorite.style.color = "orange";
    }
  }
});
