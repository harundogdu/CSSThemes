window.onscroll = function () {
  stickyFunction();
};

var header = document.getElementById('header');
var sticky = header.offsetTop;

function stickyFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
