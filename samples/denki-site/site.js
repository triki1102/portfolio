(() => {
  const btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(open));
  });
  const form = document.getElementById('form');
  if (form) form.addEventListener('submit', e => {
    e.preventDefault();
    const need = [...form.querySelectorAll('[required]')].filter(i => !i.value.trim());
    if (need.length) { need[0].focus(); need[0].style.borderColor = '#C8781F'; return; }
    document.getElementById('done').style.display = 'block';
    form.querySelector('button').disabled = true;
  });
})();
