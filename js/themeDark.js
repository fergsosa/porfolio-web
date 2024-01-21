const d = document,
  // * selector de botones
  $btnModeLight = d.querySelector(".btn-mode-light"),
  $btnModeDark = d.querySelector(".btn-mode-dark");

// * al click se active el tema
$btnModeLight.addEventListener("click", setModeDark);
$btnModeDark.addEventListener("click", setModeLight);

// * funcion para activar
function setModeDark() {
  setUserTheme("dark");
}
function setModeLight() {
  setUserTheme("light");
}

// * cambia si es light o dark
function setUserTheme(newTheme) {
  d.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
}

//*

// (function () {
//   const userTheme = localStorage.getItem("theme"),
//     darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

//   if (userTheme === "dark" || (!userTheme && darkQuery.matches)) {
//     setTheme("dark");
//   }

//   darkQuery.addEventListener("change", function (e) {
//     if (!localStorage.getItem("theme")) setTheme(e.matches ? "dark" : "light");
//   });

//   function setTheme(newTheme) {
//     document.documentElement.setAttribute("data-theme", newTheme);
//   }
// });
