window.onscroll = function () {
    scrollUpdate();
    navbar();
};

function scrollUpdate() {
    let box = document.getElementById("myJS");
    box.style.opacity = Math.max(1.3 - window.pageYOffset/100, 0);
    box.style.transform = "translate(0px, " + window.pageYOffset + "px)";
}