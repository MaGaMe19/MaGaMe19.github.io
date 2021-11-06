function reportWindowSize() {
  const heightOutput = document.querySelector('#height');
  const widthOutput = document.querySelector('#width');
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
};

window.addEventListener("load", reportWindowSize);
window.addEventListener("resize", reportWindowSize);
