// ===== DATA =====
const menuData = [
  {
    id: 1,
    nama: "Kopi Gayo Asli",
    harga: 15000,
    cat: "Kopi",
    img: "WhatsApp Image 2026-05-07 at 16.33.50.jpeg",
    desc: "Arabika premium single origin dari dataran tinggi Gayo. Kaya aroma, body penuh, dengan sentuhan fruity yang khas.",
    badge: "⭐ 4.9",
  },
  {
    id: 2,
    nama: "Kopi Sanger",
    harga: 12000,
    cat: "Kopi",
    img: "WhatsApp Image 2026-05-07 at 16.33.49 (1).jpeg",
    desc: "Kopi susu khas Aceh yang legendaris. Perpaduan espresso pekat dengan susu kental manis yang memanjakan lidah.",
    badge: "⭐ 4.8",
  },
  {
    id: 3,
    nama: "Cold Brew",
    harga: 10000,
    cat: "Kopi",
    img: "WhatsApp Image 2026-05-07 at 16.33.49.jpeg",
    desc: "Kopi diseduh dingin selama 12 jam. Smooth, tidak asam, cocok untuk hari yang panas.",
    badge: "🆕 Baru",
  },
  {
    id: 4,
    nama: "Mie Aceh",
    harga: 15000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-07 at 22.58.14.jpeg",
    desc: "Mie rempah khas Aceh yang kaya bumbu. Tersedia pilihan kuah kuning, goreng, dan berkuah.",
    badge: "🔥 Best Seller",
  },
  {
    id: 5,
    nama: "Nasi Goreng",
    harga: 12000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-07 at 22.59.59.jpeg",
    desc: "Nasi goreng dengan bumbu khas Aceh. Wangi rempah yang menggugah selera, disajikan dengan pelengkap.",
    badge: "⭐ 4.7",
  },
  {
    id: 6,
    nama: "Nasi Goreng Spesial",
    harga: 17000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-07 at 22.52.13.jpeg",
    desc: "Nasi goreng yg memiliki porsi spesial yg dipadukan dengan berbagai macam olahan, seperti daging sapi,bumbu khas dan juga ditambahkan olahan seafood.",
    badge: "🔥 Best Seller",
  },
  {
    id: 7,
    nama: "Roti Bakar",
    harga: 5000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-07 at 16.33.48.jpeg",
    desc: "Roti bakar garing dengan pilihan topping: cokelat, keju, atau selai nanas asli Aceh.",
    badge: "🍞 Sarapan",
  },
  {
    id: 8,
    nama: "Es Teh Gayo",
    harga: 8000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-07 at 22.53.12.jpeg",
    desc: "Teh pilihan dari kebun Gayo diseduh segar, disajikan dingin dengan gula aren alami.",
    badge: "🌿 Segar",
  },
  {
    id: 9,
    nama: "Juice Alpukat",
    harga: 8000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-07 at 22.54.09.jpeg",
    desc: "Jus alpukat creamy dengan campuran susu segar dan sedikit madu. Kaya dan mengenyangkan.",
    badge: "🥑 Sehat",
  },
  {
    id: 10,
    nama: "Ifumi Seafood",
    harga: 15000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-07 at 23.10.06.jpeg",
    desc: "Perpaduan antara Mie dan berbagai macam olahan daging laut yg enak untuk di santap.",
    badge: "🔥 Best Seller",
  },
  {
    id: 11,
    nama: "Kentang Goreng",
    harga: 7000,
    cat: "Cemilan",
    img: "WhatsApp Image 2026-05-07 at 16.33.46 copy.jpeg",
    desc: "Kentang goreng renyah di luar lembut di dalam, disajikan dengan saus pilihan yang gurih dan menggugah selera.",
    badge: "🔥 Best Seller",
  },
  {
    id: 12,
    nama: "Mie Ayam",
    harga: 7000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-07 at 16.33.46.jpeg",
    desc: "Mie kenyal dengan potongan ayam bumbu kecap dan kuah kaldu hangat yang kaya rasa.",
    badge: "⭐ 8.0",
  },
  {
    id: 13,
    nama: "Cappucino Dingin",
    harga: 8000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-07 at 16.33.45.jpeg",
    desc: "Espresso dingin bertemu busa susu lembut yang creamy — segar di tiap tegukan, pas untuk cuaca panas.",
    badge: "⭐ 7.0",
  },
  {
    id: 14,
    nama: "TST – Teh Susu Telur",
    harga: 10000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-07 at 23.21.23.jpeg",
    desc: "Minuman tradisional ikonik khas warung kopi Aceh — perpaduan teh pekat, susu kental manis, dan telur yang melegenda.",
    badge: "⭐ 9.0",
  },
  {
    id: 15,
    nama: "Juice Jeruk",
    harga: 5000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-09 at 10.58.11.jpeg",
    desc: "Jus jeruk segar diperas langsung tanpa tambahan pengawet, manis alami dan menyegarkan di segala suasana.",
    badge: "⭐ 9.0",
  },
  {
    id: 16,
    nama: "Juice Tomat",
    harga: 7000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-09 at 10.58.11 (1).jpeg",
    desc: "Jus tomat segar dicampur sedikit gula dan garam, kaya vitamin dan menyehatkan untuk menemani hari-harimu.",
    badge: "⭐ 8.0",
  },
  {
    id: 17,
    nama: "Kopi Susu Dingin",
    harga: 7000,
    cat: "Kopi",
    img: "WhatsApp Image 2026-05-09 at 10.58.12.jpeg",
    desc: "Kopi susu klasik disajikan dingin — harmoni sempurna antara espresso bold dan susu segar yang lembut.",
    badge: "⭐ 9.0",
  },
  {
    id: 18,
    nama: "Risol Mayo",
    harga: 7000,
    cat: "Cemilan",
    img: "WhatsApp Image 2026-05-09 at 10.58.12 (1).jpeg",
    desc: "Risol goreng renyah isi sayuran segar dengan saus mayo creamy — camilan favorit yang sulit ditolak.",
    badge: "🔥 Best Seller",
  },
  {
    id: 19,
    nama: "Piscok",
    harga: 5000,
    cat: "Cemilan",
    img: "WhatsApp Image 2026-05-09 at 10.58.12 (2).jpeg",
    desc: "Pisang coklat goreng dengan kulit renyah keemasan, isian pisang manis bertemu leleh coklat yang menggoda.",
    badge: "🔥 Best Seller",
  },
  {
    id: 20,
    nama: "Cireng Ayam Suwir",
    harga: 12000,
    cat: "Cemilan",
    img: "WhatsApp Image 2026-05-09 at 10.58.13.jpeg",
    desc: "Cireng aci goreng kenyal dengan isian ayam suwir berbumbu rempah khas Aceh yang gurih dan menggiurkan.",
    badge: "🔥 Best Seller",
  },
  {
    id: 21,
    nama: "Kue Putu",
    harga: 5000,
    cat: "Cemilan",
    img: "WhatsApp Image 2026-05-09 at 10.58.13 (1).jpeg",
    desc: "Kue tradisional dari tepung beras yang lembut, isi gula merah cair yang manis dan harum kelapa parut.",
    badge: "🔥 Best Seller",
  },
  {
    id: 22,
    nama: "Milo",
    harga: 7000,
    cat: "Minuman",
    img: "WhatsApp Image 2026-05-09 at 10.58.13 (2).jpeg",
    desc: "Minuman coklat malt bergizi dengan cita rasa khas yang akrab sejak kecil — tersedia hangat maupun dingin.",
    badge: "🔥 Best Seller",
  },
  {
    id: 23,
    nama: "Bakso Beranak",
    harga: 10000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-09 at 10.58.13 (3).jpeg",
    desc: "Semangkuk bakso isi daging sapi pilihan lengkap dengan pangsit renyah, mie, dan kuah kaldu yang kaya rasa.",
    badge: "🔥 Best Seller",
  },
  {
    id: 24,
    nama: "Ifumi Goreng",
    harga: 10000,
    cat: "Makanan",
    img: "WhatsApp Image 2026-05-09 at 10.58.14.jpeg",
    desc: "Ifumi versi goreng kering dengan topping seafood pilihan — tekstur garing di luar dan lembut di dalam.",
    badge: "⭐ 9.0",
  },
];

