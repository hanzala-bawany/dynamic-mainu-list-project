let foodItemsName = [
    {
        FIname: "Kashmiri kerhai",
        FIprice: 699,
        FIimg: "./assets/kerhai lunch.webp",
        type: "lunch",
        id: "Kkerhai"
    },
    {
        FIname: "Zinger burger",
        FIprice: 399,
        FIimg: "./assets//burger lunch.jpg",
        type: "lunch",
        id: "Zburger"
    },
    {
        FIname: "Halwa puri",
        FIprice: 200,
        FIimg: "./assets/halwa puri bf.jpg",
        type: "bf",
        id: "Hpuri"
    },
    {
        FIname: "bana shake",
        FIprice: 120,
        FIimg: "./assets/bana shake.jpg",
        type: "shakes",
        id: "banaShake"
    },
    {
        FIname: "Chicken tikka",
        FIprice: 350,
        FIimg: "./assets/tikka lunch.jpg",
        type: "lunch",
        id: "Ctikka"
    },
    {
        FIname: "Cold drink",
        FIprice: 80,
        FIimg: "./assets/cold drinks.jpg",
        type: "shakes",
        id: "Cdrinks"
    },
    {
        FIname: "Malai doodh",
        FIprice: 180,
        FIimg: "./assets/malai doodh bf.jpg",
        type: "bf",
        id: "Mdoodh"
    },
    {
        FIname: "Mango Shake",
        FIprice: 120,
        FIimg: "./assets/mango shake.jpg",
        type: "shakes",
        id: "mangoShake"
    },
    {
        FIname: "Bawany Nalli biryani",
        FIprice: 260,
        FIimg: "./assets/nalli biryani lunch.webp",
        type: "lunch",
        id: "bnBiryani"
    },
    {
        FIname: "Anda paratha",
        FIprice: 90,
        FIimg: "./assets/anda paratha bf.jpg",
        type: "bf",
        id: "Aparatha"
    },
    ,
    {
        FIname: "Apple shake",
        FIprice: 120,
        FIimg: "./assets/apple shake.jpg",
        type: "shakes",
        id: "aShake"
    },
    {
        FIname: "Hedrabadi qorma",
        FIprice: 699,
        FIimg: "./assets/beef qorma lunch.jpg",
        type: "lunch",
        id: "hQorma"
    },
    {
        FIname: "Paye channe",
        FIprice: 150,
        FIimg: "./assets/paye chane bf._2",
        type: "bf",
        id: "pChanne"
    },
    {
        FIname: "Club sedwitch",
        FIprice: 400,
        FIimg: "./assets/club sendwitch bf.jpg",
        type: "bf",
        id: "cSendwitch"
    },
    {
        FIname: "Strawberry shake",
        FIprice: 180,
        FIimg: "./assets/strawberyy shake.jpg",
        type: "shakes",
        id: "strawberryShake"
    }
];

let all = document.body.querySelector(".aLL");
let breakFast = document.body.querySelector(".breakFast");
let Lunch = document.body.querySelector(".Lunch");
let Shakes = document.body.querySelector(".Shakes");

all.classList.add("onActivePage")

let foodItmesContainer = document.createElement("section");
foodItmesContainer.id = "foodItmesList";
document.body.querySelector("#main").append(foodItmesContainer);


foodItemsName.forEach(function ({ FIname, FIprice, FIimg, type, id }) {

    let foodItem = document.createElement("div")
    foodItem.classList.add("fItem");
    foodItem.setAttribute("id", id);

    foodItem.innerHTML = `<img class="fItmeInfoImg" src="${FIimg}" alt="kerhai">
<div class="fItmeInfo">
    <div class="fItemNamePrice">
        <span class="name">${FIname}</span>
        <span style = "color : blue">
          <span class="price">${FIprice}</span> RS
        </span>
    </div>
    <div class="fItemLine"></div>
    <div class="fItemPara">
        This is ${FIname} Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatem
        architecto eum dolor commodi debitis qui.
    </div>
    <div onclick="select_btn(this)" class="select_btn">Select</div>
</div>`
    // foodItem.querySelector(".select_btn").setAttribute("onclick", `${id}()`);

    foodItmesContainer.append(foodItem)
    console.log(foodItem);

});


