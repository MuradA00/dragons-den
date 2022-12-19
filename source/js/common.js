const dropdown = document.querySelector('.header__dropdown'),
      hiddenList = document.querySelector('.header-hidden'),
      mainOverlay = document.querySelector('.main'),
      header = document.querySelector('.header'),
      footer = document.querySelector('.footer')

function showHiddenList() {
  hiddenList.classList.toggle('--show-hidden')
}

function spacingForMain() {
  const headerHeight = header.clientHeight;
  const footerHeight = footer.clientHeight;
  mainOverlay.style.paddingTop = `${headerHeight}px`;
  mainOverlay.style.paddingBottom = `${footerHeight}px`;
}

document.addEventListener('DOMContentLoaded', spacingForMain);

dropdown.addEventListener('click', showHiddenList);

