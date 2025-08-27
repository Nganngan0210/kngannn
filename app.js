// Toggle mobile menu
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#menu');
if (toggle) {
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    menu.style.display = expanded ? 'none' : 'flex';
  });
}

// Fake search results (for demo)
const searchForm = document.querySelector('.search');
const results = document.querySelector('.search-results');
if (searchForm && results) {
  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const q = new FormData(searchForm).get('q');
    if(!q) return;
    results.innerHTML = `
      <div class="grid grid-3">
        <article class="post"><h3>Kết quả cho "${q}" #1</h3><p>Mô tả ngắn...</p><a class="post-link" href="#">Xem</a></article>
        <article class="post"><h3>Kết quả cho "${q}" #2</h3><p>Mô tả ngắn...</p><a class="post-link" href="#">Xem</a></article>
        <article class="post"><h3>Kết quả cho "${q}" #3</h3><p>Mô tả ngắn...</p><a class="post-link" href="#">Xem</a></article>
      </div>
    `;
  });
}

// Report form (demo only)
const form = document.getElementById('reportForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
    alert('Đã nhận báo cáo. Cảm ơn bạn đã lên tiếng!\n' + JSON.stringify(data, null, 2));
    form.reset();
  });
}

// Login modal
const openLogin = document.getElementById('openLogin');
const dialog = document.getElementById('loginModal');
if (openLogin && dialog) {
  openLogin.addEventListener('click', (e) => {
    e.preventDefault();
    dialog.showModal();
  });
  dialog.addEventListener('close', () => {});
}
