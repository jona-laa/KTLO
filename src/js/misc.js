// Make "Back To Top"-button scroll to the top
const toTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // Chrome, Firefox, IE and Opera
}

// On form send click
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
