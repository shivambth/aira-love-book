document.addEventListener("DOMContentLoaded", () => {

  const intro = document.getElementById("intro");
  const book = document.getElementById("book");
  const bookScreen = document.getElementById("bookScreen");
  const realBook = document.getElementById("realBook");

  const prevButton = document.getElementById("prevPage");
  const nextButton = document.getElementById("nextPage");

  const currentPage = document.getElementById("currentPage");
  const totalPages = document.getElementById("totalPages");

  let bookOpened = false;
  let page = 1;
  const pages = 10;

  let touchStartX = 0;
  let touchStartY = 0;
  let touchStartTime = 0;

  totalPages.textContent = pages;


  /* =========================
     OPEN BOOK
  ========================= */

  function openBook() {

    if (bookOpened) return;

    bookOpened = true;

    book.classList.remove("closed");
    book.classList.add("opening");

    setTimeout(() => {

      intro.classList.remove("active");
      bookScreen.classList.add("active");

    }, 850);
  }


  /* =========================
     INTRO TOUCH / SWIPE
  ========================= */

  intro.addEventListener("touchstart", (event) => {

    const touch = event.changedTouches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchStartTime = Date.now();

  }, { passive: true });


  intro.addEventListener("touchend", (event) => {

    const touch = event.changedTouches[0];

    const differenceX = touch.clientX - touchStartX;
    const differenceY = touch.clientY - touchStartY;

    const elapsed = Date.now() - touchStartTime;

    const swipeDistance =
      Math.sqrt(
        differenceX * differenceX +
        differenceY * differenceY
      );

    if (
      swipeDistance > 45 &&
      elapsed < 1000
    ) {
      openBook();
    }

  }, { passive: true });


  /* =========================
     TAP TO OPEN
  ========================= */

  book.addEventListener("click", () => {
    openBook();
  });


  /* =========================
     PAGE TURN
  ========================= */

  function turnPage(direction) {

    if (!bookOpened) return;

    if (direction === "next") {

      if (page >= pages) return;

      page++;

      realBook.classList.remove("turning-forward");
      realBook.classList.remove("turning-backward");

      void realBook.offsetWidth;

      realBook.classList.add("turning-forward");

    }

    if (direction === "previous") {

      if (page <= 1) return;

      page--;

      realBook.classList.remove("turning-forward");
      realBook.classList.remove("turning-backward");

      void realBook.offsetWidth;

      realBook.classList.add("turning-backward");
    }

    currentPage.textContent = page;
  }


  /* =========================
     BUTTONS
  ========================= */

  nextButton.addEventListener("click", () => {
    turnPage("next");
  });

  prevButton.addEventListener("click", () => {
    turnPage("previous");
  });


  /* =========================
     BOOK SWIPE
  ========================= */

  bookScreen.addEventListener("touchstart", (event) => {

    const touch = event.changedTouches[0];

    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchStartTime = Date.now();

  }, { passive: true });


  bookScreen.addEventListener("touchend", (event) => {

    const touch = event.changedTouches[0];

    const differenceX = touch.clientX - touchStartX;
    const differenceY = touch.clientY - touchStartY;

    const elapsed = Date.now() - touchStartTime;

    /*
      Ignore vertical scrolling gestures.
    */

    if (
      Math.abs(differenceX) < 45 ||
      Math.abs(differenceX) < Math.abs(differenceY)
    ) {
      return;
    }

    if (elapsed > 1200) {
      return;
    }

    if (differenceX < 0) {

      // Swipe left = next page
      turnPage("next");

    } else {

      // Swipe right = previous page
      turnPage("previous");

    }

  }, { passive: true });


  /* =========================
     KEYBOARD
  ========================= */

  document.addEventListener("keydown", (event) => {

    if (!bookOpened) return;

    if (event.key === "ArrowRight") {
      turnPage("next");
    }

    if (event.key === "ArrowLeft") {
      turnPage("previous");
    }

  });


  /* =========================
     CLEAN ANIMATION CLASSES
  ========================= */

  realBook.addEventListener("animationend", () => {

    realBook.classList.remove("turning-forward");
    realBook.classList.remove("turning-backward");

  });


});
