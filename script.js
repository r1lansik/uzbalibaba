function addProduct() {
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const desc = document.getElementById("desc").value;
  const imageUrl = document.getElementById("imageUrl").value;

  if (!title || !price || !imageUrl) {
    alert("Пожалуйста, заполните название, цену и фото");
    return;
  }

  const productHTML = `
    <div class="card">
      <img src="${imageUrl}" alt="${title}" class="product-img">
      <h3>${title}</h3>
      <p>${desc}</p>
      <strong>${price} сум</strong>
      <button>Купить</button>
    </div>
  `;

  document.getElementById("productList").innerHTML += productHTML;

  // Очистить форму
  document.getElementById("title").value = "";
  document.getElementById("price").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("imageUrl").value = "";
  toggleForm();
}