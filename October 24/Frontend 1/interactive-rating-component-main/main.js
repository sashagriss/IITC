const elNums = document.querySelectorAll(".num");
const elSubmit = document.querySelector(".submit");

const elSpan = document.querySelector(".chosen-rate");

const elPageOne = document.querySelector(".page-one");
const elPageTwo = document.querySelector(".page-two");

elNums.forEach((num) => {
  num.addEventListener("click", () => {
    rate(num);
  });
});

elSubmit.addEventListener("click", () => {
  switchPage();
});

function rate(clickedNum) {
  elNums.forEach((num) => {
    if (num.classList.contains("num-clicked")) {
      num.classList.remove("num-clicked");
    } else {
      clickedNum.classList.toggle("num-clicked");
      elSpan.textContent = clickedNum.textContent;
    }
  });
}

function switchPage() {
  elPageOne.classList.add("hidden");
  elPageTwo.classList.remove("hidden");
}
