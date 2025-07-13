const openBtn = document.getElementById("mobile-menu-button");
const closeBtn = document.getElementById("mobile-menu-close");
const menu = document.getElementById("mobile-menu");

openBtn.addEventListener("click", () => {
  menu.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("hidden");
});

// Time out
const countDownDate = new Date("Jan 31, 2026 00:00:00").getTime();

const x = setInterval(function () {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = `<p id="days">${days} :</p>`;
  document.getElementById("hours").innerHTML = `<p id="days">${hours} :</p>`;
  document.getElementById(
    "minutes"
  ).innerHTML = `<p id="days">${minutes} :</p>`;
  document.getElementById("seconds").innerHTML = `<p id="days">${seconds}</p>`;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Sale Out";
    document.getElementById("timer").style.fontStyle = "semibold";
    document.getElementById("timer").style.fontSize = "40px";
  }
}, 1000);

// cards
const cardsData = [
  {
    id: "1",
    percentage: "40%",
    img: "/images/Game.png",
    productName: "HAVIT HV-G92 Gamepad",
    orginalPrice: "$120",
    discountPrice: "$160",
    ratingImg: "/images/Five star.png",
    off: "40%",
    ratnum: "(100)",
  },
  {
    id: "2",
    percentage: "40%",
    img: "/images/KeyBoard.png",
    productName: "AK-900 Wired Keyboard",
    orginalPrice: "$960",
    discountPrice: "$1160",
    ratingImg: "/images/Three Star.png",
    off: "35%",
    ratnum: "(75)",
  },
  {
    id: "3",
    percentage: "40%",
    img: "/images/LCD.png",
    productName: "IPS LCD Gaming Monitor",
    orginalPrice: "$370",
    discountPrice: "$400",
    ratingImg: "/images/Four Half Star.png",
    off: "30%",
    ratnum: "(95)",
  },
  {
    id: "4",
    percentage: "40%",
    img: "/images/Chair.png",
    productName: "S-Series Comfort Chair ",
    orginalPrice: "$375",
    discountPrice: "$400",
    ratingImg: "/images/Five star.png",
    off: "25%",
    ratnum: "(100)",
  },
];

function createCard(card) {
  const cardElement = document.createElement("div");
  cardElement.innerHTML = `
    <div class="relative w-72 bg-slate-100 rounded-lg shadow-md p-4 m-2 flex flex-col">
      
      <!-- Discount Badge -->
      <span class="absolute top-2 left-2 text-white bg-red-500 rounded-sm px-2 py-1 text-xs">${card.off}</span>
      
      <!-- Product Image Container (fixed height + center alignment) -->
      <div class="flex justify-center items-center h-40 mb-3">
        <img src="${card.img}" alt="Product" class="max-h-full object-contain" />
      </div>

      <!-- Like + Quick View Icons -->
      <div class="absolute top-2 right-2 flex flex-col items-center gap-2">
        <img src="/images/like.png" alt="Like" class="w-5 cursor-pointer">
        <img src="/images/Quick View.png" alt="Quick View" class="w-5 cursor-pointer">
      </div>

      <!-- Add to Cart Button -->
      <button class="w-full bg-black text-white p-2 mt-2 rounded hover:bg-gray-800 transition duration-300">
        Add to Cart
      </button>

      <!-- Product Name -->
      <p class="font-medium text-base leading-6 mt-3 text-center">${card.productName}</p>

      <!-- Price Section -->
      <div class="flex justify-center items-center gap-2 mt-1">
        <span class="text-red-500 font-medium">${card.orginalPrice}</span>
        <span class="line-through text-slate-500 font-medium">${card.discountPrice}</span>
      </div>

      <!-- Rating -->
      <div class="flex justify-center items-center gap-1 mt-2">
        <img src="${card.ratingImg}" alt="Rating" class="w-20 h-auto">
        <p class="text-slate-500 font-semibold text-sm">${card.ratnum}</p>
      </div>
    </div>
  `;
  return cardElement;
}

cardsData.map((card) => {
  const container = document.querySelector(".container-card");
  const cardElement = createCard(card);
  container.appendChild(cardElement);
});

