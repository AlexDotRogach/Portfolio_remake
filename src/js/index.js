window.addEventListener("load", () => {
  const body = document.querySelector("body"),
    html = document.querySelector("html");

  body.style.cssText = `
        background: none;
        height: auto;
        width: auto;
    `;

  html.style.cssText = `
        height: auto;
        width: auto;
        overflow-y: scroll;
        overflow-x: auto;
    `;

  document.querySelector(".loader").style.display = "none";

  const menu = require("./menu").default;
  const animInfo = require("./animation-info").default;
  const animTools = require("./anim-tools").default;
  const portfolioCheck = require("./portfoliCheck").default;
  const price = require("./price").default;
  const request = require("./request").default;
  const language = require("./language").default;

  menu();
  animInfo();
  animTools();
  portfolioCheck();
  price();
  request();
  language();

  // scroll top
  let topBtn = document.querySelector(".footer__wrapper-btn");
  let start = document.querySelector(".start");

  topBtn.addEventListener("click", (e) => {
    e.preventDefault();
    start.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });

  // load good back image on the start page
  const startElement = document.querySelector(".start");

  document.addEventListener("scroll", loadGoodPageStart);

  function loadGoodPageStart(e) {
    if (e.target.scrollingElement.scrollTop > startElement.clientHeight) {
      startElement.style.background =
        'url("img/startBack.png") no-repeat 50% / cover';
    }
  }
});
