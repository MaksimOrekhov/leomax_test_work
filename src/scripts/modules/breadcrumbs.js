// изменение активного пункта меню

module.exports = () => {
  let menuItemHotels = document.querySelector('#hotels');
  let menuItemIndex = document.querySelector('#index')
  if (document.querySelector('.sorting')) {
    menuItemIndex.classList.remove('item__link--active');
    menuItemHotels.classList.add('item__link--active');
  }
}