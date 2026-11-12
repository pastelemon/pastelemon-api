const loadingText = document.querySelector('#loading-text');
const dots = [...document.querySelectorAll('.loading-dots i')];
const labels = ['Loading', 'Loading.', 'Loading..', 'Loading...'];
let labelIndex = 0;

function setLoadingState() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('is-visible', index < labelIndex);
  });
  loadingText.setAttribute('aria-label', labels[labelIndex]);
}

setLoadingState();

window.setInterval(() => {
  labelIndex = (labelIndex + 1) % labels.length;
  setLoadingState();
}, 520);