//  all btn

function all_Btn() {

    all.classList.add("onActivePage");
    breakFast.classList.remove("onActivePage");
    Shakes.classList.remove("onActivePage");
    Lunch.classList.remove("onActivePage");

    foodItmesContainer.innerHTML = "";

    foodItemsName.forEach(function ({ FIname, FIprice, FIimg, type, id }) {

        let foodItem = document.createElement("div")
        foodItem.classList.add("fItem");
        foodItem.setAttribute("id", id);

        foodItem.innerHTML = `<img class="fItmeInfoImg" src="${FIimg}" alt="kerhai">
    <div class="fItmeInfo">
        <div class="fItemNamePrice">
            <span class="name">${FIname}</span>
            <span style = "color : blue">
              <span class="price">${FIprice}</span> RS
            </span>
        </div>
        <div class="fItemLine"></div>
        <div class="fItemPara">
            This is ${FIname} Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatem
            architecto eum dolor commodi debitis qui.
        </div>
        <div onclick="select_btn(this)" class="select_btn">Select</div>
    </div>`
        foodItem.querySelector(".select_btn").setAttribute("onclick", `${id}()`);

        console.log(foodItem, "all log");

        foodItmesContainer.append(foodItem);
    });

}


//  break fast btn

function bf_Btn() {

    all.classList.remove("onActivePage");
    breakFast.classList.add("onActivePage");
    Shakes.classList.remove("onActivePage");
    Lunch.classList.remove("onActivePage");

    foodItmesContainer.innerHTML = "";

    let bfArray = foodItemsName.filter(function (items) {
        if (items.type == "bf") return items
    })
    bfArray.forEach(function ({ FIname, FIprice, FIimg, type, id }) {
        // if (type == "bf") {

        let foodItem = document.createElement("div")
        foodItem.classList.add("fItem");
        foodItem.setAttribute("id", id);

        foodItem.innerHTML = `<img class="fItmeInfoImg" src="${FIimg}" alt="kerhai">
    <div class="fItmeInfo">
        <div class="fItemNamePrice">
            <span class="name">${FIname}</span>
            <span style = "color : blue">
              <span class="price">${FIprice}</span> RS
            </span>
        </div>
        <div class="fItemLine"></div>
        <div class="fItemPara">
            This is ${FIname} Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatem
            architecto eum dolor commodi debitis qui.
        </div>
        <div onclick="select_btn(this)" class="select_btn">Select</div>
    </div>`
        // foodItem.querySelector(".select_btn").setAttribute("onclick", `${id}()`);

        foodItmesContainer.append(foodItem);
        console.log(foodItem, "bf log");
        // }

    });

}

//  lunch btn

function lunch_Btn() {

    all.classList.remove("onActivePage");
    breakFast.classList.remove("onActivePage");
    Shakes.classList.remove("onActivePage");
    Lunch.classList.add("onActivePage");

    foodItmesContainer.innerHTML = "";

    foodItemsName.forEach(function ({ FIname, FIprice, FIimg, type, id }) {
        if (type == "lunch") {

            let foodItem = document.createElement("div")
            foodItem.classList.add("fItem");
            foodItem.setAttribute("id", id);

            foodItem.innerHTML = `<img class="fItmeInfoImg" src="${FIimg}" alt="kerhai">
    <div class="fItmeInfo">
        <div class="fItemNamePrice">
            <span class="name">${FIname}</span>
            <span style = "color : blue">
              <span class="price">${FIprice}</span> RS
            </span>
        </div>
        <div class="fItemLine"></div>
        <div class="fItemPara">
            This is ${FIname} Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatem
            architecto eum dolor commodi debitis qui.
        </div>
        <div onclick="select_btn(this)" class="select_btn">Select</div>
    </div>`
            // foodItem.querySelector(".select_btn").setAttribute("onclick", `${id}()`);

            foodItmesContainer.append(foodItem);
            console.log(foodItem, "lunch log");
        }

    });

}


