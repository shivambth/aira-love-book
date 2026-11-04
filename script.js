/**
 * BUKU CINTA 4 BULAN - AIRA & SHIVAM
 * Indonesian Main Language + English Subtitles Toggle
 * 3D Page Flip Book with Interleaved Paragraphs & Cute Games
 */

const USER_DATA = {
    herName: "Aira",
    myName: "Shivam",
    nicknames: ["bebyycuu", "cantikkcuu", "Duniyakuu", "darlingcuuu", "istriicuuuu", "ciyanggcuu"],
    lastNickname: "lesbicuuu",
    startDate: "6 July 2026 (10:29 PM)",
    firstMet: "Litmatch",
    dreamMeeting: "Year 2028"
};

let showEnglish = true;
let currentPage = 0;
const totalPages = 150;

// Dynamic 150 Pages Generator with Indonesian Content & English Subtitles
function generateBookPages() {
    const pages = [];

    // Page 1: Cover
    pages.push({
        title: "Buku Cinta Kita 📖❤️",
        indonesian1: `Halo ${USER_DATA.herName} ${USER_DATA.nicknames[0]}! Aku membuat buku digital 3D khusus ini untuk merayakan 4 bulan perjalanan cinta kita yang indah.`,
        english1: `Hello ${USER_DATA.herName} my baby! I created this special 3D digital book to celebrate our beautiful 4-month love journey.`,
        indonesian2: `Jangan terburu-buru ya, nikmati setiap halaman karena setiap kata di sini ditulis dengan seluruh hatiku untukmu, ${USER_DATA.nicknames[1]}.`,
        english2: `Please don't rush, enjoy every single page because every word here is written with all my heart for you.`,
        photo: "photo01.jpg",
        photoStyle: "polaroid"
    });

    // Page 2: Litmatch Meeting
    pages.push({
        title: "Pertemuan Pertama di Litmatch ✨",
        indonesian1: `Semuanya dimulai pada tanggal ${USER_DATA.startDate}. Kita pertama kali berkenalan di Litmatch, dan pada malam yang sama jam 10:29 malam, kita berpindah ke WhatsApp untuk mengobrol lebih jauh.`,
        english1: `It all started on ${USER_DATA.startDate}. We first met on Litmatch, and on the same night at 10:29 PM, we moved to WhatsApp to talk deeper.`,
        indonesian2: `Malam itu menjadi awal dari segalanya. Suaramu, caramu meresponku, dan kehangatanmu membuat ${USER_DATA.myName} langsung merasa bahwa kamu adalah seseorang yang sangat istimewa.`,
        english2: `That night became the beginning of everything. Your voice and warmth made me feel instantly that you are someone very special.`,
        photo: "photo02.jpg",
        photoStyle: "heart-shape"
    });

    // Page 3: 10 Days Fights & Cute Bond
    pages.push({
        title: "Awal yang Penuh Warna 💖",
        indonesian1: `Di 10 hari pertama, kita sempat sering bertengkar kecil karena penyesuaian. Tapi setelah melewati masa itu, hubungan kita berubah menjadi sangat bahagia dan penuh dengan kasih sayang.`,
        english1: `In the first 10 days, we had small fights while adjusting. But after crossing that, our relationship became endlessly happy and sweet.`,
        indonesian2: `Ingatkah kamu saat telepon pertama kita? Ketika kita berciuman di telepon, itu adalah momen paling manis yang tidak akan pernah aku lupakan, ${USER_DATA.nicknames[2]}.`,
        english2: `Do you remember our first phone call? When we kissed over the call, it was the sweetest moment I will never forget.`,
        photo: "photo03.jpg",
        photoStyle: "stamp-style"
    });

    // Page 4: Interactive Game 1
    pages.push({
        title: "Game 1: Quiz Kenangan 🧠",
        indonesian1: `Ayo uji seberapa ingat kamu tentang awal perjalanan kita, ${USER_DATA.nicknames[3]}! Klik tombol di bawah untuk membuka game kuis lucu.`,
        english1: `Let's test how well you remember our beginning! Click the button below to open a cute quiz game.`,
        isGamePage: true,
        gameId: 1
    });

    // Generate Pages 5 to 149 dynamically following Paragraph -> Photo -> Paragraph structure
    for (let i = 5; i < totalPages; i++) {
        const photoNum = String((i % 45) + 1).padStart(2, '0');
        const styles = ['polaroid', 'heart-shape', 'stamp-style'];
        const chosenStyle = styles[i % styles.length];

        if (i % 12 === 0) {
            // Game Pages
            pages.push({
                title: `Game Cute #${Math.floor(i / 12)} 🎮`,
                indonesian1: `Waktunya bermain game kecil bersama! Selesaikan tantangan ini untuk membuka pesan cinta tersembunyi dari ${USER_DATA.myName}.`,
                english1: `Time to play a cute mini-game together! Complete this challenge to unlock a hidden love message.`,
                isGamePage: true,
                gameId: (Math.floor(i / 12) % 10) + 1
            });
        } else {
            pages.push({
                title: `Momen Indah #${i} 💕`,
                indonesian1: `Setiap hari bersamamu terasa seperti impian yang jadi kenyataan. Meskipun kamu terkadang mudah berubah suasana hati (bad mood), pemalas, dan pelupa 😭, aku tetap mencintaimu sepenuh hatiku, ${USER_DATA.nicknames[i % USER_DATA.nicknames.length]}.`,
                english1: `Every day with you feels like a dream come true. Even when you are moody, lazy, and forgetful 😭, I still love you completely.`,
                photo: `photo${photoNum}.jpg`,
                photoStyle: chosenStyle,
                indonesian2: `Saat kita bertemu nanti di tahun ${USER_DATA.dreamMeeting}, hal pertama yang akan aku lakukan adalah memelukmu erat-erat dan menciummu tanpa henti selama 2-3 jam! Aku sangat merindukanmu, ${USER_DATA.nicknames[0]}.`,
                english2: `When we meet in ${USER_DATA.dreamMeeting}, the first thing I will do is hug you tightly and kiss you non-stop for 2-3 hours! I miss you so much.`
            });
        }
    }

    // Page 150: Final Screen
    pages.push({
        title: "Bab 4 Selesai, Bab 5 Dimulai! 💍",
        indonesian1: `Terima kasih telah menjadi bagian paling indah dalam hidupku selama 4 bulan ini. Tetap memilihmu, tetap mencintaimu, dan tetap kita. Selamat 4 Bulan, ${USER_DATA.lastNickname}! ❤️`,
        english1: `Thank you for being the most beautiful part of my life for these 4 months. Still choosing you, still loving you, still us. Happy 4 Months, my love! ❤️`,
        photo: "photo50.jpg",
        photoStyle: "polaroid"
    });

    return pages;
}

