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
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
    $('.main-menu ul').css('display', 'none')
  } else {
    document.getElementById("navbar").style.top = "-125px";
    $('.main-menu ul').css('display', 'none')
  }
  prevScrollpos = currentScrollPos;
}


const sendClick = (e) => {
    e.preventDefault();
    alert('This just a dummy site, Bud. Have a nice day! :)');
}

//Smooth scrolling
$('#navbar a, .btn').on('click', function (e) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top - 100,
        },
            800
        );
    }
});
