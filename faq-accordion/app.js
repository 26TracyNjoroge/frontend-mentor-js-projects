const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
    accordion.addEventListener("click", (e) => {
        accordion.classList.toggle('active');
    })
})

