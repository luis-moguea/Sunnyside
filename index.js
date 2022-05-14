const mobileBta = document.getElementById('mobile-cta')
nav = document.querySelector('nav')
mobileBtaExit = document.getElementById('mobile-exit');

mobileBta.addEventListener('click', () => {
nav.classList.add('mobile-menu');
})     

mobileBtaExit.addEventListener('click', () => {
nav.classList.remove('mobile-menu');
})     

