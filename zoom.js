function zoom() {
    var images = document.querySelectorAll("img");

    images.forEach(image => {
        image.addEventListener("click", () => {
            if (image.classList.contains("img-zoom-in")) {
                image.classList.add("img-zoom-out");
                image.classList.remove("img-zoom-in");
            } else {
                if(image.classList.contains("img-zoom-out")) {
                    image.classList.remove("img-zoom-out");
                }
                image.classList.add("img-zoom-in");
            }
        });
    });
}
