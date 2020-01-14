export default () => {
  document.querySelector('.fade-in').classList.remove('fade-in-active');
  setTimeout(function () {
    document.querySelector('.fade-in').classList.add('fade-in-active');
  }, 10);
}