// Toggle mobile menu
$('#main-menu-toggle').click(function () {
  $('.main-menu ul').slideToggle(300, function () {
  });
});



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
