// правильное отображение футера на странице отелей

module.exports = () => {
  let footer = document.querySelector('.footer')
  if (document.querySelector('.sorting')) {
    footer.classList.remove('footer');
    footer.classList.add('footer__hotels');
  }
}