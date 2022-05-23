window.onscroll = function () {
    scrollUpdate();
    navbar();
};

function scrollUpdate() {
    let box = document.getElementById("caption-box");
    box.style.opacity = Math.max(1.3 - window.pageYOffset/100, 0);
    box.style.transform = "translate(0px, " + window.pageYOffset + "px)";
}

function navbar() {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky");
      }
}