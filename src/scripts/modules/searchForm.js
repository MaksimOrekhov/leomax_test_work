module.exports = () => {
  if (document.getElementsByClassName('form__elem')) {
    // реализация открытия-закрытия формы поиска
    let openButton = document.querySelector('.search__button');
    let form = document.querySelector('.form__elem');

    openButton.addEventListener('click', function() {
      form.classList.toggle('form__elem--active');
    });

    // счетчик взрослых
    let adultsPlus = document.querySelector('.controls__plus-adults');
    let adultsMinus = document.querySelector('.controls__minus-adults');
    let adultsNumber = document.querySelector('.controls__value-adults');

    adultsPlus.addEventListener('click', function() {
      let membersNumber = Number(adultsNumber.innerHTML);
      adultsNumber.innerHTML = membersNumber + 1;
    });

    adultsMinus.addEventListener('click', function() {
      let membersNumber = Number(adultsNumber.innerHTML);
      adultsNumber.innerHTML = membersNumber - 1;
      if (membersNumber === 0) {
        adultsNumber.innerHTML = 0;
      }
    });
    
    //счетчик детей
    let childrenPlus = document.querySelector('.controls__plus-children');
    let childrenMinus = document.querySelector('.controls__minus-children');
    let childrenNumber = document.querySelector('.controls__value-children');

    childrenPlus.addEventListener('click', function() {
      let membersNumber = Number(childrenNumber.innerHTML);
      childrenNumber.innerHTML = membersNumber + 1;
    });

    childrenMinus.addEventListener('click', function() {
      let membersNumber = Number(childrenNumber.innerHTML);
      childrenNumber.innerHTML = membersNumber - 1;
      if (membersNumber === 0) {
        childrenNumber.innerHTML = 0;
      }
    });

    let searchFormButton = document.querySelector('.search__form-button');
    
    searchFormButton.addEventListener('click', function(e) {
      e.preventDefault
    })
  }
}