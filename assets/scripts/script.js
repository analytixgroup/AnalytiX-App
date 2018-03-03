$(document).ready(function() {
    var backgrounds = [
        'bg-main1.jpg',
        'bg-main2.jpg',
        'bg-main3.jpg',
        'bg-main4.jpg'
    ]

    $('.section-main').css({
        'background-image': 'url(assets/img/' + backgrounds [Math.floor(Math.random()  * (4 - 0) + 0)] + ')'
    });

    setInterval(function () {
        $('.line img').addClass('-rotate');
        setInterval(function () {
            $('.line img').removeClass('-rotate');
        }, 3500);
        return
    }, 100);
});