// Toggle mobile menu
$('#main-menu-toggle').click(function () {
    $('.main-menu ul').slideToggle(300, function () {
    });
});

// Make "Back To Top"-button scroll to the top
const toTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

// Hide Header on on scroll down
let didScroll;
let lastScrollTop = 0;
const delta = 5;
const navbarHeight = $('.navbar').outerHeight();

$(window).scroll((event) => {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

const hasScrolled = () => {
    const st = $(this).scrollTop();
    document.querySelector('#menu-main-menu') ? document.querySelector('#menu-main-menu').style.display = 'none' : null

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If scroll down past the navbar, add class .nav-up.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.navbar').removeClass('nav-down').addClass('nav-up');
        $('.main-menu ul').css('display', 'none')
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.navbar').removeClass('nav-up').addClass('nav-down');
            $('.main-menu ul').css('display', 'none')
        }
    }

    lastScrollTop = st;
}

const sendClick = (e) => {
    e.preventDefault();
    alert('This just a dummy site, Bud. Have a nice day! :)');
}