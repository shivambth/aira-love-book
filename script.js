/* =========================================================
   AIRA ❤️ SHIVAM — 4 MONTH LOVE BOOK
   200+ interactive story pages
   Existing swipe / drag page-turn engine preserved
   ========================================================= */

const photoFiles = [
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

const photoPath = name => `assets/photos/${name}`;


/* =========================================================
   STORY CONTENT
   ========================================================= */

const story = [];

/* Opening */
story.push(
  {
    type: "title",
    title: "For My Aira ❤️",
    text: "Empat bulan mungkin terdengar seperti waktu yang singkat...",
    en: "Four months may sound like a short time..."
  },
  {
    type: "text",
    title: "Tapi lihat kita sekarang.",
    text: "Dari dua orang asing menjadi dua orang yang saling mencari setiap hari.",
    en: "From two strangers to two people who look for each other every day."
  },
  {
    type: "text",
    title: "06 • 07 • 2026",
    text: "10:29 PM. Hari ketika cerita kecil kita dimulai.",
    en: "10:29 PM. The night our little story began."
  },
  {
    type: "text",
    title: "Litmatch.",
    text: "Satu tempat random, satu pertemuan random, tapi entah bagaimana membawa aku kepadamu.",
    en: "One random place, one random meeting, somehow bringing me to you."
  },
  {
    type: "text",
    title: "WhatsApp.",
    text: "Dan dari sana, percakapan kita mulai menjadi sesuatu yang tidak lagi terasa random.",
    en: "And from there, our conversations slowly stopped feeling random."
  }
);


/* First days */
const earlyDays = [
  "Hari-hari pertama kita tidak selalu mudah.",
  "Ada salah paham.",
  "Ada mood yang berubah tiba-tiba.",
  "Ada obrolan yang berakhir dengan diam.",
  "Ada saat ketika kita sama-sama keras kepala.",
  "Tapi kita tetap kembali berbicara.",
  "Sedikit demi sedikit kita mulai memahami satu sama lain.",
  "Aku mulai tahu kapan kamu sedang bad mood.",
  "Aku mulai tahu kapan kamu sedang malas.",
  "Aku mulai tahu kalau kamu lupa sesuatu lagi.",
  "Dan anehnya, semua itu justru membuatmu semakin kamu.",
  "Bukan sempurna. Tapi nyata.",
  "Dan aku suka yang nyata itu."
];

earlyDays.forEach((text, i) => {
  story.push({
    type: "text",
    title: `Hari ${i + 1}`,
    text,
    en: translateSimple(text)
  });
});


/* Photos */
photoFiles.forEach((file, i) => {
  story.push({
    type: "photo",
    title: `Our Memory ${String(i + 1).padStart(2, "0")}`,
    photo: file,
    text: photoCaptions[i % photoCaptions.length],
    en: photoEnglish[i % photoEnglish.length]
  });
});


/* Love notes */
const loveNotes = [
  "Aku suka caramu membuat hari biasa terasa sedikit lebih spesial.",
  "Aku suka ketika namamu muncul di layar handphone-ku.",
  "Aku suka semua cerita kecil yang kamu ceritakan kepadaku.",
  "Aku suka ketika kamu tiba-tiba menjadi sangat manja.",
  "Aku suka ketika kamu tertawa karena sesuatu yang sebenarnya tidak lucu.",
  "Aku suka sisi malasmu yang kadang membuatku gemas.",
  "Aku suka caramu menjadi dirimu sendiri.",
  "Aku suka bahwa kamu tidak harus sempurna untuk menjadi seseorang yang sangat berarti.",
  "Aku suka setiap memory kecil yang kita punya.",
  "Aku suka bahwa kita masih memilih satu sama lain.",
  "Aku ingin membuat lebih banyak memory bersamamu.",
  "Aku ingin suatu hari nanti melihat kembali semua ini dan tersenyum.",
  "Kalau aku harus memilih satu memory favorit, mungkin aku akan kesulitan.",
  "Karena hampir semua tentangmu terasa seperti memory favorit.",
  "Terima kasih sudah hadir di hidupku."
];

loveNotes.forEach((text, i) => {
  story.push({
    type: "note",
    title: `A Little Note ${i + 1}`,
    text,
    en: translateSimple(text)
  });
});


/* Cute moments */
const cuteMoments = [
  "Ketika kamu bilang kamu tidak ngantuk, lalu beberapa menit kemudian menghilang.",
  "Ketika kamu lupa sesuatu lalu pura-pura tidak lupa.",
  "Ketika mood-mu berubah lebih cepat daripada cuaca.",
  "Ketika kamu sedang malas tapi tetap ingin diperhatikan.",
  "Ketika kita sama-sama gengsi untuk mengalah.",
  "Ketika akhirnya salah satu dari kita mulai mencari yang lain.",
  "Ketika obrolan kecil berubah menjadi percakapan panjang.",
  "Ketika satu pesan sederhana bisa memperbaiki mood.",
  "Ketika kita tertawa pada hal random yang hanya kita berdua pahami.",
  "Ketika aku sadar bahwa aku sudah terbiasa mencari kabarmu."
];

cuteMoments.forEach((text, i) => {
  story.push({
    type: "text",
    title: `Our Little Chaos ${i + 1}`,
    text,
    en: translateSimple(text)
  });
});


/* =========================================================
   100+ EXTRA MEMORY PAGES
   ========================================================= */

const memoryTemplates = [
  "Satu lagi halaman untuk hal kecil yang mungkin nanti kita lupa, tapi hari ini berarti.",
  "Kalau suatu hari kita membaca halaman ini lagi, semoga kita masih bisa tersenyum.",
  "Ada banyak hal yang tidak perlu difoto untuk menjadi memory.",
  "Beberapa memory hanya hidup di dalam chat dan percakapan kita.",
  "Beberapa hari biasa ternyata menjadi bagian dari cerita yang luar biasa.",
  "Aku ingin mengingat bukan hanya hari besar, tapi juga hari-hari kecil kita.",
  "Karena hubungan bukan hanya tentang moment besar.",
  "Hubungan juga tentang tetap hadir di hari biasa.",
  "Tentang bertanya apakah hari ini baik-baik saja.",
  "Tentang mendengarkan cerita yang sama untuk kesekian kalinya.",
  "Tentang tetap memilih berbicara setelah salah paham.",
  "Tentang belajar memahami kebiasaan satu sama lain.",
  "Tentang tertawa setelah hari yang melelahkan.",
  "Tentang menjadi tempat pulang dalam bentuk percakapan.",
  "Tentang membuat seseorang merasa tidak sendirian."
];

for (let i = 0; i < 100; i++) {
  const text = memoryTemplates[i % memoryTemplates.length];

  story.push({
    type: "memory",
    title: `Memory ${String(i + 1).padStart(3, "0")}`,
    text: `${text} ❤️`,
    en: translateSimple(text)
  });
}


/* =========================================================
   OPEN WHEN LETTERS
   ========================================================= */

const letters = [
  ["Open when you miss me", "Kalau kamu sedang merindukanku, buka halaman ini dan ingat bahwa ada seseorang di sini yang juga memikirkanmu."],
  ["Open when you're sad", "Kalau hari ini terasa berat, jangan merasa harus kuat sendirian. Ceritakan saja kepadaku."],
  ["Open when you're angry", "Tarik napas pelan-pelan. Kita tidak harus menyelesaikan semuanya dalam satu menit."],
  ["Open when you need a smile", "Ingat semua kekonyolan kecil kita dan bagaimana kita bisa tertawa karena hal random."],
  ["Open when you doubt us", "Ingat berapa banyak salah paham yang sudah kita lewati dan bagaimana kita tetap sampai di sini."],
  ["Open on a special day", "Hari spesial akan terasa lebih spesial kalau nanti kita bisa mengingat perjalanan menuju hari itu."],
  ["Open when you need love", "Tidak peduli seberapa jauh atau sibuknya hari itu, kamu tetap menjadi seseorang yang sangat berarti bagiku."]
];

letters.forEach(([title, text]) => {
  story.push({
    type: "letter",
    title,
    text,
    en: translateSimple(text)
  });
});


/* =========================================================
   MINI GAME PAGES
   ========================================================= */

story.push({
  type: "game",
  title: "Mini Game ❤️",
  game: "heart"
});

story.push({
  type: "game",
  title: "Choose One 💌",
  game: "choice"
});

story.push({
  type: "game",
  title: "Memory Question 🧠",
  game: "memory"
});


/* =========================================================
   FUTURE
   ========================================================= */

[
  "Suatu hari kita akan punya lebih banyak foto daripada yang bisa kita hitung.",
  "Suatu hari kita akan melihat kembali chat lama dan tertawa.",
  "Suatu hari mungkin kita akan membicarakan semua ini sambil duduk bersama.",
  "Aku ingin melihat lebih banyak tempat bersamamu.",
  "Aku ingin membuat lebih banyak cerita bersamamu.",
  "Aku ingin punya lebih banyak alasan untuk membuat halaman baru.",
  "Dan kalau buku ini suatu hari menjadi sangat panjang, berarti kita berhasil membuat banyak cerita."
].forEach((text, i) => {
  story.push({
    type: "future",
    title: `Our Future ${i + 1}`,
    text,
    en: translateSimple(text)
  });
});


/* =========================================================
   FINAL
   ========================================================= */

story.push(
  {
    type: "final",
    title: "Four Months.",
    text: "Empat bulan berlalu. Dan aku masih ingin menulis halaman berikutnya bersamamu.",
    en: "Four months have passed. And I still want to write the next pages with you."
  },
  {
    type: "final",
    title: "Thank You, Aira.",
    text: "Terima kasih sudah menjadi bagian dari cerita ini.",
    en: "Thank you for being part of this story."
  },
  {
    type: "final",
    title: "And finally...",
    text: "LESBICUUUU ❤️",
    en: "My favorite person."
  }
);


/* =========================================================
   CAPTIONS
   ========================================================= */

const photoCaptions = [
  "Satu foto, satu memory.",
  "Aku ingin menyimpan moment ini lebih lama.",
  "Kalau sebuah foto bisa bercerita, foto ini pasti punya cerita panjang.",
  "Little moment. Big feeling.",
  "Salah satu bagian kecil dari cerita kita.",
  "Aku akan selalu suka melihat kembali moment seperti ini.",
  "Another page of us.",
  "Senyum kecil untuk memory besar.",
  "This moment deserves a place in our book.",
  "One more memory for us."
];

const photoEnglish = [
  "One photo, one memory.",
  "I wish I could keep this moment forever.",
  "If a photo could speak, this one would have a long story.",
  "A little moment with a big feeling.",
  "One small part of our story.",
  "I will always love looking back at moments like this.",
  "Another page of us.",
  "A little smile for a big memory.",
  "This moment deserves a place in our book.",
  "One more memory for us."
];


/* =========================================================
   SIMPLE TRANSLATION FALLBACK
   ========================================================= */

function translateSimple(text) {
  const translations = {
    "Aku suka caramu membuat hari biasa terasa sedikit lebih spesial.":
      "I love how you make ordinary days feel a little more special.",
    "Aku suka ketika namamu muncul di layar handphone-ku.":
      "I love seeing your name appear on my phone.",
    "Terima kasih sudah hadir di hidupku.":
      "Thank you for being part of my life.",
    "Bukan sempurna. Tapi nyata.":
      "Not perfect. But real.",
    "Dan aku suka yang nyata itu.":
      "And I love that kind of real."
  };

  return translations[text] || "A little piece of our story.";
}


/* =========================================================
   DOM
   ========================================================= */

const book = document.getElementById("book");
const opening = document.getElementById("opening");
const flipbookScreen = document.getElementById("flipbookScreen");

const previousPage = document.getElementById("previousPage");
const nextPage = document.getElementById("nextPage");

const currentPage = document.getElementById("currentPage");
const totalPages = document.getElementById("totalPages");


/* =========================================================
   BUILD PAGES
   ========================================================= */

function createPageHTML(item, index) {

  if (item.type === "photo") {
    return `
      <div class="page-content">
        <img
          class="photo-frame"
          src="${photoPath(item.photo)}"
          alt="Our memory ${index + 1}"
        >

        <h2>${item.title}</h2>

        <p>${item.text}</p>

        <p style="
          font-size:0.75em;
          opacity:0.55;
          margin-top:8px;
        ">
          ${item.en}
        </p>
      </div>
    `;
  }

  if (item.type === "game") {
    return createGame(item);
  }

  return `
    <div class="page-content">

      <div style="
        font-size:0.7em;
        letter-spacing:3px;
        opacity:0.4;
        margin-bottom:20px;
      ">
        PAGE ${String(index + 1).padStart(3, "0")}
      </div>

      <h2>${item.title}</h2>

      <p>${item.text}</p>

      ${
        item.en
          ? `
            <p style="
              font-size:0.72em;
              line-height:1.5;
              opacity:0.55;
              margin-top:18px;
              font-style:italic;
            ">
              ${item.en}
            </p>
          `
          : ""
      }

    </div>
  `;
}


/* =========================================================
   GAME CONTENT
   ========================================================= */

function createGame(item) {

  if (item.game === "heart") {
    return `
      <div class="page-content" style="text-align:center;">
        <h2>Catch the Heart ❤️</h2>

        <p>
          Tap the heart as many times as you can.
        </p>

        <button
          onclick="this.innerText='❤️ ' + (++this.dataset.score || 1)"
          data-score="0"
          style="
            font-size:50px;
            border:0;
            background:none;
            cursor:pointer;
            padding:30px;
          "
        >
          ❤️
        </button>

        <small>
          Just a tiny game for my favorite person.
        </small>
      </div>
    `;
  }

  if (item.game === "choice") {
    return `
      <div class="page-content" style="text-align:center;">
        <h2>Choose One 💌</h2>

        <p>Which one sounds more like us?</p>

        <button
          onclick="alert('Wrong answer 😌❤️ Both!')"
          style="padding:14px;margin:8px;border-radius:20px;"
        >
          Cute
        </button>

        <button
          onclick="alert('Exactly. 😭❤️')"
          style="padding:14px;margin:8px;border-radius:20px;"
        >
          Chaotic
        </button>

        <p style="font-size:12px;opacity:.6;">
          Hint: the answer is probably both.
        </p>
      </div>
    `;
  }

  return `
    <div class="page-content" style="text-align:center;">
      <h2>Memory Question 🧠</h2>

      <p>
        What was the date and time our story officially started?
      </p>

      <button
        onclick="alert('06 July 2026 — 10:29 PM ❤️')"
        style="
          padding:14px 22px;
          border-radius:25px;
          border:1px solid #999;
          background:white;
          cursor:pointer;
        "
      >
        Reveal Answer
      </button>
    </div>
  `;
}


/* =========================================================
   GENERATE STORY PAGES
   ========================================================= */

function buildStoryPages() {

  /*
    Remove only generated pages.
    The existing cover / structure stays.
  */

  document
    .querySelectorAll(".generated-page")
    .forEach(page => page.remove());

  story.forEach((item, index) => {

    const page = document.createElement("div");

    page.className = "page generated-page";

    page.dataset.index = index;

    page.innerHTML = createPageHTML(item, index);

    book.appendChild(page);
  });
}


/* =========================================================
   PAGE ENGINE
   ========================================================= */

let pages = [];
let pageIndex = 0;
let startX = 0;
let startY = 0;
let dragging = false;

function refreshPages() {

  pages = [...document.querySelectorAll(".page")];

  if (totalPages) {
    totalPages.textContent = story.length;
  }

  updatePages();
}


function updatePages() {

  pages.forEach((page, i) => {

    const offset = i - pageIndex;

    page.style.zIndex = pages.length - i;

    if (offset < 0) {
      page.style.transform = "rotateY(-180deg)";
    } else {
      page.style.transform = "rotateY(0deg)";
    }
  });

  if (currentPage) {
    currentPage.textContent = Math.min(
      pageIndex + 1,
      story.length
    );
  }
}


function next() {

  if (pageIndex < pages.length - 1) {
    pageIndex++;
    updatePages();
  }
}


function previous() {

  if (pageIndex > 0) {
    pageIndex--;
    updatePages();
  }
}


/* =========================================================
   TOUCH
   ========================================================= */

book.addEventListener("touchstart", e => {

  if (!e.touches.length) return;

  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;

  dragging = true;

}, { passive: true });


book.addEventListener("touchend", e => {

  if (!dragging || !e.changedTouches.length) return;

  const endX = e.changedTouches[0].clientX;
  const endY = e.changedTouches[0].clientY;

  const dx = endX - startX;
  const dy = endY - startY;

  dragging = false;

  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) {

    if (dx < 0) {
      next();
    } else {
      previous();
    }
  }
});


