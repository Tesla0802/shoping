var day = document.querySelector(".sun");
var night = document.querySelector(".moon");
var body = document.querySelector("body");
var txt = document.querySelector("h1");
var list = document.querySelector("a");
var icon = document.querySelector("fa-solid");

day.addEventListener("click", function () {
  day.style.display = " none";
  night.style.display = "inline-block";
  night.style.color = "#ffffff";
  body.style.backgroundColor = "#1d1d1d";
  txt.style.color = "#ffffff";
  list.style.color = "#ffffff";
});

night.addEventListener("click", function () {
  night.style.display = "none";
  day.style.display = " inline-block";
  day.style.color = " #1d1d1d";
  body.style.backgroundColor = "#ffffff";
  txt.style.color = "#1d1d1d";
  list.style.color = "#1d1d1d";
});
