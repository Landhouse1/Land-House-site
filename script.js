function openModal(src) {
  document.getElementById("myModal").style.display = "flex";
  document.getElementById("modalImage").src = src;
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}