// Second Row

const cardData1 = [
  {
    id: "5",
    percentage: "40%",
    img: "/images/PinkCoart.png",
    productName: "The north coat",
    orginalPrice: "$130",
    discountPrice: "$160",
    ratingImg: "/images/Five star.png",
    off: "25%",
    ratnum: "(100)",
  },
  {
    id: "6",
    percentage: "40%",
    img: "/images/Guccibag.png",
    productName: "Gucci duffle bag",
    orginalPrice: "$130",
    discountPrice: "$160",
    ratingImg: "/images/Three Star.png",
    off: "25%",
    ratnum: "(75)",
  },

  {
    id: "7",
    percentage: "28%",
    img: "/images/gammaxx.png",
    productName: "RGB liquid CPU Cooler",
    orginalPrice: "$130",
    discountPrice: "$160",
    ratingImg: "/images/Three Star.png",
    off: "25%",
    ratnum: "(75)",
  },

  {
    id: "8",
    percentage: "60%",
    img: "/images/BookShelf.png",
    productName: "Small BookSelf",
    orginalPrice: "$630",
    discountPrice: "$760",
    ratingImg: "/images/Four Half Star.png",
    off: "25%",
    ratnum: "(85)",
  },
];

cardData1.map((card) => {
  const conta = document.querySelector(".container");
  const childCard = document.createElement("div");

  childCard.innerHTML = `
    <div class="relative w-72 bg-slate-100 rounded-lg shadow-md p-4 m-2 flex flex-col">
      
      <!-- Discount Badge -->
      <span class="absolute top-2 left-2 text-white bg-red-500 rounded-sm px-2 py-1 text-xs">${card.off}</span>
      
      <!-- Product Image Container -->
      <div class="flex justify-center items-center h-40 mb-3">
        <img src="${card.img}" alt="Product" class="max-h-full object-contain" />
      </div>

      <!-- Like + Quick View Icons -->
      <div class="absolute top-2 right-2 flex flex-col items-center gap-2">
        <img src="/images/like.png" alt="Like" class="w-5 cursor-pointer" />
        <img src="/images/Quick View.png" alt="Quick View" class="w-5 cursor-pointer" />
      </div>

      <!-- Add to Cart Button -->
      <button class="w-full bg-black text-white p-2 mt-2 rounded hover:bg-gray-800 transition duration-300">
        Add to Cart
      </button>

      <!-- Product Name -->
      <p class="font-medium text-base leading-6 mt-3 text-center">${card.productName}</p>

      <!-- Price Section -->
      <div class="flex justify-center items-center gap-2 mt-1">
        <span class="text-red-500 font-medium">${card.orginalPrice}</span>
        <span class="line-through text-slate-500 font-medium">${card.discountPrice}</span>
      </div>

      <!-- Rating -->
      <div class="flex justify-center items-center gap-1 mt-2">
        <img src="${card.ratingImg}" alt="Rating" class="w-20 h-auto" />
        <p class="text-slate-500 font-semibold text-sm">${card.ratnum}</p>
      </div>
    </div>
  `;

  conta.appendChild(childCard);
});


