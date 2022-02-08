function clickme() {
    var cont = document.querySelector(".click-me");
    
    if (cont.classList.contains("click-in")) {
        cont.classList.remove("click-in")
        cont.classList.add("click-out")

    }
    else {
        if (cont.classList.contains("click-out")) {
            cont.classList.remove("click-out");
        }
        cont.classList.add("click-in")
    }

}