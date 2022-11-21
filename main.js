let div = document.getElementById('contact');
function contact() {
div.style.cssText = "display: flex;";
anime({
    targets: ".inner-contact",
    right: "0px",
    easing: 'linear',
    duration: '250',
    opacity: 1,
});
}


function con_close() {
div.style.cssText = "display: none;";
}
