(
  () => {
    const menuBtnRef = document.querySelector("[data-menu-button]");
    const menuCont = document.querySelector("[data-menu-container]");

    menuBtnRef.addEventListener('click', () => {
      const expanded = menuBtnRef.getAttribute("aria-expanded") === "true" || false;

      menuBtnRef.classList.toggle("header__button--is-open");
      menuCont.classList.toggle("menu-container--is-hidden");
      menuBtnRef.setAttribute("aria-expanded", !expanded);
    });
  }
)();