const button = document.getElementById('button');
function getScreenSize() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  alert(`Ширина экрана: ${width}px\nВысота экрана: ${height}px`);
}
document.getElementById('screenSize').addEventListener('click', getScreenSize);