const cats = ["Semua", ...new Set(menuData.map((m) => m.cat))];
let activeCat = "Semua";
let cart = [];
let sheetItem = null;
let sheetQty = 1;
let sheetNote = "";
let activeVoucher = null; // { code, label, discount }
let showHistory = false;
let currentSort = 'default';

// ===== STORE STATUS =====
function getStoreStatus() {
  const now = new Date();
  // WIB = UTC+7
  const wib = new Date(now.getTime() + 7 * 60 * 60 * 1000);
  const day = wib.getUTCDay(); // 0=Sun, 1=Mon...6=Sat
  const hour = wib.getUTCHours();
  const minute = wib.getUTCMinutes();
  const timeDecimal = hour + minute / 60;

  let open = false;
  let openHour, closeHour;

  if (day === 0) {
    // Sunday
    openHour = 8;
    closeHour = 20;
  } else {
    // Mon-Sat
    openHour = 7;
    closeHour = 22;
  }

  open = timeDecimal >= openHour && timeDecimal < closeHour;

  // Calculate next open time
  const dayNames = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  let nextOpenText = "";
  if (!open) {
    if (timeDecimal < openHour) {
      nextOpenText = `hari ini pukul ${openHour.toString().padStart(2, "0")}:00`;
    } else {
      // Next day
      const nextDay = (day + 1) % 7;
      const nextOpen = nextDay === 0 ? 8 : 7;
      nextOpenText = `besok (${dayNames[nextDay]}) pukul ${nextOpen.toString().padStart(2, "0")}:00`;
    }
  }

  return { open, nextOpenText };
}

function updateStoreStatus() {
  const { open, nextOpenText } = getStoreStatus();
  const badge = document.getElementById("store-status-badge");
  const banner = document.getElementById("closed-banner");

  if (badge) {
    badge.innerHTML = open
      ? `<span class="status-dot open"></span>Buka`
      : `<span class="status-dot closed"></span>Tutup`;
    badge.className = "store-status-badge " + (open ? "open" : "closed");
  }

  if (banner) {
    if (!open) {
      banner.style.display = "block";
      banner.textContent = `⏰ Kami sedang tutup — Buka kembali ${nextOpenText}`;
    } else {
      banner.style.display = "none";
    }
  }
}

// ===== RENDER HOME =====
function renderRek() {
  const favs = menuData.filter((m) =>
    ["Kopi Gayo Asli", "Kopi Sanger", "Mie Aceh", "Cold Brew"].includes(m.nama),
  );
  document.getElementById("rek-scroll").innerHTML = favs
    .map(
      (m) => `
        <div class="rek-card" onclick="bukaDetail(${m.id})">
          <img src="${m.img}" alt="${m.nama}" loading="lazy"/>
          <div class="rek-card-body">
            <div class="badge">${m.badge}</div>
            <h4>${m.nama}</h4>
            <div class="price">${fmt(m.harga)}</div>
          </div>
        </div>
      `,
    )
    .join("");
}

// ===== RENDER CATEGORY PILLS =====
function renderCats() {
  const searchVal = document.getElementById("menu-search-input")?.value || "";
  const pillsEl = document.getElementById("cat-pills");
  if (searchVal.trim()) {
    pillsEl.style.display = "none";
    return;
  }
  pillsEl.style.display = "flex";
  pillsEl.innerHTML = cats
    .map(
      (c) => `
        <button class="cat-pill ${c === activeCat ? "active" : ""}" onclick="filterCat('${c}')">${c}</button>
      `,
    )
    .join("");
}

// ===== RENDER MENU GRID =====
function renderMenu() {
  const searchVal = (document.getElementById("menu-search-input")?.value || "")
    .trim()
    .toLowerCase();
  let filtered =
    activeCat === "Semua"
      ? menuData
      : menuData.filter((m) => m.cat === activeCat);
  if (searchVal) {
    filtered = menuData.filter((m) => m.nama.toLowerCase().includes(searchVal));
  }

  const grid = document.getElementById("menu-grid");

  // Show skeleton briefly on first load
  if (grid.dataset.firstLoad !== "done") {
    grid.innerHTML = Array(6)
      .fill(
        `<div class="skeleton-card"><div class="skeleton-img shimmer"></div><div class="skeleton-line shimmer" style="width:70%;margin:10px 12px 6px"></div><div class="skeleton-line shimmer" style="width:45%;margin:0 12px 12px"></div></div>`,
      )
      .join("");
    grid.dataset.firstLoad = "done";
    setTimeout(() => renderMenuCards(filtered, grid), 500);
    return;
  }

  renderMenuCards(filtered, grid);
}

