// Animation saisie de texte
let typed = new Typed(".auto-type", {
    strings: ["Développeur web."],
    typeSpeed: 60,
    startDelay: 2500
})

// Animation On Scroll
AOS.init();


// Navbar reveal
$('.navbar_icon').on('click', () => {
    $('.navbar ul').toggleClass('reveal');
    $('.navbar_icon').toggleClass('active');
})

$('.navbar ul li').on('click', () => {
    $('.navbar ul').removeClass('reveal');
    $('.navbar_icon').toggleClass('active');
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
