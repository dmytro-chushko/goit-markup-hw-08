(
  () => {
    const menuBtnOpn = document.querySelector("[data-menu-open]");
    const menuBtnCls = document.querySelector("[data-menu-close]");
    const menuCont = document.querySelector("[data-menu-container]");

    menuBtnOpn.addEventListener('click', toggleModal);

    menuBtnCls.addEventListener('click', toggleModal);

    function toggleModal() {
      menuBtnOpn.classList.toggle("header__button--is-open");
      menuBtnCls.classList.toggle("header__button--is-open");
      menuCont.classList.toggle("menu-container--is-hidden");
    }
  }
)();