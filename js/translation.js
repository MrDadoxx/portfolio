const toggle = $("#toggle-language > button");
const text = $(".about__article > article > p");
const userLanguage = navigator.language || navigator.userLanguage;
const languageCode = userLanguage.split("-")[0];
let age = Math.floor(
  (new Date() - new Date(2009, 7, 26)) / (365.25 * 24 * 60 * 60 * 1000)
);
let selectedLanguage = languageCode;

const en = {
  "link-work": "Work",
  "link-about": "About",
  "link-contact": "Contact",
  "title-welcome": "Welcome!",
  "form-name": "Name & Surname",
  "form-about": "Reason of contact",
  send: "Send",
};
const es = {
  "link-work": "Proyectos",
  "link-about": "Sobre mí",
  "link-contact": "Contacto",
  "title-welcome": "Bienvenido!",
  "form-name": "Nombre y apellido",
  "form-about": "Motivo de contacto",
  send: "Enviar",
};

function changeLanguage() {
  $(".menu__links__work__link").innerHTML = selectedLanguage["link-work"];
  $(".menu__links__about__link").innerHTML = selectedLanguage["link-about"];
  $(".menu__links__contact__link").innerHTML = selectedLanguage["link-contact"];
  $(".work__title").innerHTML = selectedLanguage["link-work"] + ".";
  $(".about__title").innerHTML = selectedLanguage["link-about"] + ".";
  $(".contact__title").innerHTML = selectedLanguage["link-contact"] + ".";
  $(".about__article > article > h3").innerHTML =
    selectedLanguage["title-welcome"];
  $(".contact__form__input").placeholder = selectedLanguage["form-name"];
  $(".contact__form__textarea").placeholder = selectedLanguage["form-about"];
  $(".contact__form__submit").value = selectedLanguage["send"];

  if (selectedLanguage == es) {
    text.innerHTML = `Hola, soy Ezequías Torczuk, un desarrollador web <b>full-stack</b> de ${age} años especializado en tecnologías como <b class="orange">HTML</b>, <b class="orange">CSS</b>, <b class="orange">JavaScript</b>,
    <b class="orange">React</b> y <b class="orange">NodeJS</b>. Puedo hacer que tu página destaque entre las demás con un estilo sencillo. Estaría encantado de trabajar contigo.`;
    text.style.fontSize = "42px";
  } else {
    text.innerHTML = `I'm Ezequías Torczuk, a ${age} years old <b>Full-Stack</b> web developer specialized
      in technologies like <b class="orange">HTML</b>,
      <b class="orange">CSS</b>, <b class="orange">JavaScript</b>,
      <b class="orange">React</b> and <b class="orange">NodeJS</b>. I can
      make your site stand out from the rest with a simple style. I would
      be happy to work with you.`;
    text.style.fontSize = "45px";
  }

  switch (selectedLanguage) {
    case es:
      toggle.classList.remove("es");
      toggle.classList.add("en");
      selectedLanguage = en;
      break;
    case en:
      toggle.classList.remove("en");
      toggle.classList.add("es");
      selectedLanguage = es;
      break;
  }

  console.log(selectedLanguage);
  console.log(toggle.style.backgroundImage);
}

if (selectedLanguage === "es") {
  selectedLanguage = es;
} else {
  selectedLanguage = en;
}

changeLanguage();
toggle.addEventListener("click", () => {
  changeLanguage();
});
