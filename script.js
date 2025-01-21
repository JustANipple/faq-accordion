function toggleAnswer(button) {
  const parentContainer = button.parentElement.parentElement;
  const answer = parentContainer.querySelector(".text-e_grayishPurple");
  const image = parentContainer.querySelector("img");
  answer.classList.toggle("hidden");
  if (answer.classList.contains("hidden")) {
    image.src = "./assets/images/icon-plus.svg";
  } else {
    image.src = "./assets/images/icon-minus.svg";
  }
}
