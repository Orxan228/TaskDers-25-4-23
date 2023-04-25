const vitrine = document.querySelector(".vitrine___wrapper")
const favourite = document.querySelector(".offcanvas-body")
const addBtn = document.querySelector(".addBtn") 
const imgInp = document.getElementById("image")
const nameInp = document.getElementById("name")
const priceInp = document.getElementById("price")
const delBtn = document.querySelector(".delBtn") //doc classlist contains delBtn
const favBtn = document.querySelector(".favBtn") //doc classlist contains favBtn
let id = 0;
class Base {
    constructor()
    {
        this.id = id+1,
        this.isDeleted = false,
        this.createdAt = new Date,
        this.modifiedAt = new Date
    }
}
class Flower extends Base{
    constructor(image,name,price)
    {
        this.image = image,
        this.name = name,
        this.price = price
    }
}
addBtn.onclick = function(){
    image = imgInp.value
    name = nameInp.value
    price = priceInp.value 
    if (image.trim() == "" || name.trim() == "" || price.trim() == "") {
        alert("Please enter all characteristics of a flover")
        return false;
    }
    vitrine.innerHTML += `<div class="vitrine___wrapper___item">
    <div class="vitrine___wrapper___item--top">
        ${image}
    </div>
    <div class="vitrine___wrapper___item--bottom">
        <span class="item-name">${name}</span>
        <br>
        <span class="item-price">${price}</span><span class="item-priceAzn">AZN</span>
        <div class="vitrine___item--btns">
            <button class="btn delBtn">Delete</button>
            <button class="btn favBtn">Favourite</button>
        </div>
    </div>
</div>`
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("favBtn")) {
       favourite.innerHTML += `<div class="fav-item">
       <div class="fav-item-img-wrap"></div>
       <div class="fav-item-img">
           ${image}
       </div>
       <div class="fav-item-name">${name}</div>
       <div class="fav-item-price">${price}</div>
   </div>`
    }
})
// var FlowerInner = {
//     img : image,
//     Name : name,
//     Price : price
// }
// let string = JSON.stringify(FlowerInner)
// localStorage.setItem("FlowerLc", string)
// let flowerdb=JSON.parse(localStorage.getItem("FlowerInner"))
// console.log(flowerdb);
imgInp.value = ""
nameInp.value = "" 
priceInp.value = "" 
}
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delBtn")) {
        e.target.parentElement.parentElement.parentElement.remove();
    }
})
