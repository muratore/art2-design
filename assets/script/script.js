// Menu script
// "use strict";

let allPointers;

const portCover = [
  "1-gec-500px.jpg",
  "2-coopercon-0-500px.jpg",
  "CDL-livro_1.JPG",
  "move-500px.jpg",
  "sf-ed11-0.jpg",
  "frontstage-0.jpg",
  "Sabores-0.jpg",
  "liveup-0.jpg",
  "plenario-4.jpg",
  "inova-0.jpg",
  "sescap-0.jpeg",
  "ceara-0.jpg",
];
const body = document.querySelector("body");
const bodyWidth = body.getBoundingClientRect().width;
const menu = document.querySelectorAll("li a");
const targetMenu = document.querySelector(".bars i");
const header = document.querySelector(".portfolio--header");

menu.forEach((e) => {
  e.addEventListener("click", (el) => {
    el.preventDefault();
    const url = "https://www.instagram.com/art2designbr/";
    const id = el.target.getAttribute("href");
    console.log(id);
    if (el.target.parentNode.getAttribute("href")) {
      window.open(url, "_blank");
    } else if (id != url) {
      document.querySelector(id).scrollIntoView({ behavior: "smooth" });
    }

    if (bodyWidth < 769) {
      targetMenu.classList.remove("fa-times");
      targetMenu.classList.add("fa-bars");
      closeMenu();
    }
  });
});

document.querySelector(".logo").addEventListener("click", (e) => {
  document.querySelector("#start").scrollIntoView({ behavior: "smooth" });
});

// ********

// portfolio
const portfolio = document.querySelectorAll(".portfolio--jobs");
portfolio.forEach((e, i) => {
  e.style.backgroundImage = `url(assets/images/Covers/${portCover[i]})`;

  e.addEventListener("click", (el) => {
    const id = el.target.getAttribute("id");
    const classElement = `.${id}`;

    if (document.querySelector(".portfolio--wrap--box--job").hasChildNodes()) {
      curSlide = 0;
      const cleanPortfolio = document.querySelector(
        ".portfolio--wrap--box--job"
      );
      while (cleanPortfolio.firstChild) {
        cleanPortfolio.removeChild(cleanPortfolio.firstChild);
        document
          .querySelector(".pointer--box")
          .removeChild(document.querySelector(".pointer--box").firstChild);
      }
      document.querySelector(".portfolio--wrap").style.display = "flex";
    }
    switch (id) {
      case "gec":
        const gec = [
          "gec-1500.jpg",
          "gec2-1500.jpg",
          "gec3-1500.jpg",
          "gec4-1500.jpg",
        ];
        createElement(gec, id);
        break;
      case "coopercon":
        const coopercon = [
          "coopercon-0-1500px.jpg",
          "coopercon-1-1500px.jpg",
          "coopercon-2-1500px.jpg",
          "coopercon-3-1500px.jpg",
          "coopercon-4-1500px.jpg",
        ];
        createElement(coopercon, id);
        break;
      case "move":
        const move = [
          "move-1500px.jpg",
          "move-1-1500px.jpg",
          "move-2-1500px.jpg",
          "move-3-1500px.jpg",
        ];
        createElement(move, id);
        break;
      case "sf":
        const sf = [
          "sf-ed11-0.jpg",
          "sf-ed14-0.jpg",
          "sf-ed23-0.jpg",
          "sf-ed23-1.jpg",
          "sf-ed23-2.jpg",
          "sf-ed23-3.jpg",
        ];
        createElement(sf, id);
        break;
      case "cdl":
        const cdl = [
          "cdl-0-1500px.jpg",
          "cdl-1-1500px.jpg",
          "cdl-2-1500px.jpg",
          "cdl-3-1500px.jpg",
        ];
        createElement(cdl, id);
        break;
      case "frontstage":
        const frontstage = [
          "frontstage-0.jpg",
          "frontstage-1.jpg",
          "frontstage-2.jpg",
          "frontstage-3.jpg",
        ];
        createElement(frontstage, id);
        break;
      case "sabores":
        const sabores = [
          "Sabores-0.jpg",
          "Sabores-1.jpg",
          "Sabores-2.jpg",
          "Sabores-3.jpg",
          "Sabores-4.jpg",
          "Sabores-5.jpg",
          "Sabores-6.jpg",
        ];
        createElement(sabores, id);
        break;
      case "liveup":
        const liveup = [
          "liveup-0.jpg",
          "liveup-1.jpg",
          "liveup-2.jpg",
          "liveup-3.jpg",
        ];
        createElement(liveup, id);
        break;
      case "plenario":
        const plenario = [
          "plenario-0.jpg",
          "plenario-1.jpg",
          "plenario-2.jpg",
          "plenario-3.jpg",
          "plenario-4.jpg",
        ];
        createElement(plenario, id);
        break;
      case "inova":
        const inova = ["inova-0.jpg", "inova-1.jpg", "inova-2.jpg"];
        createElement(inova, id);
        break;
      case "sescap":
        const sescap = [
          "sescap-0.jpeg",
          "sescap-1.jpeg",
          "sescap-2.jpeg",
          "sescap-3.jpeg",
        ];
        createElement(sescap, id);
        break;
      case "ceara":
        const ceara = [
          "ceara-0.jpg",
          "ceara-1.jpg",
          "ceara-2.jpg",
          "ceara-3.jpg",
          "ceara-4.jpg",
          "ceara-5.jpg",
          "ceara-6.jpg",
          "ceara-7.jpg",
          "ceara-8.jpg",
        ];
        createElement(ceara, id);
        break;

      default:
        break;
    }

    document.querySelector(".portfolio--btn").style.display = "flex";
    document.querySelector(".modal").style.display = "inline-block";
    document.querySelector("#portfolio").scrollIntoView({ behavior: "smooth" });
    // header.style.display = "none";

    // create an element div and pass id as parameter
  });
});
function createElement(portName, id) {
  for (let index = 0; index < portName.length; index++) {
    const job = document.createElement("div");
    const pointer = document.createElement("div");

    job.classList.add("jobs");
    job.classList.add(id);

    pointer.classList.add("pointer");

    document.querySelector(".portfolio--wrap").style.display = "flex";
    document.querySelector(".portfolio--wrap--box--job").appendChild(job);
    document.querySelector(".pointer--box").appendChild(pointer);
  }
  const element = `.${id}`;
  document.querySelectorAll(element).forEach((e, i) => {
    e.style.backgroundImage = `url(assets/images/${id}/${portName[i]})`;
  });

  // pointers
  allPointers = document.querySelectorAll(".pointer");
  allPointers[0].classList.add("pointerActive");
}

