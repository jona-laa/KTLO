// Toggle mobile menu
$('#main-menu-toggle').click(function () {
  $('.main-menu ul').slideToggle(300, function () {
  });
});

window.onscroll = function () {
  hideMainMenu();
  hideToTopBtn();
}

// Hide Header on on scroll down
var prevScrollpos = window.pageYOffset;
const hideMainMenu = () => {
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

// Hide "go to top button" if scrolled down more than window height
const hideToTopBtn = () => {
  window.pageYOffset > window.screen.height ?
    document.getElementById("goTop").style.bottom = "10px"
    :
    document.getElementById("goTop").style.bottom = "-50px";
}
