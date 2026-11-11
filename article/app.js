const toggle = document.querySelector('.guide-toggle');
const contentGroup = document.querySelector('.content-group');

toggle.addEventListener('click', () => {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    const icon = toggle.querySelector('span');

    toggle.setAttribute('aria-expanded', String(!isExpanded));
    contentGroup.setAttribute('aria-hidden', String(isExpanded));
    contentGroup.inert = isExpanded;
    contentGroup.classList.toggle('is-open', !isExpanded);
    toggle.firstChild.textContent = isExpanded ? 'Show setup steps ' : 'Hide setup steps ';
    icon.textContent = isExpanded ? '+' : '−';

    if (isExpanded) {
        contentGroup.style.maxHeight = `${contentGroup.scrollHeight}px`;
        requestAnimationFrame(() => {
            contentGroup.style.maxHeight = '0px';
        });
    } else {
        contentGroup.style.maxHeight = `${contentGroup.scrollHeight}px`;
    }
});

contentGroup.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'max-height' && contentGroup.classList.contains('is-open')) {
        contentGroup.style.maxHeight = 'none';
    }
});