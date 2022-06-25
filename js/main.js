// Animation saisie de texte
let typed = new Typed(".auto-type", {
    strings: ["Bonjour, ^1000  je suis Christopher BLAUD ^1000 Développeur Web."],
    typeSpeed: 60,
    startDelay: 1000
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
    if($('.scroll-top').hasClass('active')){
        $('.scroll-top').removeAttr('aria-hidden')
    } else{
        $('.scroll-top').attr('aria-hidden', "true")
    }
})

$('.scroll-top').on('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});
