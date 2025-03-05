const cart__button = document.getElementById("cart__button");
const cart__sidebar = document.querySelector(".buycart");
const close__sidebar = document.querySelector(".close__sidebar");
const gotoPay = document.querySelector(".pay__button");

cart__button.addEventListener("click", function(){
    cart__sidebar.classList.add("buycart--open")
})

close__sidebar.addEventListener("click", function(){
    cart__sidebar.classList.remove("buycart--open")
});

window.addEventListener("click", function(event){
if(event.target === cart__sidebar){
    cart__sidebar.classList.remove("buycart--open")
}
})

gotoPay.addEventListener("click", function(){
    window.location.href='pay.html';
})