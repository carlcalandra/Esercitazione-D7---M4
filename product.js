const imageDiv = document.getElementById("product-img");
const productSpecificationsDiv = document.getElementById("product-specifications");
const titleEl = document.getElementById("title");
const setProduct = (product) => {
    console.log(product)
    const imageEl = document.createElement("img");
    imageEl.className = "img-hero";
    imageEl.src = product.imageUrl;
    imageDiv.innerHTML = "";
    imageDiv.appendChild(imageEl);
    productSpecificationsDiv.innerHTML = `  <p class="text-truncate">Description: ${product.description}</p>
                                            <p class="text-truncate">Brand: ${product.brand}</p>
                                           <p class="text-truncate">Price: ${product.price}€</p>
                                           <p class="text-truncate">Created at: ${product.createdAt}</p>
                                           <p class="text-truncate">Updated at: ${product.updatedAt}</p>
                                           <p class="text-truncate">User id: ${product.userId}</p>`                           
}
window.onload =  () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    login()
        .then(response => fetchApi(baseUrl + id, "GET", {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }))
        .then(product => {
            titleEl.innerText = product.name;
            setProduct(product);
        })
}