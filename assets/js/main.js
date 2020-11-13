const navbar = function (e) {
  const portfolio = document.querySelector("section.portfolio");
  const navbarScroll = document.querySelector(".navscroll");
  if (portfolio.scrollHeight < window.scrollY) {
    navbarScroll.classList.add("active");
  } else {
    navbarScroll.classList.remove("active");
  }
  console.log({ nav: window.scrollY, portfolio: portfolio.scrollHeight });
};

(function () {
  window.addEventListener("scroll", navbar);
})();
