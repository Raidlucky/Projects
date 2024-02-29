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

function dismissWarning() {
    document.querySelector('.warning').style.display = "none";
    anime({
        targets: '.warning',
        opacity: [1, 0],
        easing: 'easeInOutQuad',
        duration: 500
    });
    document.querySelector('nav').style.marginTop = "0";
}

(function(){
    var f = function() {
        links = ['https://banz.dev', 'https://raidlucky.github.io/Atomics/pages/periodic.html', 'https://nutrition-website.herokuapp.com/index.html', 'https://premiertwi.com'];
        titles = ['BanZ Development', 'Atomic Tables', 'IronGrape', 'Premier Transportation'];
        desc = ['I created this website for the team I work with, We plan on making tools and webapps for work, entertainment, and everyday life.', 'This Website is for looking at Periodic Elements, and any extra info about them like their mass, symbol, and any other facts.', 'This Website is for finding a diet plan and learning about nutritional information. By far my biggest project, and currently its not finished yet.', 'Since 1989, Premier Transportation and Warehousing, Inc. has been one of the most respected companies in the specialized carrier industry.'];
        repo = ['https://github.com/Raidlucky/Banz-Website', 'https://github.com/Raidlucky/Atomics', 'https://github.com/BanZ-Development/Irongrape', 'empty'];
        for (i=0; i < 4;i++) {
            let slide = document.querySelectorAll('.slide')[i].style.display;
            if (slide === 'block') {
                curr = i;
                document.querySelectorAll('.slide')[i].style.display = 'none';
            }
        }
        if (curr === 3) {curr = -1;}
        anime({targets: ".slide",opacity: [1, 0],duration: 500,easing: 'linear'});
        document.querySelectorAll('.slide')[curr+1].style.display = 'block';
        document.getElementById('link').setAttribute('href', links[curr+1]);
        document.getElementById('title').innerHTML = titles[curr+1];
        document.getElementById('desc').innerHTML = desc[curr+1];
        document.getElementById('repo').setAttribute('href', repo[curr+1]);
        anime({targets: ".slide",opacity: [0, 1],duration: 500,easing: 'linear'});
        document.querySelector('.progressIn').style.width = '0%';
        anime({targets: '.progressIn',duration: '15000',width: ['0%', '100%'],easing: 'linear'});
    };
    window.setInterval(f, 15000);
    f();
})();