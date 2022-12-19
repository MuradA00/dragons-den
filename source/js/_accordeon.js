var acc = document.getElementsByClassName("faq-list__visible");
const hiddenContent = document.querySelector('.faq-list__hidden')
var i;
const mobIcon = document.querySelectorAll('.mob-icon')

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("collapse");
    var panel = this.nextElementSibling;
    if (panel.classList.contains('collapse')) {
      panel.style.height = null;
      panel.style.margin = '0px';
      panel.style.overflow = 'hidden'
      panel.style.display = 'none'
    } else {
      panel.style.overflow = 'unset'
      panel.style.display = 'block'
    }
  });
}
