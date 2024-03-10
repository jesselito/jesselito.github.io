const collapse = document.querySelector('.collapse');

const contentGroup = document.querySelector('.content-group');

collapse.addEventListener('click', function () {
    if (contentGroup.style.display === 'block') {
        collapse.innerText = '+';
        contentGroup.style.display = 'none';
    } else {
        collapse.innerText = '-';
        contentGroup.style.display = "block";
    }

});