const modalContainer = document.querySelector(".modal-overlay");
const openBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");

openBtn.addEventListener("click", function () {
  modalContainer.classList.add("open-modal");
});
closeBtn.addEventListener("click", function () {
  modalContainer.classList.remove("open-modal");
});
