let btnOpen = document.querySelector('.btn--write');
let btnClose = document.querySelector('.form-partners__cancel-link');
let modal = document.querySelector('.modal');

btnOpen.addEventListener('click', () => {
    modal.style.display = 'block';
});

btnClose.addEventListener('click', () => {
    modal.style.display = 'none';
});