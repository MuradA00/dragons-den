var acc = document.querySelectorAll(".faq-list__item");
const icons = document.querySelectorAll('.faq-list__icon')
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this;
    if (panel.classList.contains('active')) {

    } else {

    }
  });
}
