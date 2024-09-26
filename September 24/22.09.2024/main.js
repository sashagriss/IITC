let gProducts = [{}];

const elAddBtn = document.getElementById("add");
elAddBtn.addEventListener("click", addProduct);
const elForm = document.getElementById("form");
elForm.addEventListener("submit", function (ev) {
  ev.preventDefault();
});

addProduct(ev);
