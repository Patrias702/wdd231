const menuBtn = document.getElementById('menu');
const siteNav = document.getElementById('site-nav');
if (menuBtn && siteNav){
menuBtn.addEventListener('click', () => {
const open = siteNav.classList.toggle('open');
menuBtn.setAttribute('aria-expanded', String(open));
});
}