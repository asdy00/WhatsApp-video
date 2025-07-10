// Sidebar toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const sidebar = document.getElementById('sidebar');
  const closeBtn = document.getElementById('closeSidebar');

  menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
  });
});

// Fungsi play video
function playVideo(container) {
  const thumb = container.querySelector('.thumb');
  const video = container.querySelector('video');

  if (thumb && video) {
    thumb.style.display = 'none';
    video.classList.remove('hidden');
    video.play();
  }
}
