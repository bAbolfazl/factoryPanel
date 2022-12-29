// vars
const inputCodes = document.querySelectorAll(".input-code");
const button = document.querySelector(".button");
const timer = document.querySelector("#timer");
const resetButton = document.querySelector("#resetButton");

// funcs
const onInputCodeFocus = (e) => {
  e.target.value = "";
};
const onButtonClick = () => {
  document.querySelector(".code-section").classList.add("invalid");
  document.querySelector(".warn-section").classList.remove("d-none");
  document.querySelector(".dark-section").classList.add("d-none");
};
const onInputCodeChange = (e, index) => {
  console.log(e.target.value);
  if (e.key === "Backspace" || e.keyCode === 8) {
    return document.querySelector(`#input${index - 1}`).focus();
  }
  if (document.querySelector(`#input${index + 1}`))
    document.querySelector(`#input${index + 1}`)?.focus();
  else button.focus();
};

// events
inputCodes.forEach((item, index) =>
  item.addEventListener("keypress", (e) => onInputCodeChange(e, index))
);
inputCodes.forEach((item) => item.addEventListener("focus", onInputCodeFocus));
button.addEventListener("click", onButtonClick);

// imediate invokes
window.addEventListener("load", () => {
  var time = 180;
  var xxx = setInterval(function () {
    --time;
    if (time === 0) {
      resetButton.disabled = false;
      clearInterval(xxx);
    }

    const min = time / 60;
    const sec = time % 60;
    timer.textContent = e2p(`${Math.floor(min)} : ${sec.toFixed()}`);
  }, 1000);
});
