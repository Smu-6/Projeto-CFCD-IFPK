
(function(){
  const themeBtn = document.getElementById('theme-toggle');
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ document.body.classList.add('light'); }
  themeBtn?.addEventListener('click', ()=>{
    document.body.classList.toggle('light');
    localStorage.setItem('theme', document.body.classList.contains('light') ? 'light' : 'dark');
  });

  const menuBtn = document.getElementById('menu-toggle');
  const nav = document.querySelector('.nav');
  menuBtn?.addEventListener('click', ()=>{
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  const searchInput = document.getElementById('search');
  if(searchInput){
    searchInput.addEventListener('input', (e)=>{
      const termo = e.target.value.toLowerCase();
      document.querySelectorAll('.searchable').forEach(el=>{
        const show = el.textContent.toLowerCase().includes(termo);
        el.style.display = show ? '' : 'none';
      });
    });
  }
})();