function renderMenuCards(filtered, grid) {
  let sorted = [...filtered];
  if (typeof currentSort !== 'undefined') {
    if (currentSort === 'asc') sorted.sort((a,b) => a.harga - b.harga);
    else if (currentSort === 'desc') sorted.sort((a,b) => b.harga - a.harga);
    else if (currentSort === 'rating') {
      sorted.sort((a,b) => {
        const ra = parseFloat(a.badge.match(/[\d.]+/)?.[0] || 0);
        const rb = parseFloat(b.badge.match(/[\d.]+/)?.[0] || 0);
        return rb - ra;
      });
    }
  }
  if (!sorted.length) {
    grid.innerHTML = `<div class="menu-empty" style="grid-column:span 2;text-align:center;padding:60px 20px;color:var(--muted);font-size:14px">Tidak ada menu yang cocok 😔</div>`;
    return;
  }
  grid.innerHTML = sorted
    .map(
      (m) => `
        <div class="menu-card" onclick="bukaDetail(${m.id})">
          ${m.badge ? `<div class="menu-card-badge">${m.badge}</div>` : ''}
          <img src="${m.img}" alt="${m.nama}" loading="lazy"
            onerror="this.style.display='none';this.insertAdjacentHTML('afterend','<div class=\\'img-placeholder\\'>☕</div>')"/>
          <div class="menu-card-body">
            <h4>${m.nama}</h4>
            <div class="menu-card-footer">
              <span class="price">${fmt(m.harga)}</span>
              <button class="btn-add-sm" onclick="event.stopPropagation();addToCartAnim(event,${m.id})">+</button>
            </div>
          </div>
        </div>
      `,
    )
    .join("");
  setTimeout(() => { if (typeof injectWishlistBtns === 'function') injectWishlistBtns(); }, 60);
}

function filterCat(cat) {
  activeCat = cat;
  renderCats();
  renderMenu();
}

// ===== SEARCH =====
function initSearch() {
  const input = document.getElementById("menu-search-input");
  const clearBtn = document.getElementById("menu-search-clear");
  if (!input) return;

  input.addEventListener("input", () => {
    const val = input.value;
    clearBtn.style.display = val ? "flex" : "none";
    renderCats();
    renderMenuCards(
      val.trim()
        ? menuData.filter((m) =>
            m.nama.toLowerCase().includes(val.trim().toLowerCase()),
          )
        : activeCat === "Semua"
          ? menuData
          : menuData.filter((m) => m.cat === activeCat),
      document.getElementById("menu-grid"),
    );
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.display = "none";
    renderCats();
    renderMenu();
  });
}

function goToMenuSearch() {
  goPage("menu", "nav-menu");
  setTimeout(() => {
    const input = document.getElementById("menu-search-input");
    if (input) input.focus();
  }, 250);
}

// ===== DETAIL SHEET =====
function bukaDetail(id) {
  const m = menuData.find((x) => x.id === id);
  if (!m) return;
  sheetItem = m;
  sheetQty = 1;
  sheetNote = "";
  document.getElementById("sheet-img").src = m.img;
  document.getElementById("sheet-cat").textContent = m.cat.toUpperCase();
  document.getElementById("sheet-title").textContent = m.nama;
  document.getElementById("sheet-desc").textContent = m.desc;
  document.getElementById("sheet-price").textContent = fmt(m.harga);
  document.getElementById("sheet-qty").textContent = sheetQty;
  const noteInput = document.getElementById("sheet-note");
  if (noteInput) noteInput.value = "";
  document.getElementById("sheet-overlay").classList.add("open");
  document.getElementById("detail-sheet").classList.add("open");
  document.body.style.overflow = "hidden";
  // Update wishlist button state
  if (typeof updateSheetWishlistBtn === 'function') updateSheetWishlistBtn();
}

function tutupSheet() {
  document.getElementById("sheet-overlay").classList.remove("open");
  document.getElementById("detail-sheet").classList.remove("open");
  document.body.style.overflow = "";
}

function ubahQty(d) {
  sheetQty = Math.max(1, sheetQty + d);
  document.getElementById("sheet-qty").textContent = sheetQty;
}

function tambahDariSheet() {
  if (!sheetItem) return;
  const note = document.getElementById("sheet-note")?.value.trim() || "";
  for (let i = 0; i < sheetQty; i++) tambahWithNote(sheetItem.id, note, false);
  showToast(`${sheetItem.nama} ×${sheetQty} ditambahkan 🎉`);
  tutupSheet();
  updateFab();
}

// ===== CART =====
function tambah(id, toastOn = true) {
  tambahWithNote(id, "", toastOn);
}

function tambahWithNote(id, note, toastOn = true) {
  const m = menuData.find((x) => x.id === id);
  if (!m) return;
  const ex = cart.find((c) => c.id === id && c.note === note && !c.isGift);
  if (ex) ex.qty++;
  else cart.push({ ...m, qty: 1, note: note || "" });
  updateFab();
  if (toastOn) showToast(`${m.nama} ditambahkan ✓`);
  if (document.getElementById("keranjang").classList.contains("active-page"))
    renderCart();
  animateFab();
}

function kurang(id, note) {
  const ex = cart.find((c) => c.id === id && c.note === note);
  if (!ex) return;
  ex.qty--;
  if (ex.qty <= 0) cart = cart.filter((c) => !(c.id === id && c.note === note));
  updateFab();
  renderCart();
}

function animateFab() {
  const fab = document.getElementById("cart-fab");
  fab.classList.remove("bounce");
  void fab.offsetWidth; // reflow
  fab.classList.add("bounce");
}

