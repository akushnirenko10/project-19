(() => {
    const refs = {
      header_openMenuBtn: document.querySelector('[header_data-menu-open]'),
      header_closeMenuBtn: document.querySelector('[header_data-menu-close]'),
      header_menu: document.querySelector('[header_data-menu]'),
     };
  
    refs.header_openMenuBtn.addEventListener('click', toggleMenu);
    refs.header_closeMenuBtn.addEventListener('click', toggleMenu);

    var links = document.getElementsByClassName('pop-up-menu__navigation__element');
        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', toggleMenu);
    }
  
    function toggleMenu() {
        console.log(1);
      refs.header_menu.classList.toggle("is-open");
      //refs.openMenuBtn.classList.toggle('is-open');
    }
  })();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});