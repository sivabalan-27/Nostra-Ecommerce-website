document.addEventListener("DOMContentLoaded", () => {
  const checkboxes = document.querySelectorAll(".filter-checkbox");
  const products = document.querySelectorAll(".product");
  const desktopSearch = document.getElementById("search-bar");       
  const mobileSearch = document.getElementById("mobile-search-bar"); 

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

  // Main filter function (combines checkbox + search)
  function filterProducts() {
    // 1. Collect active checkbox filters
    let activeFilters = {
      colour: [],
      gender: [],
      brand: [],
      Categories: []
    };

    checkboxes.forEach(cb => {
      if (cb.checked) {
        activeFilters[cb.dataset.filter].push(normalize(cb.value));
      }
    });

    // 2. Get search query (from desktop or mobile)
    let query = "";
    if (desktopSearch && desktopSearch.value) {
      query = desktopSearch.value.toLowerCase();
    }
    if (mobileSearch && mobileSearch.value) {
      query = mobileSearch.value.toLowerCase();
    }

    // 3. Apply filtering
    products.forEach(product => {
      let show = true;

      // Checkbox filtering
      for (let key in activeFilters) {
        if (activeFilters[key].length > 0) {
          const datasetKey = keyMap[key];
          const productValue = normalize(product.dataset[datasetKey]);

          if (!activeFilters[key].includes(productValue)) {
            show = false;
            break;
          }
        }
      }

      // Search filtering
      let productText = product.innerText.toLowerCase();
      if (query && !productText.includes(query)) {
        show = false;
      }

      // Show or hide product
      product.style.display = show ? "block" : "none";
    });
  }

  // Attach events
  checkboxes.forEach(cb => cb.addEventListener("change", filterProducts));
  if (desktopSearch) desktopSearch.addEventListener("keyup", filterProducts);
  if (mobileSearch) mobileSearch.addEventListener("keyup", filterProducts);
});

// Offer Bar Close
var offerBar = document.querySelector(".offer-bar");
var offerClose = document.getElementById("offer-close");

if (offerBar && offerClose) {
  offerClose.addEventListener("click", function () {
    offerBar.style.display = "none";
  });
}

// Side Navbar Open/Close
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


// Slider Controls
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


// Scroll Animation

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
