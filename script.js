const playButton = document.querySelector(".play-button");
const videoPopup = document.getElementById("video-popup");
const videoIframe = document.getElementById("video-iframe");

playButton.addEventListener("click", function () {
  videoPopup.style.display = "block";
  videoIframe.src = "img/selfintroduction.mp4";
});

videoPopup.addEventListener("click", function () {
  videoPopup.style.display = "none";
  videoIframe.src = "";
});

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("homePageButton");
  var container = document.getElementById("ABoutMePageContainer");

  button.addEventListener("click", function () {
    container.scrollIntoView({ behavior: "smooth" });
  });
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var scrolled = document.documentElement.scrollTop;
  var logoImg = document.getElementById("navbar-logo");

  if (scrolled > 0) {
    navbar.classList.add("navbar-scrolled");
    logoImg.src = "./img/Mr.KO Whiteicon.png";
  } else {
    navbar.classList.remove("navbar-scrolled");
    logoImg.src = "./img/Mr.KO Black icon.png";
  }
});

$(".carousel").carousel();

function playVideo() {
  var video = document.getElementById("guppyvideo");
  video.play();
}
