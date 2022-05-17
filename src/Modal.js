(() => {
    const refs = {
      //openMenuBtn: document.querySelector('[data-menu-open]'),
      openModalBtn: document.querySelector("[data-modal-open]"),
      openModalBtn2: document.querySelector("[data-modal-open2]"),
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.openModalBtn2.addEventListener("click", toggleModal, );
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      //refs.openMenuBtn.classList.toggle("go-away");
    }
  })();