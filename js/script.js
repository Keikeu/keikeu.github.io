const counts = document.getElementsByClassName("count__item");
const slide = document.getElementsByClassName("slide")[0];
const details = document.getElementsByClassName("details__item");
let current = 0;
let locked = false; // lock on-scroll event if animation is still in progress

for (let i = 0; i < counts.length; i++) {
  counts[i].addEventListener("click", () => {
    changeSlide(i);
  });
}

window.addEventListener("wheel", MouseWheelHandler);
window.addEventListener("mousewheel", MouseWheelHandler);
window.addEventListener("DOMMouseScroll", MouseWheelHandler);

function MouseWheelHandler(e) {
  if (locked) {
    return false;
  }

  locked = true;

  if (e.deltaX < 0 || e.deltaY > 0) {
    current = current + 1 < 5 ? ++current : (current = 0);
    changeSlide(current);
  } else if (e.deltaX > 0 || e.deltaY < 0) {
    current = current - 1 >= 0 ? --current : (current = 4);
    changeSlide(current);
  }

  return false;
}

function changeSlide(i) {
  animateSlide();
  current = i;

  for (let k = 0; k < details.length; k++) {
    details[k].classList.remove("details__item--active");
  }
  for (let k = 0; k < counts.length; k++) {
    counts[k].classList.remove("count__item--active");
  }

  switch (current) {
    case 0:
      document.getElementsByClassName("site-link")[0].setAttribute("href", "https://cookyourgoose.eu");
      break;
    case 1:
      document.getElementsByClassName("site-link")[0].setAttribute("href", "https://keikeu.github.io/Hoporo/");
      break;
    case 2:
      document.getElementsByClassName("site-link")[0].setAttribute("href", "https://keikeu.github.io/Pegs/");
      break;
    case 3:
      document.getElementsByClassName("site-link")[0].setAttribute("href", "https://keikeu.github.io/Nibble/");
      break;
    case 4:
      document.getElementsByClassName("site-link")[0].setAttribute("href", "https://keikeu.github.io/bubble-sort/");
      break;
    default:
      document.getElementsByClassName("site-link")[0].setAttribute("href", "#");
  }

  setTimeout(function () {
    counts[current].classList.add("count__item--active");
    slide.style.backgroundImage = "url('img/0" + (current + 1) + ".jpg')";
  }, 500);

  setTimeout(function () {
    details[current].classList.add("details__item--active");
  }, 600);
}

function animateSlide() {
  const slideOverlay1 = document.getElementsByClassName("slide-overlay")[0];
  const slideOverlay2 = document.getElementsByClassName("slide-overlay")[1];

  slideOverlay1.classList.add("open");

  setTimeout(function () {
    slideOverlay2.classList.add("open");
  }, 300);

  setTimeout(function () {
    slideOverlay1.classList.remove("open");
    slideOverlay2.classList.remove("open");
    locked = false;
  }, 1300);
}