const bookData = generateBookPages();

// Render Pages into 3D Stage
function renderBook() {
    const container = document.getElementById('book-container');
    container.innerHTML = '';

    bookData.forEach((page, index) => {
        const pageEl = document.createElement('div');
        pageEl.className = `book-page ${index === 0 ? 'active' : ''}`;
        pageEl.style.zIndex = totalPages - index;

        let contentHTML = `
            <div class="page-header-cute">
                <h2>${page.title}</h2>
            </div>
            <p class="indonesian-text">${page.indonesian1}</p>
            <p class="english-subtext ${showEnglish ? '' : 'hidden'}">${page.english1}</p>
        `;

        if (page.photo) {
            contentHTML += `
                <div class="photo-container">
                    <div class="photo-frame ${page.photoStyle}">
                        <div class="placeholder-box">
                            <span>🖼️ ${page.photo}</span>
                            <br><small>(assets/photos/${page.photo})</small>
                        </div>
                    </div>
                </div>
            `;
        }

        if (page.indonesian2) {
            contentHTML += `
                <p class="indonesian-text">${page.indonesian2}</p>
                <p class="english-subtext ${showEnglish ? '' : 'hidden'}">${page.english2}</p>
            `;
        }

        if (page.isGamePage) {
            contentHTML += `
                <div style="text-align: center; margin-top: 20px;">
                    <button class="cute-btn" style="padding: 12px 24px; font-size: 1rem;" onclick="launchGame(${page.gameId})">Mainkan Game #${page.gameId} 🎮</button>
                </div>
            `;
        }

        pageEl.innerHTML = contentHTML;
        container.appendChild(pageEl);
    });

    updatePageIndicator();
}

