const attributeTranslations = {
  model: "Modelis",
  switch: "Taustiņu tips",
  numlock: "Atsevišķs ciparu bloks",
  born: "Ražots",
  wireless: "Bezvadu",
  material: "Materiāls",
  weight: "Svars",
  dpi: "DPI",
  mousePadType: "Peles paliktņa tips",
  measurement: "Izmērs",
  thickness: "Biezums",
  sensitivity: "Jutība",
  micro: "Mikrofons",
};

const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find((product) => product.id === parseInt(productId));
console.log(product);

const productPage = document.querySelector(`.productPage`);

productPage.insertAdjacentHTML(
  `beforeend`,
  `
     <div class="productPrieview">
          <img src="${product.imageUrl}" />
          <div class="productMainInfo">
            <div class="productNameAndBrand">
              <h1 class="productViewBrand title">${product.brand}</h1>
              <h2 class="productViewName text">
                ${product.name}
              </h2>
            </div>
            <h1 class="productViewPrice title">${product.price}€</h1>
            <button class="productButton mainButton" data-id="${
              product.id
            }">Ielikt grozā</button>
          </div>
        </div>
        <div class="productDescription">
          <div class="productOverallDescription">
            <h1 class="descriptionTitle title">Apraksts</h1>
            <span class="descriptionText text"
              >${product.description}</span
            >
          </div>
          <div class="productTabularDescription">
            <h1 class="tabularTitle title">Specifikacija</h1>
            <table class="productTable text">
              <tbody class="productTableValues">
                <tr>
                  <td class="specification">Kategorija</td>
                  <td class="specificationValue">${
                    categories[product.Category]
                  }</td>
                </tr>
                <tr>
                  <td class="specification">Zīmols</td>
                  <td class="specificationValue">${product.brand}</td>
                </tr>
                <tr>
                  <td class="specification">Krāsa</td>
                  <td class="specificationValue">${product.color}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
    `
);

const tableValues = document.querySelector(`.productTableValues`);

const specTable = document.querySelector("#specifications");

for (const key in product) {
  // Skip fields you don't want to show
  if (
    [
      "imageUrl",
      "description",
      "id",
      "Category",
      "name",
      "price",
      "color",
      "brand",
    ].includes(key)
  )
    continue;

  const attributeName = attributeTranslations[key] || key;
  const value = product[key];

  // Insert row using insertAdjacentHTML
  tableValues.insertAdjacentHTML(
    "beforeend",
    `<tr>
       <td class="specification">${attributeName}</td>
       <td class="specificationValue">${value}</td>
     </tr>`
  );
}

let productButton = document.querySelector(`.productButton`);

// Pogai "Ielikt groza", pievieno funkciju produkta pievienosanai groza
productButton.addEventListener(`click`, (e) => {
  addToCart(product);
});
