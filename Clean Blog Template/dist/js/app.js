window.onscroll = () => {
  stickyFunction();
};

const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;

const stickyFunction = () => {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  }
};
