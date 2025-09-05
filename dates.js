const yearEl = document.getElementById('year');
const lastModEl = document.getElementById('lastModified');
if (yearEl) yearEl.textContent = new Date().getFullYear();
if (lastModEl) lastModEl.textContent = 'Last Modified: ' + document.lastModified;


// Seed small directory preview
const seed = [
{ name:'Neon Bean Roasters', cat:'Dining', hood:'Arts District' },
{ name:'Desert Tech Labs', cat:'Services', hood:'Summerlin' },
{ name:'Valley Outfitters', cat:'Retail', hood:'Henderson' }
];
const grid = document.getElementById('dirGrid');
if (grid){
seed.forEach(b=>{
const card = document.createElement('div');
card.className = 'panel';
card.innerHTML = `<h3 style="margin:0 0 .3rem">${b.name}</h3><div class="muted">${b.cat} · ${b.hood}</div>`;
grid.appendChild(card);
});
}