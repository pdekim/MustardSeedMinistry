/* NavBar shows after scroll, credits go to https://stackoverflow.com/questions/23315031/
how-to-create-a-hidden-navbar-with-bootstrap-that-shows-after-you-scroll  */

window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementsByClassName("navbar").style.top = "0";
  } else {
    document.getElementsByClassName("navbar").style.top = "-50px";
  }
}
