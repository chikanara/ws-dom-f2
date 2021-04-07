// console.log(document)
// var totalTag = document.getElementById("total")
// var total = Number(totalTag.innerHTML)
// console.log(totalTag)
// console.log(typeof(total))
// var totalTag = document.querySelector("#total")
// var total = Number(totalTag.innerHTML)
// console.log(totalTag)
// console.log(typeof(total))
// var btnsAddTag = document.getElementsByClassName("add")
// var btnsAddTag = document.querySelector(".add")
// console.log(btnsAddTag)
// var imgs = document.getElementsByTagName("img")
// console.log(imgs)
var btnsAddTag = document.getElementsByClassName("add");
var checkTags = document.querySelectorAll(".check");

for (var i = 0; i < btnsAddTag.length; i++) {
  btnsAddTag[i].addEventListener("click", addition);
}

for (var j = 0; j < checkTags.length; j++) {
  checkTags[j].onclick = totalPrice;
}
function addition(event) {
  var btnAdd = event.target;
  var tdElt = btnAdd.parentElement;
  var quantityTag = tdElt.querySelector(".quantity");
  var quantity = Number(quantityTag.value);
  quantity++;
  quantityTag.value = quantity;
  var trElt = btnAdd.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var unitPriceTag = trElt.querySelector(".unitPrice");
  var unitPrice = Number(unitPriceTag.innerHTML);
  price = unitPrice * quantity;
  priceTag.innerHTML = price;
}

function totalPrice(event) {
  console.log(event);
  var check = event.target;
  var totalTag = document.getElementById("total");
  var total = Number(totalTag.innerHTML);
  var trElt = check.parentElement.parentElement;
  var priceTag = trElt.querySelector(".price");
  var price = Number(priceTag.innerHTML);
  var btnAdd = trElt.querySelector(".add")
  var btnRemove = trElt.querySelector(".remove")
  if (check.checked) {
    total += price;
    btnAdd.setAttribute("disabled",true)
    btnRemove.setAttribute("disabled",true)
  }
  else{
      total-=price
      btnAdd.removeAttribute("disabled")
      btnRemove.removeAttribute("disabled")
  }
  totalTag.innerHTML = total;
}
