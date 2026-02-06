let count = 0;
const wrapper = document.querySelector('.wrapper');
const result = document.querySelector('.result span');
wrapper.addEventListener('click', (e) => {
    [...wrapper.children].forEach(el => el.textContent = 'Нажми меня');
    e.target.textContent = 'Нажата';
    count++;
    result.innerHTML = count;
})