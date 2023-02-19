theme.addEventListener('change', () => {
    if (theme.checked) document.body.classList.add('light');
    else document.body.classList.remove('light');
});