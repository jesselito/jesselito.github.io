const storageKey = 'jesse-writing-draft';
const editor = document.querySelector('#writing-draft');
const status = document.querySelector('#writing-status');

function showStorageError(error) {
    if (!(error instanceof DOMException)) {
        throw error;
    }

    console.error('Unable to access the local writing draft.', error);
    status.textContent = 'Your browser could not access local storage. The draft has not been saved.';
}

try {
    const savedDraft = localStorage.getItem(storageKey);

    if (savedDraft !== null) {
        editor.value = savedDraft;
        status.textContent = 'Saved draft loaded from this browser.';
    }
} catch (error) {
    showStorageError(error);
}

editor.addEventListener('input', () => {
    status.textContent = 'Unsaved changes.';
});

document.querySelector('#save-draft').addEventListener('click', () => {
    try {
        localStorage.setItem(storageKey, editor.value);
        status.textContent = 'Draft saved in this browser.';
    } catch (error) {
        showStorageError(error);
    }
});

document.querySelector('#clear-draft').addEventListener('click', () => {
    if (!window.confirm('Clear the saved draft from this browser?')) {
        return;
    }

    try {
        localStorage.removeItem(storageKey);
        editor.value = '';
        status.textContent = 'Draft cleared from this browser.';
    } catch (error) {
        showStorageError(error);
    }
});
