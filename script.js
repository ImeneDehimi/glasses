let shopItems = document.querySelector("#items");
let shoping = document.querySelector(".shopping-cart");
let total = document.querySelector(".total");
let quantity = document.querySelector("#quantity");
let articles = document.querySelector(".articles")
let num = document.querySelector("#num")

function like(clickedIcon){
        clickedIcon.classList.toggle('clicked2');
}
function show(){
        const sidenav = document.querySelector(".shopping-cart")
        sidenav.style.display = "flex"
}
function hide(){
        const sidenav = document.querySelector(".shopping-cart")
        sidenav.style.display = "none"
}



let products = [
  {
    id: 1,
    name: "Glasses 1",
    price: 60,
    img: "pic1.jpg",
  },
  {
    id: 2,
    name: "Glasses 2",
    price: 60,
    img: "pic2.jpg",
  },
  {
    id: 3,
    name: "Glasses 3",
    price: 60,
    img: "pic3.jpg",
  },
  {
    id: 4,
    name: "Glasses 4",
    price: 60,
    img: "pic4.jpg",
  },
  {
    id: 5,
    name: "Glasses 5",
    price: 60,
    img: "pic5.jpg",
  },
  {
    id: 6,
    name: "Glasses 6",
    price: 60,
    img: "pic6.jpg",
  },
  {
    id: 7,
    name: "Glasses 7",
    price: 60,
    img: "pic7.jpg",
  },
  {
    id: 8,
    name: "Glasses 8",
    price: 60,
    img: "pic8.jpg",
  },
  {
    id: 9,
    name: "Glasses 9",
    price: 60,
    img: "pic9.jpg",
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.innerHTML = `
    <div class="article">
    <img src="/src/${value.img}" alt="">
    <div class="price">
    <h3>${value.name}</h3>
    <h3>60$</h3>
    <i onclick="addToCard(${key})" class='bx bxs-cart-add' style='color:#d4a59c' ></i>
    <i id="heart" onclick="like(this)" class='bx bxs-heart clicked'   ></i>
    </div>
</div>
    `;
    articles.appendChild(newDiv);
  });
}

initApp();
function addToCard(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCard();
}
function reloadCard() {
  shopItems.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `
        <div id = product-id-${value.id} class="item">
            <div class="info">
                <p>${value.name}</p>
                <p>${value.price.toLocaleString()}</p>
                        <div class="quantity">
                            <span onclick="changeQuantity(${key}, ${value.quantity - 1})" class="minus">-</span>
                            <span id="quantity">${value.quantity}</span>
                            <span onclick="changeQuantity(${key}, ${value.quantity + 1})" class="plus">+</span>
                            </div>
                    </div>
                    <img src="src/${value.img}" alt="" />
                </div>
    `;
    shopItems.appendChild(newDiv)
    }
  });
  total.innerHTML = "Total price :  " + totalPrice.toLocaleString();
  quantity.innerHTML = count ;
}

function changeQuantity(key, quantity) {
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity
        listCards[key].price = quantity * products[key].price
    }
    reloadCard();
}