function renderCart() {
  const list = document.getElementById("cart-list");
  const block = document.getElementById("cart-total-block");
  if (!cart.length) {
    list.innerHTML = `<div class="cart-empty"><span class="icon">🛒</span>Keranjang kamu masih kosong.<br><span style="color:var(--gold);cursor:pointer" onclick="goPage('menu','nav-menu')">Yuk pilih menu →</span></div>
    ${getHistoryButtonHTML()}`;
    block.style.display = "none";
    renderHistorySection();
    return;
  }

  list.innerHTML = cart
    .map(
      (c) => `
        <div class="cart-item ${c.isGift ? "cart-item-gift" : ""}">
          <img src="${c.img}" alt="${c.nama}"/>
          <div class="cart-item-info">
            <div class="cart-item-name">${c.nama}${c.isGift ? ' <span class="gift-tag">🎁 Gratis</span>' : ""}</div>
            ${c.note ? `<div class="cart-item-note">${c.note}</div>` : ""}
            <div class="cart-item-price">${c.isGift ? "Gratis" : fmt(c.harga) + " / item"}</div>
            ${
              !c.isGift
                ? `<div class="cart-item-qty">
              <button class="cart-qty-btn" onclick="kurang(${c.id}, ${JSON.stringify(c.note)})">−</button>
              <span class="cart-qty-num">${c.qty}</span>
              <button class="cart-qty-btn" onclick="tambahWithNote(${c.id}, ${JSON.stringify(c.note)}, false)">+</button>
            </div>`
                : ""
            }
          </div>
          <div style="font-size:13px;color:var(--gold-lt);font-weight:600;white-space:nowrap">${c.isGift ? "—" : fmt(c.harga * c.qty)}</div>
        </div>
      `,
    )
    .join("");

  const subtotal = cart
    .filter((c) => !c.isGift)
    .reduce((s, c) => s + c.harga * c.qty, 0);
  document.getElementById("subtotal-val").textContent = fmt(subtotal);

  // Voucher discount row
  const discountRow = document.getElementById("discount-row");
  let totalAfterDiscount = subtotal;
  if (activeVoucher) {
    discountRow.style.display = "flex";
    document.getElementById("discount-label").textContent =
      `Diskon (${activeVoucher.code})`;
    document.getElementById("discount-val").textContent =
      `− ${fmt(activeVoucher.discount)}`;
    totalAfterDiscount = Math.max(0, subtotal - activeVoucher.discount);
  } else {
    discountRow.style.display = "none";
  }

  document.getElementById("total-val").textContent = fmt(totalAfterDiscount);
  block.style.display = "block";

  // Render voucher badge if active
  const voucherBadgeWrap = document.getElementById("voucher-badge-wrap");
  if (activeVoucher) {
    voucherBadgeWrap.innerHTML = `<div class="voucher-active-badge">${activeVoucher.label} <span onclick="hapusVoucher()">×</span></div>`;
  } else {
    voucherBadgeWrap.innerHTML = "";
  }

  renderHistorySection();
}

function updateFab() {
  const total = cart.reduce((s, c) => s + c.qty, 0);
  document.getElementById("fab-badge").textContent = total;
  document.getElementById("cart-fab").classList.toggle("visible", total > 0);
}

// ===== VOUCHER =====
function applyVoucher() {
  const input = document.getElementById("voucher-input");
  const code = input.value.trim().toUpperCase();
  const msgEl = document.getElementById("voucher-msg");

  if (!code) {
    showVoucherMsg("Masukkan kode voucher terlebih dahulu.", "error");
    return;
  }

  const subtotal = cart
    .filter((c) => !c.isGift)
    .reduce((s, c) => s + c.harga * c.qty, 0);

  if (code === "NEWKUPIE") {
    if (subtotal < 30000) {
      showVoucherMsg("Min. belanja Rp 30.000 untuk kode ini.", "error");
      return;
    }
    const used = localStorage.getItem("kupie_newuser");
    if (used) {
      showVoucherMsg("Kode sudah pernah digunakan.", "error");
      return;
    }
    const disc = Math.round(subtotal * 0.2);
    activeVoucher = {
      code,
      label: "Diskon 20% Pelanggan Baru",
      discount: disc,
    };
    showVoucherMsg(`Voucher berhasil! Hemat ${fmt(disc)} 🎉`, "success");
  } else if (code === "KOPIGAYO2") {
    const kopiItems = cart.filter((c) => c.cat === "Kopi" && !c.isGift);
    if (!kopiItems.length) {
      showVoucherMsg("Tidak ada item kopi di keranjang.", "error");
      return;
    }
    const cheapest = kopiItems.reduce((a, b) => (a.harga < b.harga ? a : b));
    activeVoucher = {
      code,
      label: "Kopi Termurah Gratis",
      discount: cheapest.harga,
    };
    showVoucherMsg(`Voucher berhasil! ${cheapest.nama} gratis 🎉`, "success");
  } else if (code === "MAKAN5K") {
    const makanItems = cart.filter((c) => c.cat === "Makanan" && !c.isGift);
    if (!makanItems.length) {
      showVoucherMsg("Tidak ada item makanan di keranjang.", "error");
      return;
    }
    activeVoucher = { code, label: "Potongan Rp 5.000", discount: 5000 };
    showVoucherMsg("Voucher berhasil! Hemat Rp 5.000 🎉", "success");
  } else if (code === "BDAYKUPIE") {
    const alreadyGift = cart.find((c) => c.isGift && c.id === 1);
    if (alreadyGift) {
      showVoucherMsg("Hadiah ulang tahun sudah ada di keranjang.", "error");
      return;
    }
    const gayo = menuData.find((m) => m.id === 1);
    cart.push({ ...gayo, qty: 1, harga: 0, isGift: true, note: "" });
    activeVoucher = { code, label: "1 Kopi Gayo Gratis 🎂", discount: 0 };
    showVoucherMsg("Selamat! 1 Kopi Gayo Asli gratis untukmu 🎂", "success");
    updateFab();
  } else {
    showVoucherMsg("Kode voucher tidak valid.", "error");
    return;
  }

  renderCart();
}

