document.addEventListener("DOMContentLoaded", () => {
  const opening = document.getElementById("opening");
  const coverBook = document.getElementById("coverBook");
  const flipbookScreen = document.getElementById("flipbookScreen");
  const book = document.getElementById("book");
  const previousButton = document.getElementById("previousPage");
  const nextButton = document.getElementById("nextPage");
  const currentPage = document.getElementById("currentPage");
  const totalPages = document.getElementById("totalPages");
  let opened = false;
  let current = 0;
  let dragging = false;
  let startX = 0;
  let currentX = 0;
  let pages = [];
  /* =====================================
     50 PHOTOS
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
     INDONESIAN CONTENT
  ===================================== */
  const letters = [
    ["Untuk Aira,","Aku mungkin tidak selalu tahu cara terbaik untuk mengungkapkan perasaanku, tetapi aku ingin kamu tahu bahwa kehadiranmu sangat berarti bagiku.","You mean so much to me."],
    ["Tentang Kita","Aku suka bagaimana dua orang yang awalnya asing bisa perlahan menjadi bagian penting dalam kehidupan satu sama lain.","Strangers became important."],
    ["Saat Aku Merindukanmu","Ada hari-hari ketika aku ingin sekali bercerita langsung kepadamu. Sampai saat itu tiba, kamu tetap ada dalam pikiranku.","I miss sharing moments with you."],
    ["Hal Kecil Tentangmu","Cara kamu berbicara, tertawa, dan bahkan saat kamu sedang malas selalu punya tempat tersendiri di hatiku.","Your little things matter."],
    ["Terima Kasih, Aira","Terima kasih sudah hadir, sudah berbagi cerita, dan sudah menjadi bagian dari perjalanan empat bulan ini.","Thank you for being here."],
    ["Untuk Hari Sulitmu","Jika suatu hari terasa berat, ingatlah bahwa kamu tidak harus selalu terlihat kuat. Aku ingin menjadi seseorang yang bisa mendengarkanmu.","You don't have to be strong always."],
    ["Senyummu","Aku berharap selalu ada banyak alasan untuk membuatmu tersenyum, bahkan pada hari-hari yang biasa saja.","I hope you keep smiling."],
    ["Jarak Bukan Akhir","Walaupun kita belum bisa bertemu sekarang, aku percaya setiap hari membawa kita sedikit lebih dekat pada hari itu.","One day, closer together."],
    ["Sebuah Janji Kecil","Aku ingin terus belajar memahami kamu, menghargai perasaanmu, dan menjaga hal baik yang sedang kita bangun.","I want to keep learning."],
    ["Empat Bulan","Empat bulan mungkin terdengar singkat, tetapi begitu banyak cerita kecil yang sudah menjadi kenangan berharga.","Four months of memories."],
    ["Tentang Suaramu","Ada sesuatu yang menenangkan dari mendengar suaramu. Bahkan percakapan sederhana bisa menjadi bagian favorit hariku.","Your voice comforts me."],
    ["Ketika Kita Berbeda Pendapat","Kita mungkin tidak selalu sepakat. Namun aku berharap kita selalu memilih untuk saling mendengarkan dan memahami.","Let's understand each other."],
    ["Kamu Istimewa","Bukan karena semuanya selalu sempurna, tetapi karena menjadi diri sendiri bersamamu terasa begitu berarti.","You are special to me."],
    ["Untuk Masa Depan","Aku tidak tahu semua hal yang menunggu kita, tetapi aku berharap kita bisa menghadapi hari-hari berikutnya dengan sabar dan bahagia.","Let's face tomorrow together."],
    ["Satu Hal yang Pasti","Di antara banyak hal yang berubah setiap hari, kenangan tentang awal perjalanan kita akan selalu menjadi sesuatu yang kusimpan.","I'll treasure our beginning."],
    ["Ketika Kamu Lupa","Jika suatu hari kamu lupa betapa berharganya dirimu, buka halaman ini dan ingat bahwa kamu punya banyak hal baik dalam dirimu.","Never forget your worth."],
    ["Cerita Sederhana","Aku tidak membutuhkan setiap hari menjadi luar biasa. Terkadang, mengobrol denganmu saja sudah cukup membuat hari terasa indah.","Simple moments are enough."],
    ["Untuk Aira yang Lucu","Mood kamu kadang berubah tiba-tiba, dan terkadang kamu begitu lupa banyak hal. Justru hal-hal kecil itu membuat ceritamu terasa unik.","Your quirks make you unique."],
    ["Aku Mendengarkan","Aku ingin kamu merasa nyaman untuk bercerita, baik tentang hal besar maupun hal kecil yang terjadi hari ini.","I'm here to listen."],
    ["Terima Kasih Sudah Memilih Kita","Hubungan ini bukan tentang menjadi sempurna. Ini tentang dua orang yang terus mencoba memahami satu sama lain.","Let's keep choosing kindness."],
    ["Malam Pertama Kita","Tanggal 6 Juli 2026 akan selalu punya tempat khusus dalam ceritaku. Malam itu menjadi awal dari sesuatu yang tidak kuduga.","Our story began that night."],
    ["Dari Litmatch ke WhatsApp","Siapa sangka sebuah pertemuan sederhana di aplikasi bisa membawa begitu banyak cerita baru dalam hidupku.","A little meeting, a big story."],
    ["Panggilan Pertama","Aku masih menganggap panggilan pertama kita sebagai salah satu momen yang paling berkesan.","I'll remember our first call."],
    ["Belajar Bersama","Aku ingin kita terus belajar tentang kesabaran, komunikasi, dan cara membuat satu sama lain merasa dihargai.","Let's grow together."],
    ["Tidak Harus Sempurna","Kita punya kekurangan masing-masing. Yang penting adalah bagaimana kita saling menghormati dan memperbaiki kesalahan.","We can grow through mistakes."],
    ["Sebuah Harapan","Semoga setiap bulan membawa lebih banyak tawa, cerita, dan alasan untuk bersyukur karena sudah saling mengenal.","More memories ahead."],
    ["Untuk Hari Esok","Aku berharap besok membawa kabar baik, kesempatan baru, dan percakapan menyenangkan bersama kamu.","May tomorrow be kind."],
    ["Kamu dan Kebahagiaan","Aku berharap kamu selalu punya ruang untuk mengejar impianmu dan menikmati hal-hal yang membuatmu bahagia.","Keep chasing your dreams."],
    ["Kenangan yang Kita Bangun","Setiap pesan, panggilan, dan cerita kecil adalah bagian dari perjalanan yang sedang kita tulis bersama.","Every little moment counts."],
    ["Sebelum Buku Ini Berakhir","Halaman-halaman ini punya batas, tetapi masih banyak cerita yang belum kita tulis.","Our story continues."]
  ];
  const memories = [
    ["6 Juli 2026","Malam ketika cerita kita dimulai.","The night our story began."],
    ["Pukul 10:29 malam","Waktu kecil yang akan selalu punya arti besar bagi kita.","A special time for us."],
    ["Pertemuan di Litmatch","Awalnya hanya percakapan sederhana, lalu menjadi awal dari banyak cerita.","A simple beginning."],
    ["Pindah ke WhatsApp","Kita melanjutkan obrolan dan mulai mengenal satu sama lain lebih dekat.","Getting to know each other."],
    ["Hari-hari pertama","Ada salah paham dan perbedaan, tetapi kita juga mulai belajar memahami satu sama lain.","Learning to understand."],
    ["Panggilan pertama","Sebuah momen sederhana yang terasa begitu spesial.","A memorable first call."],
    ["Pesan-pesan kecil","Kadang satu pesan darimu bisa mengubah suasana hariku.","Your messages brighten my day."],
    ["Obrolan panjang","Waktu terasa cepat ketika kita punya banyak hal untuk diceritakan.","Time flies when we talk."],
    ["Mood kamu","Setiap suasana hatimu punya cerita sendiri.","Every mood has a story."],
    ["Sifat lupamu","Ada hal-hal yang kamu lupakan, tetapi momen bersamamu ingin kusimpan.","I'll remember our moments."],
    ["Saat kamu malas","Bahkan hari santai dan obrolan ringan bisa menjadi kenangan.","Even quiet days matter."],
    ["Panggilan sayang","Kata-kata kecil yang perlahan menjadi bahasa khas kita.","Our little language."],
    ["Cerita sebelum tidur","Obrolan malam yang membuat hari terasa lebih lengkap.","Our nighttime talks."],
    ["Tawa bersama","Momen ketika hal sederhana berubah menjadi sesuatu yang lucu.","Little moments of laughter."],
    ["Saat saling bercerita","Kita berbagi hal-hal yang mungkin tidak diketahui orang lain.","Sharing our stories."],
    ["Hari biasa","Tidak semua kenangan harus luar biasa untuk menjadi berharga.","Ordinary days matter."],
    ["Belajar sabar","Kita belajar bahwa memahami seseorang membutuhkan waktu.","Learning patience."],
    ["Saling mengenal","Sedikit demi sedikit, kita mengenal kebiasaan satu sama lain.","Knowing each other better."],
    ["Pesan manis","Beberapa kata sederhana bisa tinggal lama dalam ingatan.","Sweet words stay."],
    ["Rencana bertemu","Ada hari yang kita nantikan untuk bertemu secara langsung.","A meeting to look forward to."],
    ["Tahun depan","Sebuah harapan kecil yang ingin kita wujudkan bersama.","A hope for next year."],
    ["Impian 2028","Kamu pernah menyebut tahun 2028. Semoga waktu membawa kesempatan baik untuk kita.","A dream for 2028."],
    ["Empat bulan","Empat bulan yang penuh cerita dan pelajaran.","Four months together."],
    ["Foto-foto kita","Setiap foto menyimpan suasana dan kenangan yang berbeda.","Every photo tells a story."],
    ["Kata-kata kita","Panggilan kecil yang hanya punya arti khusus bagi kita.","Our special words."],
    ["Hari penuh rindu","Ada kalanya jarak membuat kita semakin menghargai waktu bersama.","Distance makes moments precious."],
    ["Saling mendukung","Kita ingin melihat satu sama lain tumbuh dan bahagia.","Supporting each other."],
    ["Cerita yang belum selesai","Masih banyak hal yang belum kita alami bersama.","More stories to come."],
    ["Halaman hari ini","Hari ini menjadi bagian baru dari perjalanan kita.","A new page today."],
    ["Kenangan berikutnya","Semoga masih banyak momen indah yang menunggu di depan.","More memories ahead."]
  ];
  const reasons = [
    "Aku suka caramu membuat percakapan sederhana terasa menyenangkan.",
    "Aku suka ketika kamu berbagi cerita tentang harimu.",
    "Aku suka kejujuranmu saat mengungkapkan perasaan.",
    "Aku suka caramu menjadi diri sendiri.",
    "Aku suka suara dan cara kamu berbicara.",
    "Aku suka pesan-pesan kecil darimu.",
    "Aku suka rasa penasaranmu terhadap banyak hal.",
    "Aku suka ketika kamu tertawa karena hal sederhana.",
    "Aku suka caramu menunjukkan perhatian.",
    "Aku suka keunikan sifatmu.",
    "Aku suka ketika kita bisa membicarakan apa saja.",
    "Aku suka caramu membuatku belajar lebih sabar.",
    "Aku suka semangatmu mengejar hal yang kamu inginkan.",
    "Aku suka saat kamu mengingat hal-hal kecil.",
    "Aku suka cerita spontan yang kamu bagikan.",
    "Aku suka ketika kamu mempercayakan ceritamu kepadaku.",
    "Aku suka caramu menghadapi hari-harimu.",
    "Aku suka panggilan lucu yang kita gunakan.",
    "Aku suka saat kita tertawa bersama.",
    "Aku suka bahwa kita masih terus belajar satu sama lain.",
    "Aku suka caramu menghargai momen kecil.",
    "Aku suka saat kamu berbagi impian.",
    "Aku suka percakapan malam kita.",
    "Aku suka caramu membuat hari biasa terasa berbeda.",
    "Aku suka sisi ceria dan sisi tenangmu.",
    "Aku suka setiap foto yang menyimpan cerita tentangmu.",
    "Aku suka ketika kita saling memberi semangat.",
    "Aku suka bahwa kita punya cerita sendiri.",
    "Aku suka kesempatan untuk mengenalmu lebih jauh.",
    "Aku suka menjadi bagian dari perjalanan ini."
  ];
  const games = [
    ["Kuis Kenangan","Tanggal berapa cerita kita dimulai?","6 Juli 2026","Do you remember our date?"],
    ["Kuis Waktu","Pukul berapa hubungan kita dimulai?","10:29 malam","Our special time."],
    ["Tebak Tempat","Di aplikasi mana kita pertama kali bertemu?","Litmatch","Where we first met."],
    ["Lanjut ke Mana?","Setelah Litmatch, kita pindah mengobrol ke mana?","WhatsApp","Where we continued talking."],
    ["Momen Spesial","Apa salah satu momen pertama yang paling kuingat?","Panggilan pertama kita.","Our first call."],
    ["Tebak Tahun","Tahun berapa kamu pernah bilang ingin bertemu?","2028","The year you mentioned."],
    ["Kuis Panggilan","Mana salah satu panggilan sayang dariku?","Bebyycuu","One of my nicknames."],
    ["Pilih Kenangan","Apa yang membuat foto menjadi spesial?","Cerita di baliknya.","The story behind it."],
    ["Tantangan Senyum","Coba tersenyum selama lima detik.","Senyummu sudah menjadi hadiah.","Your smile is a gift."],
    ["Pesan Rahasia","Apa yang ingin selalu kuingatkan kepadamu?","Kamu berharga dan pantas bahagia.","You deserve happiness."],
    ["Kuis Kita","Berapa bulan yang sedang kita rayakan?","Empat bulan!","Four months!"],
    ["Tantangan Manis","Sebutkan satu hal kecil yang membuatmu bahagia hari ini.","Hal kecil juga layak dirayakan.","Celebrate little things."],
    ["Tebak Perasaan","Apa yang ingin kubangun bersamamu?","Hubungan yang saling menghargai.","A respectful relationship."],
    ["Misi Hari Ini","Kirim satu pesan baik untuk dirimu sendiri.","Jangan lupa menyayangi dirimu.","Be kind to yourself."],
    ["Kuis Foto","Apa yang tersimpan di setiap foto?","Kenangan dan cerita.","Memories and stories."],
    ["Pilih Satu","Lebih penting mana: mendengarkan atau selalu menang?","Saling mendengarkan.","Listening matters."],
    ["Tantangan Kenangan","Ingat satu percakapan kita yang membuatmu tertawa.","Simpan momen itu baik-baik.","Keep that memory."],
    ["Pesan Tersembunyi","Baca huruf pertama dari nama halaman ini: AIRA.","Aira, kamu istimewa.","Aira, you are special."],
    ["Kuis Masa Depan","Apa yang ingin kita lakukan suatu hari nanti?","Bertemu dan membuat kenangan baru.","Meet and make memories."],
    ["Tantangan Kecil","Tuliskan satu impian yang ingin kamu capai.","Aku berharap kamu berhasil.","I hope you succeed."],
    ["Kuis Perjalanan","Apa yang sedang kita rayakan sekarang?","Perjalanan empat bulan kita.","Our four-month journey."],
    ["Misi Bahagia","Pikirkan tiga hal yang kamu syukuri hari ini.","Semoga ada banyak hal baik.","Find reasons to be grateful."],
    ["Pertanyaan Manis","Apa yang membuat hubungan terasa sehat?","Kejujuran, rasa hormat, dan komunikasi.","Honesty and respect."],
    ["Level Terakhir","Siapa tokoh utama dalam buku kecil ini?","Aira, tentu saja!","Aira, of course!"]
  ];
  const future = [
    ["Pertemuan Pertama","Semoga suatu hari kita bisa bertemu dan mengubah percakapan menjadi kenangan nyata.","A real memory someday."],
    ["Tempat Baru","Aku berharap kita bisa mengunjungi tempat baru dan menikmati suasana bersama.","Explore somewhere new."],
    ["Foto Bersama","Semoga suatu hari kita punya banyak foto bersama untuk dikenang.","More photos together."],
    ["Percakapan Langsung","Aku ingin mendengar ceritamu secara langsung, bukan hanya melalui layar.","Talking face to face."],
    ["Makan Bersama","Semoga ada kesempatan untuk menikmati makanan dan cerita di satu meja.","A meal together."],
    ["Hari yang Sederhana","Aku ingin suatu hari menikmati hari biasa bersamamu tanpa terburu-buru.","A peaceful day together."],
    ["Impianmu","Aku berharap kamu bisa mencapai hal-hal yang selama ini kamu impikan.","May your dreams come true."],
    ["Impian Kita","Semoga kita terus punya tujuan baik dan saling mendukung untuk mencapainya.","Supporting shared dreams."],
    ["Lebih Banyak Tawa","Semoga hari-hari berikutnya dipenuhi lebih banyak alasan untuk tertawa.","More laughter ahead."],
    ["Belajar Hal Baru","Semoga kita bisa terus belajar dan tumbuh menjadi pribadi yang lebih baik.","Keep growing."],
    ["Kenangan Baru","Masih banyak cerita yang belum kita tulis. Semoga kita punya kesempatan membuatnya.","New memories await."],
    ["Saling Menghargai","Aku berharap kita selalu menjaga rasa hormat, bahkan ketika pendapat kita berbeda.","Always respect each other."],
    ["Hari Istimewa","Semoga kita bisa merayakan lebih banyak hari istimewa bersama.","More special days."],
    ["Perjalanan Panjang","Tidak perlu terburu-buru. Aku berharap setiap langkah dijalani dengan baik.","One step at a time."],
    ["Masa Depanmu","Semoga masa depanmu dipenuhi kesempatan, kesehatan, dan kebahagiaan.","Wishing you a bright future."],
    ["Masa Depanku","Aku juga ingin terus berkembang dan menjadi pribadi yang lebih baik.","I want to grow too."],
    ["Rencana 2028","Semoga harapan yang pernah kita bicarakan menemukan jalan untuk menjadi nyata.","May our hope come true."],
    ["Hari yang Dinanti","Semoga saat kita bertemu nanti, kita punya banyak cerita untuk dibagikan.","A day to remember."],
    ["Buku Berikutnya","Mungkin suatu hari kita akan membuat buku baru berisi kenangan yang lebih banyak.","Another book someday."],
    ["Halaman Terakhir","Buku ini selesai, tetapi perjalanan dan cerita kita masih terus berjalan.","Our story goes on."]
  ];
  /* =====================================
     PAGE DESIGN
  ===================================== */
  function makePage(title, text, english, number, extra = "") {
    const page = document.createElement("article");
    page.className = "page generated-page";
    page.dataset.page = number;
    page.style.cssText = `
      position:absolute;
      inset:0;
      transform-origin:left center;
      backface-visibility:hidden;
      overflow:hidden;
      background:#f6edda;
      color:#34251b;
      padding:clamp(16px,4%,30px);
    `;
    const inner = document.createElement("div");
    inner.style.cssText = `
      width:100%;
      height:100%;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      text-align:center;
      gap:14px;
      overflow:hidden;
    `;
    const small = document.createElement("div");
    small.textContent = `AIRA & SHIVAM  ·  ${String(number).padStart(3, "0")}`;
    small.style.cssText = "font-size:9px;letter-spacing:2px;color:#9b7953;";
    const heading = document.createElement("h2");
    heading.textContent = title;
    heading.style.cssText = `
      font-family:Georgia,serif;
      font-size:clamp(17px,3vw,25px);
      line-height:1.3;
      color:#68462e;
      font-weight:normal;
      max-width:100%;
    `;
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    paragraph.style.cssText = `
      font-family:Georgia,serif;
      font-size:clamp(12px,1.65vw,16px);
      line-height:1.8;
      max-width:95%;
      color:#493629;
    `;
    const translation = document.createElement("p");
    translation.textContent = english;
    translation.style.cssText = `
      font-family:Arial,sans-serif;
      font-size:clamp(9px,1.2vw,12px);
      line-height:1.5;
      color:#967d63;
      font-style:italic;
      max-width:95%;
    `;
    inner.append(small, heading, paragraph, translation);
    if (extra) {
      const extraBox = document.createElement("div");
      extraBox.innerHTML = extra;
      inner.appendChild(extraBox);
    }
    page.appendChild(inner);
    return page;
  }
  function makePhotoPage(filename, index, number) {
    const page = document.createElement("article");
    page.className = "page generated-page photo-memory-page";
    page.dataset.page = number;
    page.style.cssText = `
      position:absolute;
      inset:0;
      transform-origin:left center;
      backface-visibility:hidden;
      overflow:hidden;
      background:#f6edda;
      color:#34251b;
      padding:clamp(12px,3%,24px);
    `;
    const inner = document.createElement("div");
    inner.style.cssText = `
      height:100%;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      gap:12px;
      text-align:center;
    `;
    const label = document.createElement("div");
    label.textContent = `KENANGAN KITA · ${String(index + 1).padStart(2, "0")}`;
    label.style.cssText = "font-size:9px;letter-spacing:2px;color:#96734d;";
    const frame = document.createElement("div");
    frame.style.cssText = `
      width:100%;
      height:62%;
      min-height:0;
      padding:8px;
      background:#fffaf0;
      box-shadow:0 10px 24px rgba(55,35,18,.22);
      transform:rotate(-1deg);
      overflow:hidden;
    `;
    const img = document.createElement("img");
    img.src = `assets/photos/${filename}`;
    img.alt = `Kenangan Aira dan Shivam ${index + 1}`;
    img.loading = "lazy";
    img.style.cssText = "width:100%;height:100%;object-fit:contain;display:block;";
    img.onerror = () => {
      img.alt = "Foto tidak dapat dimuat";
      frame.innerHTML = "<p style='color:#806b52;font-size:12px;'>Foto belum tersedia</p>";
    };
    frame.appendChild(img);
    const caption = document.createElement("p");
    caption.textContent = [
      "Satu foto, banyak cerita yang ingin kusimpan.",
      "Momen kecil yang punya arti besar.",
      "Kenangan ini punya tempat tersendiri.",
      "Semoga masih banyak cerita indah berikutnya.",
      "Sebuah potongan kecil dari perjalanan kita."
    ][index % 5];
    caption.style.cssText = `
      font-family:Georgia,serif;
      font-size:clamp(11px,1.5vw,15px);
      line-height:1.5;
      color:#604630;
      max-width:95%;
    `;
    const english = document.createElement("small");
    english.textContent = [
      "One photo, many memories.",
      "A little moment with big meaning.",
      "A memory worth keeping.",
      "More beautiful stories ahead.",
      "A little part of our journey."
    ][index % 5];
    english.style.cssText = "font-size:9px;color:#967d63;font-style:italic;";
    inner.append(label, frame, caption, english);
    page.appendChild(inner);
    return page;
  }
  /* =====================================
     KEEP THE ORIGINAL 10 PAGES
     AND ADD 190 NEW PAGES
  ===================================== */
  const originalPages = Array.from(book.querySelectorAll(".page"))
    .sort((a, b) => Number(a.dataset.page) - Number(b.dataset.page));
  // Existing four photo frames use the first four photos.
  const existingPhotoFrames = Array.from(
    book.querySelectorAll(".photo-placeholder")
  );
  existingPhotoFrames.forEach((frame, index) => {
    if (!photos[index]) return;
    const img = document.createElement("img");
    img.src = `assets/photos/${photos[index]}`;
    img.alt = `Kenangan Aira ${index + 1}`;
    img.loading = "lazy";
    img.style.cssText = "width:100%;height:100%;object-fit:contain;display:block;";
    frame.style.overflow = "hidden";
    frame.replaceChildren(img);
  });
  // Remove old generated pages if the script is initialized again.
  book.querySelectorAll(".generated-page").forEach(page => page.remove());
  let nextNumber = 11;
  const generatedPages = [];
  // 46 remaining photos: total 50 including the original four.
  for (let i = 4; i < photos.length; i++) {
    generatedPages.push(makePhotoPage(photos[i], i, nextNumber++));
  }
  // 40 letters.
  for (let i = 0; i < 40; i++) {
    const item = letters[i % letters.length];
    const extra = i >= letters.length
      ? `<p style="font-size:10px;color:#9b7953;">Surat kecil nomor ${i + 1} untuk Aira ♡</p>`
      : "";
    generatedPages.push(makePage(item[0], item[1], item[2], nextNumber++, extra));
  }
  // 30 memories.
  memories.forEach(item => {
    generatedPages.push(makePage(item[0], item[1], item[2], nextNumber++));
  });
  // 30 reasons.
  reasons.forEach((reason, i) => {
    generatedPages.push(
      makePage(
        `Alasan ${i + 1} — Aku Menyukaimu`,
        reason,
        "One more reason to appreciate you.",
        nextNumber++
      )
    );
  });
  // 24 little games with reveal buttons.
  games.forEach((game, i) => {
    const buttonId = `reveal-${i}`;
    const extra = `
      <div style="margin-top:8px;">
        <button
          type="button"
          id="${buttonId}"
          style="
            border:1px solid #a88760;
            background:#efe0c5;
            color:#60452e;
            padding:9px 14px;
            border-radius:20px;
            font-size:11px;
            cursor:pointer;
          "
        >Lihat jawabannya ♡</button>
        <p
          id="answer-${i}"
          style="display:none;margin-top:12px;font-size:12px;color:#805d3c;"
        >${game[2]}</p>
      </div>
    `;
    const page = makePage(
      game[0],
      game[1],
      game[3],
      nextNumber++,
      extra
    );
    const button = page.querySelector(`#${buttonId}`);
    const answer = page.querySelector(`#answer-${i}`);
    button.addEventListener("pointerdown", event => event.stopPropagation());
    button.addEventListener("click", event => {
      event.stopPropagation();
      answer.style.display = "block";
      button.style.display = "none";
    });
    generatedPages.push(page);
  });
  // 20 future dream pages.
  future.forEach(item => {
    generatedPages.push(makePage(item[0], item[1], item[2], nextNumber++));
  });
  // Append generated pages and sort all 200 pages in reading order.
  generatedPages.forEach(page => book.appendChild(page));
  pages = Array.from(book.querySelectorAll(".page"))
    .sort((a, b) => Number(a.dataset.page) - Number(b.dataset.page));
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
  let coverStartY = 0;
  opening.addEventListener("touchstart", event => {
    coverStartY = event.changedTouches[0].clientY;
  }, { passive: true });
  opening.addEventListener("touchend", event => {
    const endY = event.changedTouches[0].clientY;
    if (coverStartY - endY > 40) openBook();
  }, { passive: true });
  coverBook.addEventListener("click", openBook);
  /* =====================================
     PAGE SETUP
  ===================================== */
  function updatePages() {
    pages.forEach((page, index) => {
      const pageNumber = index + 1;
      page.style.transition =
        "transform .65s cubic-bezier(.2,.7,.15,1)";
      if (pageNumber <= current) {
        page.style.transform = "rotateY(-180deg)";
        page.style.zIndex = String(pageNumber);
        page.style.pointerEvents = "none";
      } else {
        page.style.transform = "rotateY(0deg)";
        page.style.zIndex = String(total - pageNumber + 10);
        page.style.pointerEvents = "auto";
      }
    });
    currentPage.textContent = current;
    previousButton.disabled = current <= 0;
    nextButton.disabled = current >= total;
  }
  /* =====================================
     DRAGGING
  ===================================== */
  function getActivePage() {
    if (current >= total) return null;
    return pages[current];
  }
  function startDrag(clientX) {
    if (!opened) return;
    const activePage = getActivePage();
    if (!activePage) return;
    dragging = true;
    startX = clientX;
    currentX = clientX;
    activePage.style.transition = "none";
  }
  function moveDrag(clientX) {
    if (!dragging) return;
    currentX = clientX;
    const activePage = getActivePage();
    if (!activePage) return;
    const rect = book.getBoundingClientRect();
    const width = rect.width / 2;
    let distance = startX - currentX;
    distance = Math.max(0, Math.min(distance, width));
    const progress = distance / width;
    const angle = -180 * progress;
    activePage.style.transform = `rotateY(${angle}deg)`;
    const shadow = 0.15 + progress * 0.45;
    activePage.style.boxShadow = `
      inset 12px 0 22px rgba(70,45,25,.13),
      ${-8 * progress}px
      ${8 * progress}px
      ${18 + progress * 20}px
      rgba(0,0,0,${shadow})
    `;
  }
  function endDrag() {
    if (!dragging) return;
    dragging = false;
    const activePage = getActivePage();
    if (!activePage) return;
    const distance = startX - currentX;
    const half = book.getBoundingClientRect().width / 2;
    activePage.style.transition =
      "transform .55s cubic-bezier(.2,.8,.15,1)";
    if (distance > half * 0.25) {
      current = Math.min(current + 1, total);
    }
    updatePages();
    activePage.style.boxShadow = "";
  }
  /* =====================================
     TOUCH EVENTS
  ===================================== */
  book.addEventListener("touchstart", event => {
    if (event.target.closest("button")) return;
    startDrag(event.changedTouches[0].clientX);
  }, { passive: true });
  book.addEventListener("touchmove", event => {
    if (!dragging) return;
    moveDrag(event.changedTouches[0].clientX);
  }, { passive: true });
  book.addEventListener("touchend", endDrag, { passive: true });
  book.addEventListener("touchcancel", endDrag, { passive: true });
  /* =====================================
     MOUSE EVENTS
  ===================================== */
  book.addEventListener("mousedown", event => {
    if (event.target.closest("button")) return;
    startDrag(event.clientX);
  });
  window.addEventListener("mousemove", event => {
    moveDrag(event.clientX);
  });
  window.addEventListener("mouseup", endDrag);
  /* =====================================
     PAGE BUTTONS
  ===================================== */
  nextButton.addEventListener("click", () => {
    if (!opened || current >= total) return;
    current++;
    updatePages();
  });
  previousButton.addEventListener("click", () => {
    if (!opened || current <= 0) return;
    current--;
    updatePages();
  });
  /* =====================================
     KEYBOARD
  ===================================== */
  document.addEventListener("keydown", event => {
    if (!opened) return;
    if (event.key === "ArrowRight" && current < total) {
      current++;
      updatePages();
    }
    if (event.key === "ArrowLeft" && current > 0) {
      current--;
      updatePages();
    }
  });
  /* =====================================
     INITIAL STATE
  ===================================== */
  flipbookScreen.classList.remove("active");
  book.style.opacity = "0";
});
