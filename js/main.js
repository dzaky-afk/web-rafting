/**
 * SA ADVENTURE - INTERACTIVE JAVASCRIPT
 * Logic for Calculator, WhatsApp Generation, Modals, FAQ, and Navigation
 */

document.addEventListener('DOMContentLoaded', function () {
  initNavbar();
  initCalculator();
  initDefaultDate();
});

// Format Number to Indonesian Rupiah (Rp xx.xxx.xxx)
function formatRupiah(amount) {
  return 'Rp ' + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}

// 1. Navigation & Header Scroll Handling
function initNavbar() {
  const header = document.getElementById('header');
  const mobileToggle = document.getElementById('mobileToggle');
  const drawerClose = document.getElementById('drawerClose');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerOverlay = document.getElementById('drawerOverlay');
  const mobileLinks = document.querySelectorAll('.mobile-link');
  const navLinks = document.querySelectorAll('.nav-link');

  // Sticky header on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Mobile Drawer Toggle
  if (mobileToggle) {
    mobileToggle.addEventListener('click', function () {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (mobileDrawer) {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (drawerClose) drawerClose.addEventListener('click', closeDrawer);
  if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

  mobileLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Active Nav Link highlighting on scroll
  window.addEventListener('scroll', function () {
    let current = '';
    const sections = document.querySelectorAll('section, header');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 120) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

// 2. Default Target Date (sets default to next weekend / 7 days ahead)
function initDefaultDate() {
  const dateInput = document.getElementById('calcDate');
  const modalDateInput = document.getElementById('modalDate');
  
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(today.getDate() + 7);
  
  const yyyy = nextWeek.getFullYear();
  const mm = String(nextWeek.getMonth() + 1).padStart(2, '0');
  const dd = String(nextWeek.getDate()).padStart(2, '0');
  const formattedDate = `${yyyy}-${mm}-${dd}`;

  if (dateInput) {
    dateInput.min = new Date().toISOString().split('T')[0];
    dateInput.value = formattedDate;
  }
  if (modalDateInput) {
    modalDateInput.min = new Date().toISOString().split('T')[0];
    modalDateInput.value = formattedDate;
  }
}

// 3. Calculator Logic
function initCalculator() {
  const radioCards = document.querySelectorAll('.radio-card');
  radioCards.forEach(card => {
    card.addEventListener('click', function () {
      radioCards.forEach(c => c.classList.remove('active'));
      this.classList.add('active');
    });
  });

  calculateTotal();
}

function adjustPax(delta) {
  const paxInput = document.getElementById('calcPax');
  if (!paxInput) return;
  
  let currentVal = parseInt(paxInput.value) || 20;
  let newVal = currentVal + delta;
  if (newVal < 20) newVal = 20;
  paxInput.value = newVal;
  calculateTotal();
}

function calculateTotal() {
  // Get Selected Main Package
  const selectedPkgInput = document.querySelector('input[name="mainPackage"]:checked');
  if (!selectedPkgInput) return;

  const pkgPrice = parseInt(selectedPkgInput.getAttribute('data-price')) || 0;
  const pkgName = selectedPkgInput.getAttribute('data-name') || '';

  // Get Pax Count (Min 20)
  const paxInput = document.getElementById('calcPax');
  let pax = parseInt(paxInput.value) || 20;
  if (pax < 20) pax = 20;

  // Calculate Main Package Total
  const mainPkgTotal = pkgPrice * pax;

  // Calculate Add-ons Total
  const addonChecks = document.querySelectorAll('.addon-check:checked');
  let addonTotalPerPax = 0;
  let selectedAddonsList = [];

  addonChecks.forEach(addon => {
    const price = parseInt(addon.getAttribute('data-price')) || 0;
    addonTotalPerPax += price;
    selectedAddonsList.push({
      name: addon.value,
      price: price
    });
  });

  const totalAddonCost = addonTotalPerPax * pax;
  const grandTotal = mainPkgTotal + totalAddonCost;

  // Update UI Breakdown
  const sumPkgName = document.getElementById('sumPkgName');
  const sumPaxCount = document.getElementById('sumPaxCount');
  const sumPkgTotal = document.getElementById('sumPkgTotal');
  const sumAddonTotal = document.getElementById('sumAddonTotal');
  const sumGrandTotal = document.getElementById('sumGrandTotal');

  if (sumPkgName) sumPkgName.textContent = pkgName.includes('Paket B') ? 'Paket B (Complete)' : 'Paket A (Basic)';
  if (sumPaxCount) sumPaxCount.textContent = pax;
  if (sumPkgTotal) sumPkgTotal.textContent = formatRupiah(mainPkgTotal);
  if (sumAddonTotal) sumAddonTotal.textContent = formatRupiah(totalAddonCost);
  if (sumGrandTotal) sumGrandTotal.textContent = formatRupiah(grandTotal);

  return {
    pkgName,
    pkgPrice,
    pax,
    mainPkgTotal,
    selectedAddonsList,
    totalAddonCost,
    grandTotal
  };
}

// 4. Send Booking to WhatsApp from Calculator
function sendBookingToWhatsApp() {
  const data = calculateTotal();
  const name = document.getElementById('calcName').value.trim() || 'Pelanggan';
  const group = document.getElementById('calcGroup').value.trim() || '-';
  const dateVal = document.getElementById('calcDate').value;
  
  let formattedDateStr = dateVal;
  if (dateVal) {
    const d = new Date(dateVal);
    formattedDateStr = d.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  // Format Add-on text
  let addonText = 'Tidak ada';
  if (data.selectedAddonsList.length > 0) {
    addonText = data.selectedAddonsList.map(a => `${a.name} (+${formatRupiah(a.price)}/pax)`).join('\n   • ');
  }

  // Generate clean, formatted WhatsApp Message
  const waMessage = 
`*HALO SA ADVENTURE, SAYA INGIN RESERVASI RAFTING & OUTBOUND*
--------------------------------------------------
*DATA PEMESAN:*
• Nama PIC: ${name}
• Rombongan / Instansi: ${group}
• Tanggal Kegiatan: ${formattedDateStr}
• Jumlah Peserta: ${data.pax} Pax

*PAKET RAFTING & AKTIVITAS:*
• *Paket Utama:* ${data.pkgName} (${formatRupiah(data.pkgPrice)}/pax)
• *Tambahan Aktivitas:* 
   • ${addonText}

*ESTIMASI TOTAL BIAYA:* 
*${formatRupiah(data.grandTotal)}*
--------------------------------------------------
Mohon info ketersediaan jadwal, panduan rute titik kumpul, dan nomor rekening untuk Down Payment (DP). Terima kasih!`;

  const encodedMsg = encodeURIComponent(waMessage);
  const waUrl = `https://wa.me/6281291068287?text=${encodedMsg}`;
  
  window.open(waUrl, '_blank');
}

// 5. Add Activity directly from card to Calculator
function addActivityToCalc(activityName) {
  const calcSection = document.getElementById('kalkulator-booking');
  if (calcSection) {
    calcSection.scrollIntoView({ behavior: 'smooth' });
  }

  // Find corresponding checkbox
  const checkboxes = document.querySelectorAll('.addon-check');
  checkboxes.forEach(cb => {
    if (cb.value === activityName) {
      cb.checked = true;
      // Trigger subtle pulse
      const parent = cb.closest('.addon-item');
      if (parent) {
        parent.style.backgroundColor = '#fef3c7';
        parent.style.borderColor = '#f59e0b';
        setTimeout(() => {
          parent.style.backgroundColor = '';
          parent.style.borderColor = '';
        }, 1500);
      }
    }
  });

  calculateTotal();
}

// 6. Quick Booking Modal Logic
function openBookingModal(packageName, pricePerPax) {
  const modal = document.getElementById('bookingModal');
  const title = document.getElementById('modalPackageTitle');
  const badge = document.getElementById('modalPkgBadge');
  const pkgInput = document.getElementById('modalSelectedPkg');
  const priceInput = document.getElementById('modalSelectedPrice');

  if (modal) {
    title.textContent = `Reservasi ${packageName}`;
    badge.textContent = `${packageName} - ${formatRupiah(pricePerPax)}/Pax`;
    pkgInput.value = packageName;
    priceInput.value = pricePerPax;

    updateModalTotal();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeBookingModal() {
  const modal = document.getElementById('bookingModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function updateModalTotal() {
  const priceInput = document.getElementById('modalSelectedPrice');
  const paxInput = document.getElementById('modalPax');
  const totalDisplay = document.getElementById('modalTotalAmount');

  const price = parseInt(priceInput.value) || 199000;
  let pax = parseInt(paxInput.value) || 20;
  if (pax < 20) pax = 20;

  const total = price * pax;
  if (totalDisplay) {
    totalDisplay.textContent = formatRupiah(total);
  }
}

function submitQuickBooking() {
  const pkg = document.getElementById('modalSelectedPkg').value || 'Paket Rafting';
  const price = parseInt(document.getElementById('modalSelectedPrice').value) || 0;
  const name = document.getElementById('modalName').value.trim();
  const phone = document.getElementById('modalPhone').value.trim();
  const pax = document.getElementById('modalPax').value || 20;
  const dateVal = document.getElementById('modalDate').value;
  const notes = document.getElementById('modalNotes').value.trim() || '-';

  const total = price * pax;

  let formattedDateStr = dateVal;
  if (dateVal) {
    const d = new Date(dateVal);
    formattedDateStr = d.toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  const waMessage = 
`*HALO SA ADVENTURE, SAYA INGIN BOOKING ${pkg.toUpperCase()}*
--------------------------------------------------
*DATA PEMESAN:*
• Nama: ${name}
• No. WhatsApp: ${phone}
• Tanggal Acara: ${formattedDateStr}
• Jumlah Peserta: ${pax} Pax

*PAKET TERPILIH:*
• ${pkg} (${formatRupiah(price)}/Pax)
• Catatan Khusus: ${notes}

*TOTAL BIAYA:* 
*${formatRupiah(total)}*
--------------------------------------------------
Mohon konfirmasi ketersediaan kuota dan detail persiapan acara. Terima kasih!`;

  closeBookingModal();
  const waUrl = `https://wa.me/6281291068287?text=${encodeURIComponent(waMessage)}`;
  window.open(waUrl, '_blank');
}

// 7. FAQ Accordion Toggle
function toggleFaq(button) {
  const parentItem = button.closest('.faq-item');
  const allItems = document.querySelectorAll('.faq-item');

  allItems.forEach(item => {
    if (item !== parentItem) {
      item.classList.remove('active');
    }
  });

  parentItem.classList.toggle('active');
}

// 8. Gallery Lightbox & Video Player Modal
function openLightbox(imageSrc, caption) {
  const lightbox = document.getElementById('imageLightbox');
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');

  if (lightbox && img) {
    img.src = imageSrc;
    cap.textContent = caption || '';
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('imageLightbox');
  if (lightbox) {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (modal && iframe) {
    // High energy rafting action clip
    iframe.src = "https://www.youtube.com/embed/5qap5aO4i9A?autoplay=1";
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if (modal && iframe) {
    iframe.src = "";
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Close modals on Escape key
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    closeBookingModal();
    closeLightbox();
    closeVideoModal();
  }
});
