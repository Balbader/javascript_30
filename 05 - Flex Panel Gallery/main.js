const panels = document.querySelectorAll('.panels');
function toggleOpen() {
  this.classList.toggle('open');
}

panels.forEach(panel => paner.addEventListerner('click', toggleOpen));