function hapusVoucher() {
  if (activeVoucher?.code === "BDAYKUPIE") {
    cart = cart.filter((c) => !c.isGift);
    updateFab();
  }
  activeVoucher = null;
  document.getElementById("voucher-input").value = "";
  document.getElementById("voucher-msg").textContent = "";
  renderCart();
}

function showVoucherMsg(msg, type) {
  const el = document.getElementById("voucher-msg");
  el.textContent = msg;
  el.className = "voucher-msg " + type;
}

// ===== CHECKOUT =====
function checkoutWA() {
  if (!cart.length) return;

  const { open, nextOpenText } = getStoreStatus();
  if (!open) {
    const confirmed = confirm(
      `Toko sedang tutup. Pesananmu tetap bisa dikirim dan akan diproses saat kami buka kembali (${nextOpenText}). Lanjutkan?`,
    );
    if (!confirmed) return;
  }

  const lines = cart
    .map((c) => {
      let line = `• ${c.nama} ×${c.qty}`;
      if (!c.isGift) line += ` = ${fmt(c.harga * c.qty)}`;
      else line += ` (Gratis)`;
      if (c.note) line += ` [${c.note}]`;
      return line;
    })
    .join("\n");

  const subtotal = cart
    .filter((c) => !c.isGift)
    .reduce((s, c) => s + c.harga * c.qty, 0);
  const totalAfterDiscount = activeVoucher
    ? Math.max(0, subtotal - activeVoucher.discount)
    : subtotal;

  // Get nama, type, meja from modal if available
  const namaPemesan = (document.getElementById('checkout-nama')?.value.trim()) || '-';
  const orderType = currentOrderType === 'take' ? 'Bawa Pulang 🥡' : 'Makan di Tempat 🪑';
  const nomorMeja = document.getElementById('checkout-meja')?.value.trim() || '';

  let msg = `Halo Keude Kupie! 👋\n`;
  msg += `Nama: *${namaPemesan}*\n`;
  msg += `Jenis: ${orderType}\n`;
  if (nomorMeja) msg += `Meja: No. ${nomorMeja}\n`;
  msg += `\nPesanan:\n${lines}\n\n`;
  if (activeVoucher) msg += `Kode Voucher: ${activeVoucher.code}\n`;
  msg += `*Total: ${fmt(totalAfterDiscount)}*\n\nTerima kasih 🙏`;

  // Save to history
  saveHistory({
    tanggal: new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" }),
    items: cart.map((c) => ({
      nama: c.nama,
      qty: c.qty,
      harga: c.isGift ? 0 : c.harga,
      isGift: !!c.isGift,
      note: c.note,
    })),
    total: totalAfterDiscount,
    voucher: activeVoucher?.code || null,
  });

  // Mark NEWKUPIE as used
  if (activeVoucher?.code === "NEWKUPIE") {
    localStorage.setItem("kupie_newuser", "1");
  }

  window.open(
    `https://wa.me/6281248422469?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

// ===== ORDER HISTORY =====
function saveHistory(order) {
  let history = [];
  try {
    history = JSON.parse(localStorage.getItem("kupie_history") || "[]");
  } catch (e) {}
  history.unshift(order);
  if (history.length > 10) history = history.slice(0, 10);
  localStorage.setItem("kupie_history", JSON.stringify(history));
}

function getHistory() {
  try {
    return JSON.parse(localStorage.getItem("kupie_history") || "[]");
  } catch (e) {
    return [];
  }
}

function getHistoryButtonHTML() {
  const history = getHistory();
  if (!history.length) return "";
  return `<div style="text-align:center;margin-top:16px"><button class="btn-history-toggle" onclick="toggleHistory()">📋 Riwayat Pesanan (${history.length})</button></div>`;
}

function toggleHistory() {
  showHistory = !showHistory;
  renderHistorySection();
}

function renderHistorySection() {
  const container = document.getElementById("history-section");
  if (!container) return;
  const history = getHistory();
  if (!history.length) {
    container.innerHTML = "";
    return;
  }

  const toggleBtn = `<div style="text-align:center;margin-top:10px"><button class="btn-history-toggle" onclick="toggleHistory()">📋 Riwayat Pesanan (${history.length})</button></div>`;

  if (!showHistory) {
    container.innerHTML = toggleBtn;
    return;
  }

  const cards = history
    .map(
      (order, idx) => `
    <div class="history-card">
      <div class="history-date">${order.tanggal}</div>
      <div class="history-items">
        ${order.items.map((i) => `<div class="history-item-row">${i.nama} ×${i.qty}${i.note ? ` <em>${i.note}</em>` : ""}${i.isGift ? " (Gratis)" : ""}</div>`).join("")}
      </div>
      ${order.voucher ? `<div class="history-voucher">Voucher: ${order.voucher}</div>` : ""}
      <div class="history-total">${fmt(order.total)}</div>
      <button class="btn-reorder" onclick="reorder(${idx})">Pesan Lagi</button>
    </div>
  `,
    )
    .join("");

  container.innerHTML = `
    ${toggleBtn}
    <div class="history-list">
      <div class="history-header">Riwayat Pesanan</div>
      ${cards}
      <button class="btn-hapus-history" onclick="hapusHistory()">🗑 Hapus Semua Riwayat</button>
    </div>
  `;
}

function reorder(idx) {
  const history = getHistory();
  const order = history[idx];
  if (!order) return;
  order.items.forEach((item) => {
    if (item.isGift) return;
    const m = menuData.find((m) => m.nama === item.nama);
    if (!m) return;
    for (let i = 0; i < item.qty; i++)
      tambahWithNote(m.id, item.note || "", false);
  });
  showToast("Pesanan ditambahkan ke keranjang 🛒");
  goPage("keranjang", "nav-keranjang");
}

function hapusHistory() {
  if (confirm("Hapus semua riwayat pesanan?")) {
    localStorage.removeItem("kupie_history");
    showHistory = false;
    renderHistorySection();
    showToast("Riwayat dihapus.");
  }
}

// ===== NAV =====
function goPage(pageId, navId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((p) => {
    p.classList.remove("active-page");
  });
  document
    .querySelectorAll(".nav-item")
    .forEach((n) => n.classList.remove("active"));

  const newPage = document.getElementById(pageId);
  if (!newPage) return;
  newPage.classList.add("active-page");
  if (navId) {
    const navEl = document.getElementById(navId);
    if (navEl) navEl.classList.add("active");
  }
  if (pageId === "keranjang") renderCart();
  if (pageId === "menu") updateStoreStatus();
  window.scrollTo(0, 0);
  // Re-register reveals & wishlist buttons after page change
  setTimeout(() => {
    registerReveals();
    injectWishlistBtns();
  }, 100);
}

function toggleMenu() {
  document.getElementById("top-menu").classList.toggle("open");
}
document.addEventListener("click", (e) => {
  if (!e.target.closest("#top-menu") && !e.target.closest(".icon-btn")) {
    document.getElementById("top-menu").classList.remove("open");
  }
});

// ===== TOAST =====
let toastTimer;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2200);
}

// ===== COPY KODE =====
function copyKode(kode, btnId) {
  navigator.clipboard.writeText(kode).catch(() => {});
  const btn = document.getElementById(btnId);
  if (!btn) return;
  btn.textContent = "✓ Disalin";
  btn.classList.add("copied");
  setTimeout(() => {
    btn.textContent = "Salin";
    btn.classList.remove("copied");
  }, 2000);
  showToast(`Kode "${kode}" berhasil disalin 🎉`);
}

// ===== FORMAT =====
function fmt(n) {
  return "Rp " + n.toLocaleString("id-ID");
}

// ===== SPLASH SCREEN =====
function initSplash() {
  const splash = document.getElementById("splash-screen");
  if (!splash) return;
  setTimeout(() => {
    splash.classList.add("fade-out");
    setTimeout(() => splash.remove(), 600);
  }, 1500);
}

// ===== INIT =====
initSplash();
renderRek();
renderCats();
renderMenu();
initSearch();
updateStoreStatus();
setInterval(updateStoreStatus, 60000);
// ===================================================
// PREMIUM UPGRADE — ALL NEW FEATURES
// ===================================================
 
// ===== TESTIMONIAL DATA =====
const testimonials = [
  { stars: 5, text: "Kopi Gayo-nya beneran beda! Aroma-nya kuat tapi tidak pahit. Udah jadi langganan tetap sejak tahun lalu.", author: "Rizky A.", initial: "RA", item: "Kopi Gayo Asli", date: "2 hari lalu" },
  { stars: 5, text: "Mie Aceh-nya juara! Bumbu rempahnya terasa banget, porsinya juga mantap. Cocok buat makan siang mahasiswa.", author: "Siti N.", initial: "SN", item: "Mie Aceh", date: "5 hari lalu" },
  { stars: 5, text: "TST-nya legend banget! Perpaduan teh, susu, dan telurnya perfectly balanced. Wajib coba kalau ke sini.", author: "Farhan M.", initial: "FM", item: "TST – Teh Susu Telur", date: "1 minggu lalu" },
  { stars: 4, text: "Cold Brew-nya smooth banget, tidak ada rasa asam berlebihan. Cocok untuk teman belajar malam. Recommended!", author: "Dinda P.", initial: "DP", item: "Cold Brew", date: "1 minggu lalu" },
  { stars: 5, text: "Harga paling terjangkau di sekitar kampus tapi kualitasnya tidak kalah sama kafe hits! Suka banget 💛", author: "Yusuf H.", initial: "YH", item: "Kopi Sanger", date: "2 minggu lalu" },
  { stars: 5, text: "Cireng ayam suwirnya nagih abis! Enak dimakan sambil ngopi sore-sorean. Selalu pesan ini tiap ke sini.", author: "Mega L.", initial: "ML", item: "Cireng Ayam Suwir", date: "3 minggu lalu" },
];
 
function renderTestimonials() {
  const el = document.getElementById('testimonial-scroll');
  if (!el) return;
  el.innerHTML = testimonials.map(t => `
    <div class="testimonial-card reveal">
      <div class="testimonial-stars">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</div>
      <div class="testimonial-text">${t.text}</div>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.initial}</div>
        <div>
          <div class="testimonial-name">${t.author}</div>
          <div class="testimonial-date">${t.date}</div>
        </div>
      </div>
      <div class="testimonial-item-tag">${t.item}</div>
    </div>
  `).join('');
}
 
// ===== SCROLL REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      // Trigger counter if it's a stat
      const countEl = e.target.querySelector('[data-count]');
      if (countEl && !countEl.dataset.animated) {
        animateCounter(countEl);
        countEl.dataset.animated = 'done';
      }
    }
  });
}, { threshold: 0.15 });
 
function registerReveals() {
  document.querySelectorAll('.reveal:not([data-observed])').forEach(el => {
    el.dataset.observed = '1';
    revealObserver.observe(el);
  });
}
 
// Also observe stat cards directly
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const countEl = e.target.querySelector('[data-count]');
      if (countEl && !countEl.dataset.animated) {
        animateCounter(countEl);
        countEl.dataset.animated = 'done';
      }
    }
  });
}, { threshold: 0.3 });
 
function registerStatCards() {
  document.querySelectorAll('.stat-card').forEach(card => {
    statObserver.observe(card);
  });
}
 
// ===== ANIMATED COUNTER =====
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix !== undefined ? el.dataset.suffix : '';
  const prefix = el.dataset.prefix || '';
  const divide = el.dataset.divide ? parseInt(el.dataset.divide) : 1;
  const duration = 1200;
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(eased * target);
    const display = divide > 1 ? (val / divide).toFixed(1) : val;
    el.textContent = prefix + display + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}
 
// ===== WISHLIST / FAVORIT =====
function getWishlist() {
  try { return JSON.parse(localStorage.getItem('kupie_wishlist') || '[]'); } catch { return []; }
}
function saveWishlist(list) { localStorage.setItem('kupie_wishlist', JSON.stringify(list)); }
 
function toggleWishlist(id) {
  let wl = getWishlist();
  const idx = wl.indexOf(id);
  if (idx > -1) { wl.splice(idx, 1); showToast('Dihapus dari favorit'); }
  else { wl.push(id); showToast('Ditambahkan ke favorit ❤️'); }
  saveWishlist(wl);
  updateWishlistButtons(id);
}
 
function toggleWishlistFromSheet() {
  if (!sheetItem) return;
  toggleWishlist(sheetItem.id);
  updateSheetWishlistBtn();
}
 
function updateSheetWishlistBtn() {
  const btn = document.getElementById('sheet-wishlist-btn');
  if (!btn || !sheetItem) return;
  const wl = getWishlist();
  const liked = wl.includes(sheetItem.id);
  btn.textContent = liked ? '❤️' : '🤍';
  btn.classList.toggle('liked', liked);
}
 
function updateWishlistButtons(id) {
  document.querySelectorAll(`.wishlist-btn[data-id="${id}"]`).forEach(btn => {
    const wl = getWishlist();
    const liked = wl.includes(id);
    btn.textContent = liked ? '❤️' : '🤍';
    btn.classList.toggle('liked', liked);
  });
  updateSheetWishlistBtn();
}
 
// Inject wishlist btn into menu cards after render
function injectWishlistBtns() {
  document.querySelectorAll('.menu-card, .rek-card').forEach(card => {
    if (card.querySelector('.wishlist-btn')) return;
    const idMatch = card.getAttribute('onclick')?.match(/bukaDetail\((\d+)\)/);
    if (!idMatch) return;
    const id = parseInt(idMatch[1]);
    const wl = getWishlist();
    const liked = wl.includes(id);
    const btn = document.createElement('button');
    btn.className = 'wishlist-btn' + (liked ? ' liked' : '');
    btn.dataset.id = id;
    btn.textContent = liked ? '❤️' : '🤍';
    btn.onclick = (e) => { e.stopPropagation(); toggleWishlist(id); };
    card.appendChild(btn);
  });
}
 
// ===== SORT =====
function setSort(mode) {
  currentSort = mode;
  document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
  const btn = document.getElementById('sort-' + mode);
  if (btn) btn.classList.add('active');
  renderMenu();
}
 
// ===== SHARE MENU ITEM =====
function shareMenuItem() {
  if (!sheetItem) return;
  const text = `Coba ${sheetItem.nama} di Keude Kupie! Harga cuma ${fmt(sheetItem.harga)}. Kopi Gayo & UK terbaik di Medan 🔥`;
  if (navigator.share) {
    navigator.share({ title: 'Keude Kupie', text, url: window.location.href })
      .catch(() => {});
  } else {
    // fallback: copy to clipboard
    navigator.clipboard.writeText(text + '\n' + window.location.href).catch(()=>{});
    const waUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    showToast('Dibagikan via WhatsApp 🎉');
  }
}
 
// ===== BACK TO TOP =====
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 300);
  });
}
 
// ===== CHECKOUT CONFIRM MODAL =====
function openCheckoutModal() {
  if (!cart.length) return;
  const overlay = document.getElementById('checkout-modal-overlay');
  const summaryEl = document.getElementById('checkout-summary-list');
 
  const subtotal = cart.filter(c=>!c.isGift).reduce((s,c)=>s+c.harga*c.qty,0);
  const totalAfterDiscount = activeVoucher ? Math.max(0, subtotal - activeVoucher.discount) : subtotal;
 
  summaryEl.innerHTML = `
    ${cart.map(c => `
      <div class="checkout-summary-row">
        <span>${c.nama} ×${c.qty}${c.note ? ` (${c.note})` : ''}</span>
        <span>${c.isGift ? 'Gratis' : fmt(c.harga * c.qty)}</span>
      </div>
    `).join('')}
    ${activeVoucher ? `<div class="checkout-summary-row" style="color:var(--gold)"><span>Diskon (${activeVoucher.code})</span><span>− ${fmt(activeVoucher.discount)}</span></div>` : ''}
    <div class="checkout-summary-total">
      <span>Total</span>
      <span>${fmt(totalAfterDiscount)}</span>
    </div>
  `;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  // Reset type buttons
  setOrderType(currentOrderType);
}
 
function closeCheckoutModal(e) {
  if (e && e.target !== document.getElementById('checkout-modal-overlay')) return;
  document.getElementById('checkout-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
 
function confirmCheckout() {
  const nama = document.getElementById('checkout-nama')?.value.trim();
  if (!nama) {
    document.getElementById('checkout-nama').focus();
    document.getElementById('checkout-nama').style.borderColor = '#ff6b6b';
    showToast('Masukkan nama kamu dulu ya! 😊');
    return;
  }
  document.getElementById('checkout-nama').style.borderColor = '';
  document.getElementById('checkout-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
  checkoutWA();
  addStamp();
}
 
// ===== LIGHTBOX =====
const galleryImages = [
  { src: 'WhatsApp Image 2026-05-23 at 17.12.50.jpeg', caption: 'Suasana Keude Kupie' },
  { src: 'WhatsApp Image 2026-05-23 at 17.14.21.jpeg', caption: 'Suasana Keude Kupie' },
];
let lightboxIdx = 0;
 
function openLightbox(idx) {
  lightboxIdx = idx;
  const img = galleryImages[idx];
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').textContent = img.caption;
  document.getElementById('lightbox-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox(e) {
  const overlay = document.getElementById('lightbox-overlay');
  if (e && e.target !== overlay && !e.target.classList.contains('lightbox-close')) return;
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}
function lightboxNav(dir, e) {
  if (e) e.stopPropagation();
  lightboxIdx = (lightboxIdx + dir + galleryImages.length) % galleryImages.length;
  const img = galleryImages[lightboxIdx];
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').textContent = img.caption;
}
 
// ===== STAMP CARD LOYALITAS =====
function getStamps() {
  try { return JSON.parse(localStorage.getItem('kupie_stamps') || '{"count":0,"total":0}'); } catch { return {count:0,total:0}; }
}
function saveStamps(data) { localStorage.setItem('kupie_stamps', JSON.stringify(data)); }
 
function addStamp() {
  const data = getStamps();
  data.count = (data.count || 0) + 1;
  data.total = (data.total || 0) + 1;
  if (data.count >= 10) {
    // Don't auto-redeem, let user do it
  }
  saveStamps(data);
  renderStampCard();
  showToast('Stamp +1 dikumpulkan! ☕');
}
 
function redeemStamps() {
  const data = getStamps();
  if (data.count < 10) return;
  data.count = data.count - 10;
  saveStamps(data);
  renderStampCard();
  showToast('🎉 Reward diklaim! Tunjukkan ke kasir untuk 1 kopi gratis.');
  setTimeout(() => {
    alert('🎁 REWARD DIKLAIM!\n\nKamu mendapatkan 1 Kopi Gayo Asli GRATIS!\n\nTunjukkan notifikasi ini ke kasir Keude Kupie.\n\nTerima kasih sudah setia bersama kami! ☕');
  }, 500);
}
 
function renderStampCard() {
  const container = document.getElementById('stamp-card-home');
  if (!container) return;
  const data = getStamps();
  const count = data.count || 0;
  const pct = Math.min(count / 10 * 100, 100);
 
  let stamps = '';
  for (let i = 0; i < 10; i++) {
    const filled = i < count;
    stamps += `<div class="stamp ${filled ? 'filled' : ''}">
      ${filled ? '☕' : '<span style="color:var(--border);font-size:18px;">○</span>'}
    </div>`;
  }
 
  const canRedeem = count >= 10;
 
  container.innerHTML = `
    <div class="stamp-card-section">
      <div class="stamp-card-header">
        <div class="stamp-card-title">Kartu <em>Loyalitas</em></div>
        <div class="stamp-card-progress-text">${count}/10 stamp</div>
      </div>
      <div class="stamp-progress-bar">
        <div class="stamp-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="stamp-grid">${stamps}</div>
      <div class="stamp-reward-text">
        Kumpulkan <strong>10 stamp</strong> → dapatkan <strong>1 kopi gratis</strong>! Setiap pembelian via WhatsApp = 1 stamp. Total dikumpulkan: ${data.total || 0} stamp.
      </div>
      ${canRedeem
        ? `<button class="stamp-redeem-btn" onclick="redeemStamps()">🎁 Tukar Reward — 1 Kopi Gratis!</button>`
        : `<button class="stamp-add-btn" onclick="addStamp()">+ Tambah Stamp Manual (Demo)</button>`
      }
    </div>
  `;
}
 
// ===== FAQ ACCORDION =====
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(el => el.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}
 
// ===== HEADER SCROLL EFFECT =====
function initHeaderScroll() {
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
}
 
// ===== EXTEND bukaDetail to update wishlist btn =====
// Patch applied directly inside bukaDetail call via updateSheetWishlistBtn
// called after sheet opens (sheet-overlay.open triggers it)
 
// ===== INIT ALL NEW FEATURES =====
function initPremiumFeatures() {
  renderTestimonials();
  renderStampCard();
  initBackToTop();
  initHeaderScroll();
  setTimeout(() => {
    if (typeof registerReveals === 'function') registerReveals();
    if (typeof registerStatCards === 'function') registerStatCards();
    if (typeof injectWishlistBtns === 'function') injectWishlistBtns();
  }, 800);
}
 
initPremiumFeatures();
 
// ===================================================
// UPGRADE ROUND 2 — ALL NEW FEATURES
// ===================================================
 
// ===== ORDER TYPE (Dine In / Takeaway) =====
let currentOrderType = 'dine';
function setOrderType(type) {
  currentOrderType = type;
  const dineBtn = document.getElementById('type-dine');
  const takeBtn = document.getElementById('type-take');
  const mejaInput = document.getElementById('checkout-meja');
  if (dineBtn) dineBtn.classList.toggle('active', type === 'dine');
  if (takeBtn) takeBtn.classList.toggle('active', type === 'take');
  if (mejaInput) mejaInput.style.display = type === 'dine' ? 'block' : 'none';
}
 
// ===== ADD TO CART ANIMATION =====
function addToCartAnim(event, id) {
  tambah(id);
  // Animate button
  const btn = event.target;
  btn.classList.remove('popping');
  void btn.offsetWidth;
  btn.classList.add('popping');
  // Float badge
  const badge = document.createElement('div');
  badge.className = 'float-badge';
  badge.textContent = '+1';
  badge.style.left = (event.clientX - 16) + 'px';
  badge.style.top = (event.clientY - 16) + 'px';
  document.body.appendChild(badge);
  setTimeout(() => badge.remove(), 700);
}
 
// ===== WISHLIST PAGE =====
function renderWishlistPage() {
  const grid = document.getElementById('wishlist-grid');
  if (!grid) return;
  const wl = getWishlist();
  if (!wl.length) {
    grid.innerHTML = `
      <div class="wishlist-empty" style="grid-column:span 2">
        <div class="wishlist-empty-icon">🤍</div>
        <p>Belum ada menu favorit.<br>Tekan ❤️ di kartu menu untuk menyimpan.</p>
        <a onclick="goPage('menu','nav-menu')">Jelajahi Menu →</a>
      </div>`;
    return;
  }
  const items = menuData.filter(m => wl.includes(m.id));
  grid.innerHTML = items.map(m => `
    <div class="menu-card" onclick="bukaDetail(${m.id})">
      ${m.badge ? `<div class="menu-card-badge">${m.badge}</div>` : ''}
      <img src="${m.img}" alt="${m.nama}" loading="lazy"
        onerror="this.style.display='none';this.insertAdjacentHTML('afterend','<div class=\\'img-placeholder\\'>☕</div>')"/>
      <div class="menu-card-body">
        <h4>${m.nama}</h4>
        <div class="menu-card-footer">
          <span class="price">${fmt(m.harga)}</span>
          <button class="btn-add-sm" onclick="event.stopPropagation();addToCartAnim(event,${m.id})">+</button>
        </div>
      </div>
    </div>
  `).join('');
  setTimeout(() => injectWishlistBtns(), 60);
}
 
// Hook goPage to render wishlist when opened
const _goPageBase = goPage;
goPage = function(pageId, navId) {
  _goPageBase(pageId, navId);
  if (pageId === 'wishlist') setTimeout(renderWishlistPage, 80);
};
 
// Also update wishlist page when wishlist changes
const _origToggleWishlist = toggleWishlist;
toggleWishlist = function(id) {
  _origToggleWishlist(id);
  // If wishlist page is open, re-render
  const wPage = document.getElementById('wishlist');
  if (wPage && wPage.classList.contains('active-page')) renderWishlistPage();
};
 
 