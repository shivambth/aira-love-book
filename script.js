document.addEventListener("DOMContentLoaded", () => {

  const opening = document.getElementById("opening");
  const coverBook = document.getElementById("coverBook");
  const flipbookScreen = document.getElementById("flipbookScreen");
  const book = document.getElementById("book");

  const pages = Array.from(
    document.querySelectorAll(".page")
  );

  const previousButton =
    document.getElementById("previousPage");

  const nextButton =
    document.getElementById("nextPage");

  const currentPage =
    document.getElementById("currentPage");

  const totalPages =
    document.getElementById("totalPages");

  let opened = false;
  let current = 0;

  let dragging = false;
  let startX = 0;
  let currentX = 0;

  const total = pages.length;

  totalPages.textContent = total;


  /* =====================================
     OPEN THE COVER
  ===================================== */

  function openBook() {

    if (opened) return;

    opened = true;

    coverBook.style.transform =
      "rotateX(5deg) rotateY(-8deg) rotateZ(-1deg) translateX(-4px)";

    coverBook.style.opacity = "0";

    setTimeout(() => {

      opening.style.display = "none";

      flipbookScreen.classList.add("active");

      book.style.opacity = "1";

      updatePages();

    }, 1000);
  }


  /* =====================================
     COVER SWIPE
  ===================================== */

  let coverStartY = 0;

  opening.addEventListener(
    "touchstart",
    (event) => {

      coverStartY =
        event.changedTouches[0].clientY;

    },
    { passive: true }
  );


  opening.addEventListener(
    "touchend",
    (event) => {

      const endY =
        event.changedTouches[0].clientY;

      const distance =
        coverStartY - endY;

      if (distance > 40) {
        openBook();
      }

    },
    { passive: true }
  );


  coverBook.addEventListener(
    "click",
    openBook
  );


  /* =====================================
     PAGE SETUP
  ===================================== */

  function updatePages() {

    pages.forEach((page, index) => {

      const pageNumber = index + 1;

      page.style.transition =
        "transform .65s cubic-bezier(.2,.7,.15,1)";

      if (pageNumber <= current) {

        page.style.transform =
          "rotateY(-180deg)";

        page.style.zIndex =
          String(pageNumber);

      } else {

        page.style.transform =
          "rotateY(0deg)";

        page.style.zIndex =
          String(total - pageNumber + 10);
      }

    });

    currentPage.textContent = current;
  }


  /* =====================================
     START DRAG
  ===================================== */

  function startDrag(clientX) {

    if (!opened) return;

    dragging = true;

    startX = clientX;
    currentX = clientX;

    const activePage =
      getActivePage();

    if (!activePage) {

      dragging = false;
      return;
    }

    activePage.style.transition =
      "none";
  }


  /* =====================================
     DRAGGING
  ===================================== */

  function moveDrag(clientX) {

    if (!dragging) return;

    currentX = clientX;

    const activePage =
      getActivePage();

    if (!activePage) return;

    const rect =
      book.getBoundingClientRect();

    const width =
      rect.width / 2;

    let distance =
      startX - currentX;

    distance =
      Math.max(0, Math.min(distance, width));

    let progress =
      distance / width;

    /*
      0 = page completely flat
      1 = page completely turned
    */

    const angle =
      -180 * progress;

    activePage.style.transform =
      `rotateY(${angle}deg)`;

    /*
      Dynamic shadow during page curl
    */

    const shadow =
      0.15 + (progress * 0.45);

    activePage.style.boxShadow =
      `inset 12px 0 22px rgba(70,45,25,.13),
       ${-8 * progress}px
       ${8 * progress}px
       ${18 + progress * 20}px
       rgba(0,0,0,${shadow})`;
  }


  /* =====================================
     END DRAG
  ===================================== */

  function endDrag() {

    if (!dragging) return;

    dragging = false;

    const activePage =
      getActivePage();

    if (!activePage) return;

    const distance =
      startX - currentX;

    const rect =
      book.getBoundingClientRect();

    const half =
      rect.width / 2;

    activePage.style.transition =
      "transform .55s cubic-bezier(.2,.8,.15,1)";

    /*
      More than 25% swipe =
      complete page turn
    */

    if (distance > half * 0.25) {

      current++;

    }

    updatePages();

    activePage.style.boxShadow = "";
  }


  /* =====================================
     GET CURRENT PAGE
  ===================================== */

  function getActivePage() {

    if (current >= total) {
      return null;
    }

    return pages[current];
  }


  /* =====================================
     TOUCH EVENTS
  ===================================== */

  book.addEventListener(
    "touchstart",
    (event) => {

      const touch =
        event.changedTouches[0];

      startDrag(touch.clientX);

    },
    { passive: true }
  );


  book.addEventListener(
    "touchmove",
    (event) => {

      if (!dragging) return;

      const touch =
        event.changedTouches[0];

      moveDrag(touch.clientX);

    },
    { passive: true }
  );


  book.addEventListener(
    "touchend",
    endDrag,
    { passive: true }
  );


  /* =====================================
     MOUSE SUPPORT
  ===================================== */

  book.addEventListener(
    "mousedown",
    (event) => {

      startDrag(event.clientX);

    }
  );


  window.addEventListener(
    "mousemove",
    (event) => {

      moveDrag(event.clientX);

    }
  );


  window.addEventListener(
    "mouseup",
    endDrag
  );


  /* =====================================
     BUTTONS
  ===================================== */

  nextButton.addEventListener(
    "click",
    () => {

      if (!opened) return;

      if (current >= total) return;

      current++;

      updatePages();

    }
  );


  previousButton.addEventListener(
    "click",
    () => {

      if (!opened) return;

      if (current <= 0) return;

      current--;

      updatePages();

    }
  );


  /* =====================================
     KEYBOARD
  ===================================== */

  document.addEventListener(
    "keydown",
    (event) => {

      if (!opened) return;

      if (event.key === "ArrowRight") {

        if (current < total) {
          current++;
          updatePages();
        }

      }

      if (event.key === "ArrowLeft") {

        if (current > 0) {
          current--;
          updatePages();
        }

      }

    }
  );


  /* =====================================
     INITIAL STATE
  ===================================== */

  flipbookScreen.classList.remove("active");

  book.style.opacity = "0";

});