// 3rd row
const cardData2 = [
  {
    id: "9",
    percentage: "40%",
    img: "/images/DogFood.png",
    productName: "Breed Dry Dog Food",
    orginalPrice: "$130",
    discountPrice: "$160",
    ratingImg: "/images/Five star.png",
    off: "15%",
    ratnum: "(100)",
  },
  {
    id: "10",
    percentage: "40%",
    img: "/images/Canon.png",
    productName: "CANON EOS DSLR Camera",
    orginalPrice: "$130",
    discountPrice: "$160",
    ratingImg: "/images/Three Star.png",
    off: "35%",
    ratnum: "(75)",
  },

  {
    id: "11",
    percentage: "28%",
    img: "/images/GamingLaptop.png",
    productName: "ASUS FHD Gaming Laptop",
    orginalPrice: "$130",
    discountPrice: "$160",
    ratingImg: "/images/Three Star.png",
    off: "55%",
    ratnum: "(75)",
  },

  {
    id: "12",
    percentage: "60%",
    img: "/images/Curology.png",
    productName: "Curology Product Set ",
    orginalPrice: "$630",
    discountPrice: "$760",
    ratingImg: "/images/Four Half Star.png",
    off: "25%",
    ratnum: "(85)",
  },
  {
    id: "13",
    percentage: "40%",
    img: "/images/CarToy.png",
    productName: "Kids Electric Car",
    orginalPrice: "$100",
    discountPrice: "$160",
    ratingImg: "/images/Five star.png",
    off: "65%",
    ratnum: "(100)",
  },
  {
    id: "14",
    percentage: "40%",
    img: "/images/Copa_Sense 1.png",
    productName: "Jr.Zoom Soccer Cleats",
    orginalPrice: "$130",
    discountPrice: "$260",
    ratingImg: "/images/Three Star.png",
    off: "75%",
    ratnum: "(75)",
  },

  {
    id: "15",
    percentage: "28%",
    img: "/images/GP11_PRD3 1.png",
    productName: "GP11 Shooter USB Gamepad",
    orginalPrice: "$230",
    discountPrice: "$350",
    ratingImg: "/images/Five star.png",
    off: "65%",
    ratnum: "(100)",
  },

  {
    id: "16",
    percentage: "60%",
    img: "/images/GreenJacket.png",
    productName: "Quilted Satin Jacket",
    orginalPrice: "$115",
    discountPrice: "$175",
    ratingImg: "/images/Four Half Star.png",
    off: "35%",
    ratnum: "(85)",
  },
];

for (i = 0; i < cardData2.length; i++) {
  console.log(cardData2[i].productName, cardData2[i].orginalPrice);
}

cardData2.map((card) => {
  const conta = document.querySelector(".Lcontainer");
  const childCard = document.createElement("div");

  childCard.innerHTML = `
    <div class="relative w-72 bg-slate-100 rounded-lg shadow-md p-4 m-2 flex flex-col">
      
      <!-- Discount Badge -->
      <span class="absolute top-2 left-2 text-white bg-red-500 rounded-sm px-2 py-1 text-xs">${card.off}</span>
      
      <!-- Product Image Container -->
      <div class="flex justify-center items-center h-40 mb-3">
        <img src="${card.img}" alt="Product" class="max-h-full object-contain" />
      </div>

      <!-- Like + Quick View Icons -->
      <div class="absolute top-2 right-2 flex flex-col items-center gap-2">
        <img src="/images/like.png" alt="Like" class="w-5 cursor-pointer" />
        <img src="/images/Quick View.png" alt="Quick View" class="w-5 cursor-pointer" />
      </div>

      <!-- Add to Cart Button -->
      <button class="Add_Cart w-full bg-black text-white p-2 mt-2 rounded hover:bg-gray-800 transition duration-300">
        Add to Cart
      </button>

      <!-- Product Name -->
      <p class="font-medium text-base leading-6 mt-3 text-center">${card.productName}</p>

      <!-- Price Section -->
      <div class="flex justify-center items-center gap-2 mt-1">
        <span class="text-red-500 font-medium">${card.orginalPrice}</span>
        <span class="line-through text-slate-500 font-medium">${card.discountPrice}</span>
      </div>

      <!-- Rating -->
      <div class="flex justify-center items-center gap-1 mt-2">
        <img src="${card.ratingImg}" alt="Rating" class="w-20 h-auto" />
        <p class="text-slate-500 font-semibold text-sm">${card.ratnum}</p>
      </div>
    </div>
  `;

  conta.appendChild(childCard);
});


// Function to add product to cart
function addToCart(index) {
  const productC = {
    img: cardData2[index].img,
    price: cardData2[index].orginalPrice,
  };
  let cartItems = localStorage.getItem("cart");
  cartItems = cartItems ? JSON.parse(cartItems) : [];
  cartItems.push(productC);
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

const Add = document.querySelectorAll(".Add_Cart");
Add.forEach((buttons, index) => {
  buttons.addEventListener("click", () => {
    addToCart(index);
  });
});