const close = document
  .querySelector(".close")
  .addEventListener("click", (e) => {
    curSlide = 0;
    document.querySelector(".portfolio--wrap").style.display = "none";
    document.querySelector(".portfolio--btn").style.display = "none";
    document.querySelector(
      ".portfolio--wrap--box--job"
    ).style.transform = `translateX(0)`;
    document.querySelector(".modal").style.display = "none";
  });

// Close Portfolio slide
const btnRight = document.querySelector(".rightArrow");
const btnLeft = document.querySelector(".leftArrow");
const slides = document.querySelectorAll(".jobs");

let curSlide = 0;
let maxSlide = 0;

btnRight.addEventListener("click", (e) => {
  maxSlide = document.querySelectorAll(".jobs").length;
  nextSlide(curSlide);
});
btnLeft.addEventListener("click", (e) => {
  maxSlide = document.querySelectorAll(".jobs").length;
  prevSlide(curSlide);
});

const goToSlide = function (nSlide) {
  document.querySelector(
    ".portfolio--wrap--box--job"
  ).style.transform = `translateX(${nSlide * -100}vw)`;
};

const nextPointer = function (nPointer) {
  allPointers.forEach((e) => {
    e.classList.remove("pointerActive");
    e.addEventListener("click", (s, i) => {});
  });
  allPointers[nPointer].classList.add("pointerActive");
};

const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  nextPointer(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  nextPointer(curSlide);
  // activateDot(curSlide);
};

// MENU

targetMenu.addEventListener("click", (e) => {
  let mobileMenu = e.target.className.includes("fa-bars");
  closeOpenMenu(mobileMenu, e);
});

const closeOpenMenu = function (menuState, element) {
  if (menuState) {
    targetMenu.classList.remove("fa-bars");
    targetMenu.classList.add("fa-times");
    showMenu();
  } else {
    targetMenu.classList.remove("fa-times");
    targetMenu.classList.add("fa-bars");
    closeMenu();
  }
};

function showMenu() {
  document.querySelector(".menu.mobile ul").style.top =
    "0";
}
function closeMenu() {
  document.querySelector(".menu.mobile ul").style.top =
    "-400px";
}
