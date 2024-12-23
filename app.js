const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/images/air.png",
      },
      {
        code: "darkblue",
        img: "/images/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "/images/jordan.png",
      },
      {
        code: "green",
        img: "/images/jordan2.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/images/blazer.png",
      },
      {
        code: "green",
        img: "/images/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/images/crater.png",
      },
      {
        code: "lightgray",
        img: "/images/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "/images/hippie.png",
      },
      {
        code: "black",
        img: "/images/hippie2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

let paypalCartUrl = "";

// Function to handle adding items to the cart
function addToCart(itemId) {
  // Simulate the PayPal "Add to Cart" action
  const url = `https://www.paypal.com/webapps/shoppingcart?mfid=1734968755004_${itemId}&flowlogging_id=f616331832149#/checkout/shoppingCart`;

  if (!paypalCartUrl) {
    paypalCartUrl = url; // Store the cart URL if not already stored
    localStorage.setItem("paypalCartUrl", paypalCartUrl); // Save it to localStorage
  }

  window.open(url, "_blank");
}

// Function to update the "View Cart" button
function updateViewCartButton() {
  const viewCartButton = document.getElementById("viewCartButton");
  const storedUrl = localStorage.getItem("paypalCartUrl");

  if (storedUrl) {
    viewCartButton.href = storedUrl; // Set the button link to the stored URL
    viewCartButton.style.display = "block"; // Ensure the button is visible
  } else {
    viewCartButton.style.display = "none"; // Hide the button if no URL is available
  }
}

// Ensure the DOM is fully loaded before attempting to interact with it
document.addEventListener("DOMContentLoaded", function () {
  updateViewCartButton(); // Update the button on DOMContentLoaded
});




// const productButton = document.querySelector(".productButton");
// const payment = document.querySelector(".payment");
// const close = document.querySelector(".close");

// productButton.addEventListener("click", () => {
//   payment.style.display = "flex";
// });

// close.addEventListener("click", () => {
//   payment.style.display = "none";
// });