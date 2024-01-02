const answerWindow = document.querySelector("#window");
const buttons = document.querySelectorAll(".button");
const equal = document.querySelector(".equal");

function calculate(str) {
  try {
    return eval(str);
  } catch (error) {
    return "ERROR";
  }
}

for (const button of buttons) {
  button.addEventListener("click", () => {
    button.classList.add("achicar-animation");
    setTimeout(() => {
      button.classList.remove("achicar-animation");
    }, 200);

    if (button.textContent !== "=") {
      if (answerWindow.textContent === "ERROR") {
        answerWindow.textContent = "";
      }
      answerWindow.textContent += button.textContent;
    } else {
      let answer = calculate(answerWindow.textContent);
      answerWindow.textContent = answer !== undefined ? answer : "ERROR";
    }
  });
}