/* =========================================================
   MOUSE
   ========================================================= */

book.addEventListener("mousedown", e => {

  startX = e.clientX;
  startY = e.clientY;

  dragging = true;
});


window.addEventListener("mouseup", e => {

  if (!dragging) return;

  const dx = e.clientX - startX;
  const dy = e.clientY - startY;

  dragging = false;

  if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 45) {

    if (dx < 0) {
      next();
    } else {
      previous();
    }
  }
});


/* =========================================================
   BUTTONS
   ========================================================= */

if (nextPage) {
  nextPage.addEventListener("click", next);
}

if (previousPage) {
  previousPage.addEventListener("click", previous);
}


/* =========================================================
   KEYBOARD
   ========================================================= */

document.addEventListener("keydown", e => {

  if (e.key === "ArrowRight") {
    next();
  }

  if (e.key === "ArrowLeft") {
    previous();
  }
});


/* =========================================================
   OPEN BOOK
   ========================================================= */

if (opening) {

  opening.addEventListener("click", () => {

    opening.style.display = "none";

    if (flipbookScreen) {
      flipbookScreen.style.display = "flex";
    }

    refreshPages();
  });
}


/* =========================================================
   START
   ========================================================= */

buildStoryPages();

if (flipbookScreen) {
  flipbookScreen.style.display = "none";
}

refreshPages();

console.log(
  `Aira Love Book loaded: ${story.length} pages + ${photoFiles.length} photos ❤️`
);