//  shakes btn

function shakes_Btn() {

    all.classList.remove("onActivePage");
    breakFast.classList.remove("onActivePage");
    Shakes.classList.add("onActivePage");
    Lunch.classList.remove("onActivePage");

    foodItmesContainer.innerHTML = "";

    foodItemsName.forEach(function ({ FIname, FIprice, FIimg, type, id }) {
        if (type == "shakes") {

            let foodItem = document.createElement("div")
            foodItem.classList.add("fItem");
            foodItem.setAttribute("id", id);

            foodItem.innerHTML = `<img class="fItmeInfoImg" src="${FIimg}" alt="kerhai">
    <div class="fItmeInfo">
        <div class="fItemNamePrice">
            <span class="name">${FIname}</span>
            <span style = "color : blue">
               <span class="price">${FIprice}</span> RS
            </span>
        </div>
        <div class="fItemLine"></div>
        <div class="fItemPara">
            This is ${FIname} Lorem ipsum, dolor sit amet consectetur adipisicing elit. In voluptatem
            architecto eum dolor commodi debitis qui.
        </div>
        <div onclick="select_btn(this)" class="select_btn">Select</div>
    </div>`
            // foodItem.querySelector(".select_btn").setAttribute("onclick", `${id}()`);


            foodItmesContainer.append(foodItem);
            console.log(foodItem, "shakes log");
        }

    });

}


// start purchase functinality

let purchasePopup = document.body.querySelector("#selectedItemsContainer");
let closeBtn = document.body.querySelector(".closeImgContainer");
let totalContainer = document.body.querySelector(".totalContainer");
let itemPriceDiv;
let selectedImgKeBaapKaBaap = document.body.querySelector("#IPCkaParent");
let popupClose = true;
let itemName;
let itemPrice;
let totalPrice = 0;
let totalPriceLocation = document.body.querySelector(".tPrice");
let discountValue;



purchasePopup.classList.toggle("gayeb");



// select_btn 
function select_btn(btn) {

    itemName = btn.parentElement.querySelector(".name").innerHTML;
    itemPrice = Number(btn.parentElement.querySelector(".price").innerHTML);


    if (popupClose) {
        purchasePopup.classList.toggle("gayeb");
    }
    popupClose = false;

    itemPriceDiv = document.createElement("div");
    itemPriceDiv.classList.add("itemPriceContainer");
    itemPriceDiv.innerHTML = `  <div class="itemName">${itemName}</div>
    :
    <div class="itemPrice">${itemPrice} RS</div>`
    selectedImgKeBaapKaBaap.prepend(itemPriceDiv);

    totalPrice = totalPrice + itemPrice;
    totalPriceLocation.innerHTML = totalPrice;
}


//  purchase btn
function purchase() {

    discountValue = (totalPrice * 15) / 100;
    let a = Math.round(totalPrice - discountValue);
    alert(`Your total purchasing  price is : ${totalPrice} RS
--> After 15% discount you have to give :
--> ${a} RS`);

    popupClose = true;
    purchasePopup.classList.toggle("gayeb");
    selectedImgKeBaapKaBaap.innerHTML = "";
    totalPrice = 0;
    totalPriceLocation.innerHTML = "00";

}


//  close popup button
closeBtn.addEventListener("click", function () {

    popupClose = true;
    purchasePopup.classList.toggle("gayeb");
    selectedImgKeBaapKaBaap.innerHTML = "";
    totalPrice = 0;
    totalPriceLocation.innerHTML = "00";

});







