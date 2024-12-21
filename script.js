document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const enterButton = document.getElementById('enter-button');
    const lockScreen = document.getElementById('lock-screen');
    const notesScreen = document.getElementById('notes-screen');
    const lockButton = document.getElementById('lock-button');
    const notesTextarea = document.getElementById('notes-textarea');

    const PASSWORD = '394800';

    // Load saved notes from localStorage
    notesTextarea.value = localStorage.getItem('notes') || '';

    enterButton.addEventListener('click', () => {
        const enteredPassword = passwordInput.value;
        if (enteredPassword === PASSWORD) {
            lockScreen.style.display = 'none';
            notesScreen.style.display = 'flex';
        } else {
            alert('Incorrect password. Please try again.');
        }
    });

    lockButton.addEventListener('click', () => {
        localStorage.setItem('notes', notesTextarea.value);
        notesScreen.style.display = 'none';
        lockScreen.style.display = 'block';
        passwordInput.value = '';
    });

    // Optional: Save notes automatically on textarea changes
    notesTextarea.addEventListener('input', () => {
        localStorage.setItem('notes', notesTextarea.value);
    });
});
