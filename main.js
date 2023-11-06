function Open() {
    document.querySelector('.pop').style.display = "flex";
    anime({
        targets: '.pop',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 500
    });
}

function Close() {
    document.querySelector('.pop').style.display = "none";
}

anime({
    targets: '.main-contentText',
    translateX: [-250, 0],
    opacity: [0, 1],
    easing: 'spring(1, 80, 10, 0)',
    duration: 200
})