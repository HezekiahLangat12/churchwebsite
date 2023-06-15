/*
const eventList = document.querySelector('#event-list');

const events = [
  { name: 'Easter Celebration', date: 'April 20, 2023' },
  { name: 'Vacation Bible School', date: 'July 10-14, 2023' },
  { name: 'Fall Festival', date: 'October
*/

const gallery = document.querySelectorAll(".gallery img");
const modal = document.querySelector(".enlarge");
const modalImg = document.querySelector(".enlarge img");
const close = document.querySelector(".enlarge p");

gallery.forEach(function (img) {
  img.addEventListener("click", function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  });
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

/*slider*/
const slides = document.querySelectorAll(".slideshow");
let currentSlide = 0;

function nextSlide() {
  slides[currentSlide].removeAttribute("id");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].setAttribute("id", "target");
}

setInterval(nextSlide, 3000);

/* images slide*/
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};
const imgContainer = document.querySelector(".images");
const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;
    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });
    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;
createImage("img/A.I.C KWA MICHAEL.png")
  .then((img) => {
    currentImg = img;
    console.log("Image 1 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
    return createImage("img/IMG_20221218_124549_868.jpg");
  })
  .then((img) => {
    currentImg = img;
    console.log("Image 2 loaded");
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = "none";
  })
  .catch((err) => console.error(err));
