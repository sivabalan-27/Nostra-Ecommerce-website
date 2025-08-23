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
// ========================
// Offer Bar Close
// ========================
var offerBar = document.querySelector(".offer-bar");
var offerClose = document.getElementById("offer-close");

if (offerBar && offerClose) {
  offerClose.addEventListener("click", function () {
    offerBar.style.display = "none";
  });
}

// ========================
// Side Navbar Open/Close
// ========================
var sidenavbar = document.querySelector(".side-navbar");
var sideNavOpen = document.getElementById("slider-right-activate"); // hamburger icon
var sideNavClose = document.getElementById("side-navbar-close");    // X icon

if (sideNavOpen && sidenavbar) {
  sideNavOpen.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "0";
  });
}

if (sideNavClose && sidenavbar) {
  sideNavClose.addEventListener("click", function () {
    sidenavbar.style.marginLeft = "-60%";
  });
}

// ========================
// Slider Controls
// ========================
var sliderLeftButton = document.getElementById("slider-left-activate");
var sliderRightButton = document.getElementById("slider-right-activate");
var sliderImage = document.querySelector(".slider-image-container");
var sliderMargin = 0;

if (sliderRightButton && sliderImage) {
  sliderRightButton.addEventListener("click", function () {
    sliderMargin += 100;
    if (sliderMargin > 200) {
      sliderMargin = 0;
      sliderImage.style.marginLeft = "0";
    } else {
      sliderImage.style.marginLeft = "-" + sliderMargin + "vw";
    }
  });
}

if (sliderLeftButton && sliderImage) {
  sliderLeftButton.addEventListener("click", function () {
    if (sliderMargin === 0) {
      sliderMargin = 200;
    } else {
      sliderMargin -= 100;
    }
    sliderImage.style.marginLeft = "-" + sliderMargin + "vw";
  });
}

// ========================
// Like Button Toggle
// ========================
var likeButtons = document.querySelectorAll(".like-button");

likeButtons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    if (e.target.src.indexOf("blackheart") > 0) {
      e.target.src = "img/icons/redheart.png";
    } else {
      e.target.src = "img/icons/blackheart.png";
    }
  });
});

// ========================
// Scroll Animation
// ========================
window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll(".initial-scroll-animate");
  var windowHeight = window.innerHeight;

  elements.forEach((el) => {
    var elBound = el.getBoundingClientRect();
    if (windowHeight > elBound.top - 100) {
      el.classList.remove("reveal-scroll-animate");
    }
  });
});

// ========================
// Search Functionality
// ========================
var searchInput = document.getElementById("search-bar");
var products = document.querySelectorAll(".product");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    let query = searchInput.value.toLowerCase();

    products.forEach(product => {
      let text = product.innerText.toLowerCase();
      if (text.includes(query)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}