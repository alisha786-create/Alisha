// Gallery images load (सभी 27 files)
const images = Array.from({length: 27}, (_, i) => `images/file${i+1}.jpg`);
const galleryGrid = document.getElementById('gallery-grid');

images.forEach((src, index) => {
  const col = document.createElement('div');
  col.className = 'col-md-3 col-sm-6';
  col.innerHTML = `<img src="${src}" alt="Photo ${index+1}" class="img-fluid rounded shadow mb-3 w-100" onclick="openModal(this.src)">`;
  galleryGrid.appendChild(col);
});

// Lightbox modal
function openModal(src) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed; top: 0; left: 0; width: 100%; height: 100%; 
    background: rgba(0,0,0,0.9); z-index: 9999; display: flex; align-items: center; justify-content: center;
  `;
  modal.innerHTML = `<img src="${src}" style="max-width: 90%; max-height: 90%; border-radius: 10px;"> 
    <span onclick="this.parentElement.remove()" style="position: absolute; top: 20px; right: 30px; color: white; font-size: 40px; cursor: pointer;">&times;</span>`;
  document.body.appendChild(modal);
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Message sent! (Demo)');
});
