window.onload = function () {
  let shareBtn = document.getElementById("shareBtn");

  shareBtn.addEventListener("click", () => {
    shareBtn.classList.toggle("open");
  });
};
