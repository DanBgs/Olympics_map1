import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

const loginForm = document.getElementById('loginForm');
const authError = document.getElementById('authError');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    try {
        await pb.collection('users').authWithPassword(email, password);
        window.location.href = '/index.html';
    } catch (err) {
        authError.textContent = 'Credenziali non valide.';
    }
});
