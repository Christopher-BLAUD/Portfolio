// Animation saisie de texte
let typed = new Typed(".auto-type", {
    strings: ["Développeur web."],
    typeSpeed: 40
})

// Animation On Scroll
AOS.init();

// Carousel
let splide = new Splide('.splide');
splide.mount();

// Navbar reveal
$('.navbar_icon').on('click',() => {
    $('.navbar ul').toggleClass('reveal');
    $('.navbar_icon').toggleClass('active');

})

$('.navbar ul li').on('click', () => {
    $('.navbar ul').removeClass('reveal')
})