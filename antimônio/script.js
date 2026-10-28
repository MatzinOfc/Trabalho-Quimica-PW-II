document.body.classList.add('js-ativo');

var menuBtn = document.getElementById('menuBtn');
var menu = document.getElementById('menuSecoes');
var topoBtn = document.getElementById('topoBtn');
var links = menu.querySelectorAll('a');

menuBtn.addEventListener('click', function () {
  var aberto = menu.classList.toggle('aberto');
  menuBtn.setAttribute('aria-expanded', aberto);
});

menu.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    menu.classList.remove('aberto');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

window.addEventListener('scroll', function () {
  topoBtn.hidden = window.scrollY < 600;

  var atual = null;
  links.forEach(function (l) {
    var alvo = document.querySelector(l.getAttribute('href'));
    if (alvo && alvo.getBoundingClientRect().top <= 120) {
      atual = l;
    }
  });
  links.forEach(function (l) {
    l.classList.toggle('atual', l === atual);
  });
});

topoBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
