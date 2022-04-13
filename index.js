const h1Element = document.querySelector("h1");
const h3Element = document.querySelector("h3");
const inputElement = document.querySelector(".input");
const buttonElement = document.querySelector("button");

function begrueßen() {
  let name = inputElement.value;
  return `Hello ${name}.`;
}

function counterDays() {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const d = new Date();
  let day = days[d.getDay()];
  let number = days.indexOf("Sunday") - days.indexOf(day);
  if (number) {
    return ` Today is ${day}. Only ${number} days left until weekend!`;
  }
}
buttonElement.addEventListener("click", () => {
  h3Element.innerText = begrueßen() + counterDays();
});