// Page Navigation Logic
document.getElementById('next-page-btn').addEventListener('click', nextPage);
document.getElementById('prev-page-btn').addEventListener('click', prevPage);

function nextPage() {
    if (currentPage < totalPages - 1) {
        const pages = document.querySelectorAll('.book-page');
        pages[currentPage].classList.add('flipped');
        pages[currentPage].classList.remove('active');
        currentPage++;
        pages[currentPage].classList.add('active');
        updatePageIndicator();
    }
}

function prevPage() {
    if (currentPage > 0) {
        const pages = document.querySelectorAll('.book-page');
        currentPage--;
        pages[currentPage].classList.remove('flipped');
        pages[currentPage].classList.add('active');
        updatePageIndicator();
    }
}

function updatePageIndicator() {
    document.getElementById('page-indicator').textContent = `Halaman ${currentPage + 1} / ${totalPages}`;
}

// Toggle English Subtitles
document.getElementById('toggle-lang-btn').addEventListener('click', () => {
    showEnglish = !showEnglish;
    document.getElementById('toggle-lang-btn').textContent = `🌐 EN Text: ${showEnglish ? 'ON' : 'OFF'}`;
    document.querySelectorAll('.english-subtext').forEach(el => {
        if (showEnglish) el.classList.remove('hidden');
        else el.classList.add('hidden');
    });
});

// Launch 10 Games
function launchGame(id) {
    const modal = document.getElementById('game-modal');
    const content = document.getElementById('modal-game-content');
    modal.classList.remove('hidden');

    if (id === 1) {
        content.innerHTML = `
            <h3>🧠 Kuis Pertama Kita</h3>
            <p style="margin: 15px 0;">Di mana pertama kali kita bertemu?</p>
            <button class="cute-btn" onclick="alert('Benar! Litmatch ❤️'); closeModal();" style="margin: 5px;">A. Litmatch</button>
            <button class="cute-btn" onclick="alert('Salah wkwk!');" style="margin: 5px;">B. Instagram</button>
        `;
    } else if (id === 2) {
        content.innerHTML = `
            <h3>🔒 Kombinasi Rahasia Cinta</h3>
            <p style="margin: 10px 0;">Masukkan tahun impian pertemuan kita!</p>
            <input type="text" id="lock-input" placeholder="Tahun?" style="padding: 8px; border-radius: 8px; border: 1px solid #ccc; text-align: center;">
            <br><button class="cute-btn" style="margin-top: 10px;" onclick="checkLock()">Buka Kunci</button>
        `;
    } else {
        content.innerHTML = `
            <h3>✨ Game Mini Cute #${id}</h3>
            <p style="margin: 15px 0;">Kamu mendapatkan ciuman virtual dari Shivam! MUAAAH! 😘</p>
            <button class="cute-btn" onclick="closeModal()">Terima Kasih ❤️</button>
        `;
    }
}

function checkLock() {
    const val = document.getElementById('lock-input').value;
    if (val === '2028') {
        alert('Benar! Sampai jumpa di tahun 2028, Aira! ❤️');
        closeModal();
    } else {
        alert('Salah, petunjuk: tahun pertemuan kita!');
    }
}

function closeModal() {
    document.getElementById('game-modal').classList.add('hidden');
}

document.getElementById('close-modal-btn').addEventListener('click', closeModal);

// Initialize
document.addEventListener('DOMContentLoaded', renderBook);
