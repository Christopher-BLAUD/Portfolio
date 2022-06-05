// Animation saisie de texte
let typed = new Typed(".auto-type", {
    strings: ["Développeur web."],
    typeSpeed: 60,
    startDelay: 1000
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
    $('.navbar ul').removeClass('reveal');
    $('.navbar_icon').removeClass('active')
})

// Scroll top
$(window).on('scroll', () => {
    $('.scroll-top').toggleClass('active', window.scrollY > 500)
})

$('.scroll-top').on('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});