const elQuestion = document.querySelectorAll(".question");
const btn = document.querySelectorAll(".plus-minus");
const elAnswer = document.querySelectorAll(".answer");

elQuestion.forEach((question, index) => {
  question.addEventListener("click", () => {
    open(index);
  });
});

function open(index) {
  const currentAnswer = elAnswer[index];
  const currentButton = btn[index];
  currentAnswer.classList.toggle("answer");
  currentButton.classList.toggle("open");
}
