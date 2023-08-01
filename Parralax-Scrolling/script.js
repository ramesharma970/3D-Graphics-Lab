let element = document.getElementById("wrapper");
let parallaxStart = $(element).offset().top;
let parallaxEnd = parallaxStart + 5 * ($(window).height() * 0.65) * 0.5;
parallaxHeight = parallaxEnd - parallaxStart;
$("#parallax-demo").height(parallaxHeight);
window.addEventListener("scroll", (e) => {
  let scrollPosition = window.scrollY;

  console.log({ parallaxStart, parallaxEnd });

  if (scrollPosition > parallaxStart && scrollPosition < parallaxEnd) {
    element.classList.add("fixed-mode");
  } else {
    element.classList.remove("fixed-mode");
  }
});

// window.addEventListener("scroll", (e) => {
//   let scrollPosition = window.scrollY;
//   var second = document.getElementById("wrapper");
//   if (scrollPosition > 450 && scrollPosition < 1450) {
//     second.classList.add("fixed-mode");
//   } else {
//     second.classList.remove("fixed-mode");
//   }
// });

var s = skrollr.init({
  render: function (data) {
    //Log the current scroll position.
    $("#info").text(data.curTop);
  },
});
