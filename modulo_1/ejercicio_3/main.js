document.addEventListener("DOMContentLoaded", function(event) {
    document.querySelectorAll(".box").forEach(boxItem => {
        boxItem.addEventListener("click", resaltarActivo);
    });
});

function resaltarActivo() {
    const currentSelected = document.querySelector(".selected");
    
    if (currentSelected) {
        currentSelected.classList.remove("selected");
    }
    
    this.classList.add("selected");
}
