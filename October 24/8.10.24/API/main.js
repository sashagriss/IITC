const elDogs = document.querySelector(".dog");
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => response.json())
  .then((data) => insert(data.message));
function insert(img) {
  elDogs.insertAdjacentHTML("beforeend", `<img src="${img}" alt="?">`);
}
// const elCats = document.querySelector(".cat");
// // fetch("https://http.cat/[status_code]")
//   .then((response) => response.json())
//   .then((data) => insert(data.message));
// function insert(img) {
//   elCats.insertAdjacentHTML("beforeend", `<img src="${img}" alt="?">`);
// }
