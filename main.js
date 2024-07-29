// Get modal element
var modal = document.getElementById("simpleModal");
// Get open modal btn
var modalBtn = document.getElementById("modalBtn");
// Get close Btn
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen for open click
modalBtn.addEventListener("click", openModal);
// listen fro the close click
closeBtn.addEventListener("click", closeModal);
// listen for outside click
window.addEventListener("click", outSideclick);
// function to open modal
function openModal() {
  modal.style.display = "block";
}

// function to close modal
function closeModal() {
  modal.style.display = "none";
}

// function to close modal if outside click
function outSideclick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
