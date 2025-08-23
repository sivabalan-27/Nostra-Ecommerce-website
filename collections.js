document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const products = document.querySelectorAll(".product");

  // Map filter keys (from checkboxes) to product dataset keys
  const keyMap = {
    colour: "colour",
    gender: "gender",
    brand: "brand",
    Categories: "category" // map Categories -> category
  };

  // Normalize values (lowercase, remove spaces)
  function normalize(str) {
    return (str || "").toLowerCase().replace(/\s+/g, "");
  }

  // Run filter whenever a checkbox changes
  checkboxes.forEach(cb => {
    cb.addEventListener("change", filterProducts);
  });

  function filterProducts() {
    // Store active filters
    let activeFilters = {
      colour: [],
      gender: [],
      brand: [],
      Categories: []
    };

    // collect selected filters
    checkboxes.forEach(cb => {
      if (cb.checked) {
        activeFilters[cb.dataset.filter].push(normalize(cb.value));
      }
    });

    // Loop through all products
    products.forEach(product => {
      let show = true;

      for (let key in activeFilters) {
        if (activeFilters[key].length > 0) {
          const datasetKey = keyMap[key]; // e.g. brand, category
          const productValue = normalize(product.dataset[datasetKey]);

          if (!activeFilters[key].includes(productValue)) {
            show = false;
            break;
          }
        }
      }

      product.style.display = show ? "block" : "none";
    });
  }
});
