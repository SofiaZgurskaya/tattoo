const burgers = document.querySelectorAll(".burger--click"),
    overlay = document.querySelector(".overlay"),
    navItem = document.querySelectorAll(".nav__item");

burgers.forEach(burger => {
    burger.addEventListener("click", () => {
        overlay.classList.toggle("show");
         if (overlay.classList.contains("show")) {
            navItem.forEach(item => {
                item.addEventListener("click", () => {
                    overlay.classList.remove("show");
                });
            });
        }
    });
});

