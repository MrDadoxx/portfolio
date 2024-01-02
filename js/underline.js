const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const work__link = $(".menu__links__work__link");
const work__underline = $(".menu__links__work__underline");
const about__link = $(".menu__links__about__link");
const about__underline = $(".menu__links__about__underline");
const contact__link = $(".menu__links__contact__link");
const contact__underline = $(".menu__links__contact__underline");
const connector__ball = $(".menu__links__connector__ball");
let option = 1;

function work_link_on() {
  work__underline.style.animation =
    "underline-on .2s cubic-bezier(0,-0.01,1,.99) 0s 1 forwards";

  if (option == 2) {
    connector__ball.style.animation = "about-to-work .3s linear 0s 1 forwards";
    option = 1;
  } else if (option == 3) {
    connector__ball.style.animation =
      "contact-to-work .4s linear 0s 1 forwards";
    option = 1;
  }
}

function about_link_on() {
  about__underline.style.animation =
    "underline-on .2s cubic-bezier(0,-0.01,1,.99) 0s 1 forwards";

  if (option == 1) {
    connector__ball.style.animation = "work-to-about .3s linear 0s 1 forwards";
    option = 2;
  } else if (option == 3) {
    connector__ball.style.animation =
      "contact-to-about .3s linear 0s 1 forwards";
    option = 2;
  }
}

function contact_link_on() {
  contact__underline.style.animation =
    "underline-on .2s cubic-bezier(0,-0.01,1,.99) 0s 1 forwards";

  if (option == 2) {
    connector__ball.style.animation =
      "about-to-contact .3s linear 0s 1 forwards";
    option = 3;
  } else if (option == 1) {
    connector__ball.style.animation =
      "work-to-contact .4s linear 0s 1 forwards";
    option = 3;
  }
}

function all_link_off() {
  work__underline.style.animation =
    "underline-off .1s cubic-bezier(0,-0.01,1,.99) 0s 1 forwards";
  about__underline.style.animation =
    "underline-off .1s cubic-bezier(0,-0.01,1,.99) 0s 1 forwards";
  contact__underline.style.animation =
    "underline-off .1s cubic-bezier(0,-0.01,1,.99) 0s 1 forwards";
}

work__link.addEventListener("mouseover", () => {
  work_link_on();
});
work__underline.addEventListener("mouseover", () => {
  work_link_on();
});

about__link.addEventListener("mouseover", () => {
  about_link_on();
});
about__underline.addEventListener("mouseover", () => {
  about_link_on();
});

contact__link.addEventListener("mouseover", () => {
  contact_link_on();
});
contact__underline.addEventListener("mouseover", () => {
  contact_link_on();
});

addEventListener("mouseout", () => {
  all_link_off();
});
