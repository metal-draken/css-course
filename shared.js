// alert("this works!");
var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalNoButton = document.querySelector(".modal__action--negative");
var selectPlanButtons = document.querySelectorAll(".plan button");
var toggleButton = document.querySelector(".toggle-button")
var mobileNav = document.querySelector(".mobile-nav")
var ctaButton = document.querySelector(".main-nav_item-cta")


console.dir(backdrop);

// for (inicio; condición para repetir; operación de incremento (en qué elementos dentro del rango aplicarán))
for (var i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener("click", function() {
        // modal.style.display = "block";
        // backdrop.style.display = "block";
        // modal.className = "open"; (This would overwrite the entire class)
        modal.classList.add("open");
        backdrop.style.display = "block";
        backdrop.classList.add("open");
    });
}

backdrop.addEventListener("click", function() {
    // mobileNav.style.display="none";
    mobileNav.classList.remove("open")
    closeModal();
})

if (modalNoButton) {
    modalNoButton.addEventListener("click", closeModal)
}


function closeModal() {
    // backdrop.style.display = "none";
    // modal.style.display = "none";
    if (modal) {
    modal.classList.remove("open")
}
    backdrop.classList.remove("open");
    setTimeout(function() {
        backdrop.style.display = "none";
        }, 200);
  }

toggleButton.addEventListener("click", function() { 
    // mobileNav.style.display="block";
    // backdrop.style.display="block";
    mobileNav.classList.add("open");
    backdrop.style.display = "block";
    setTimeout(function() {
    backdrop.classList.add("open");
    }, 10);
});

ctaButton.addEventListener("animationstart", function(event) {
    console.log("Animation started", event);
})

ctaButton.addEventListener("animationend", function(event) {
    console.log("Animation ended", event);
})

ctaButton.addEventListener("animationiteration", function(event) {
    console.log("Animation iteration", event);
})