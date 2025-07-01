// Ambil elemen DOM
const menuIcon = document.getElementById('menuIcon');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeSidebar');

// Saat ikon garis tiga diklik → tampilkan sidebar
menuIcon.addEventListener('click', () => {
  sidebar.classList.add('active');
});

// Saat tombol ❌ diklik → sembunyikan sidebar
closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});