const sum = (a, b) => {
  const c = a + b;
  return c;
};

console.log(sum(44, 5));
// a = 44
//b = 5
//const c = 44 + 5;

const image = document.querySelector(".js-img");
const imageBottom = document.getElementById("image-bottom");
const showNextImg = () => {
  image.style = "z-index:0;";
  imageBottom.style = "z-index:1;";
};
const title = document.querySelector(".title");

const text = document.getElementById("text");
const list = document.querySelector(".list");
const getInfo = () => {
  const userText = text.value;
  const p = document.createElement("p");
  p.textContent = userText;
  // console.log(userText);

  text.value = "";
  list.appendChild(p);
};
list.addEventListener("click", function (evt) {
  if (evt.target.tagName === "P") {
    // Код, который будет выполнен при клике на элемент <li>
    evt.target.classList.toggle("active"); // переключение класса
  }
});

const showPreviousImg = () => {
  imageBottom.style = "z-index:0;";
  image.style = "z-index:1;";
  image.alt = "newfoto";
  title.classList.add("active");
  // title.style.color = "red";
};

// const image = document.getElementById("image");
// console.log(image);

// const showNextImg = () => {
//   image.src = "assets/images/2.avif";
// };
// const showPreviousImg = () => {
//   image.src = "assets/images/3.avif";
// };

// !ниже не обязательное
// const btn = document.getElementById("btn");
// btn.addEventListener("click", () => {
//   showNewImg("assets/images/2.avif");
// });

// const par = document.getElementById("paragraph");
// par.addEventListener("click", () => {
//   showNewImg("assets/images/3.avif");
// });
