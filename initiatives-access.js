const accessKey = 'initiativesAccessGranted';
const passcode = 'pogi';
const form = document.querySelector('[data-access-form]');
const passcodeInput = form.elements.namedItem('passcode');
const statusMessage = form.querySelector('[data-access-error]');

function unlockInitiatives() {
    document.body.classList.remove('initiatives-locked');
    passcodeInput.value = '';
}

try {
    if (sessionStorage.getItem(accessKey) === 'true') {
        unlockInitiatives();
    }
} catch (error) {
    statusMessage.textContent = 'Session storage is unavailable. You can still unlock this page for now.';
}

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (passcodeInput.value !== passcode) {
        statusMessage.textContent = 'That passcode does not match. Please try again.';
        passcodeInput.focus();
        return;
    }

    try {
        sessionStorage.setItem(accessKey, 'true');
    } catch (error) {
        statusMessage.textContent = 'Access granted for this page, but your browser could not save the session.';
    }

    unlockInitiatives();
});
