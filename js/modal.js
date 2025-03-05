const openmodal = document.querySelectorAll(".show__modal");
const modal = document.querySelector(".modal");
const closemodal = document.querySelector(".close__modal");


for (let i = 0; i < openmodal.length; i++) {
    openmodal[i].addEventListener("click", function(){
        modal.style.display = "flex";
    })
}

closemodal.addEventListener("click", function(){
    modal.style.display = "none";
})

window.addEventListener("click", function(){
    if(event.target === modal){
        modal.style.display = "none"
    }
})