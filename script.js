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
/* =====================================
   AIRA PHOTO COLLECTION
===================================== */

const photos = [
  "0b8aa28f-6950-458d-8b1a-01778962e1a6.jpeg",
  "18f261ae-4bcf-4466-97a6-5e588eca73f9.jpeg",
  "1f8c80fa-d609-4941-b572-09cdb5e18b34.jpeg",
  "24b76626-dabd-4dbb-b906-34e9d8bbc6c7.jpeg",
  "2c43eb5c-d0ec-4196-b516-66fd36cd6493.jpeg",
  "3020cea6-faf3-40d0-b9e0-dc5838cf818e.jpeg",
  "33f5fb6a-9ebc-4058-8002-141f7a7f958f.jpeg",
  "37011a39-d7a8-40c9-9bec-31351fd1601c.jpeg",
  "3c813296-0f22-4b7c-a945-f81a02b58218.jpeg",
  "47c26cdd-18c4-4db9-81ef-7ca0ccbaa0d4.jpeg",
  "49fbb1b4-548e-411e-bbd9-9bf9b4b0faec.jpeg",
  "519dab54-0641-4113-98ae-3b5589d88f97.jpeg",
  "ffe09983-18ad-4733-af06-1243a4c8b3e2.jpeg",
  "fe9d4e97-ae11-4958-adb2-092fa9dd9946.jpeg",
  "f1342906-44ef-48a7-910f-43d32dbd7e57.jpeg",
  "eef5a94c-07a8-4816-a8a1-7406d846571f.jpeg",
  "ec825d58-7514-45d1-92b5-c6103bac9459.jpeg",
  "ddaaed60-dbaa-4af3-bc21-cd0a728cf58f.jpeg",
  "dbbe551e-ca10-42fb-87d6-32d8af894959.jpeg",
  "d228e45c-85ac-4d1f-9595-114a02d2afcc.jpeg",
  "d21a8784-e9b8-4f0c-8e7b-b4bc26df61a8.jpeg",
  "cdb58739-d45d-4876-afb4-a6cd672f01e8.jpeg",
  "cd6926ba-9b68-42ff-9728-1a58025130f0.jpeg",
  "ccf20a13-e7f0-4b24-8e65-65258ab13e6b.jpeg",
  "b268f545-4a48-4c32-afdc-210b2faab711.jpeg",
  "aef7cb7d-ea44-4c6c-8f8b-2e881e66c5cb.jpeg",
  "ab56ae29-1c51-4a90-b970-e8bb94b09977.jpeg",
  "ab262628-a529-4a6a-9e29-0cb1cf83f8b5.jpeg",
  "aacb8353-33b0-430d-8fb7-02fd8440e0a1.jpeg",
  "a8922e4c-b11e-4b5e-a444-b58d80fae3a3.jpeg",
  "a241a29b-48c8-4d9a-90ca-dc42a0ec8122.jpeg",
  "a12d1b04-17e1-41a3-a91f-80f63ef41cfb.jpeg",
  "9d5851e1-fd59-4489-88b9-deba39090db0.jpeg",
  "9abe38b0-da98-4c85-900d-9bfc15b88a89.jpeg",
  "93d85390-4302-4a11-9ba2-1840246f7e64.jpeg",
  "901fdca7-3129-4fa1-9ff7-fbd38d5eee75.jpeg",
  "8983be6f-3b77-403b-a2be-a7486c23fc93.jpeg",
  "84ede98e-6f16-4429-9a50-ca1cc5dec4d3.jpeg",
  "81021cee-474d-49fa-9418-eceb3a4c8e79.jpeg",
  "7f744a9e-f307-4dfb-98e1-15e52c7fadd0.jpeg",
  "7d0e97f0-76e6-47e4-b97b-fb4cb736a27f.jpeg",
  "751aa38b-e5d6-4845-8fa1-549e3fa0edf1.jpeg",
  "6d489dba-eaf6-4809-84dd-c6b776a86f04.jpeg",
  "6cdc26a3-8aae-454f-8fd3-b101c579b286.jpeg",
  "6cb1ed0e-741f-4f1e-a4f6-9e72343c00e2.jpeg",
  "6befaa43-491c-4e52-94a3-f721091c3772.jpeg",
  "6488967a-534c-4ed5-9c19-0070ca131b31.jpeg",
  "615c9168-1d4d-439a-b23b-053da7e9aa76.jpeg",
  "5fd0c8b4-6523-4817-a181-1c88e40dca91.jpeg",
  "5e005d63-93a7-4cc6-acb3-351cc6fc3010.jpeg"
];
  /* =====================================
   DISPLAY PHOTOS IN BOOK
===================================== */

const photoFrames = document.querySelectorAll(
  ".photo-placeholder"
);

photoFrames.forEach((frame, index) => {

  if (!photos[index]) return;

  const img = document.createElement("img");

  img.src = `assets/photos/${photos[index]}`;
  img.alt = `Aira memory ${index + 1}`;

  img.style.width = "100%";
  img.style.height = "100%";
  img.style.objectFit = "cover";
  img.style.display = "block";

  frame.style.overflow = "hidden";
  frame.replaceChildren(img);

});
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
