import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');

const registerForm = document.getElementById('registerForm');
const authError = document.getElementById('authError');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const passwordConfirm = document.getElementById('registerPasswordConfirm').value;
    const avatarInput = document.getElementById('registerAvatar');
    if (password !== passwordConfirm) {
        authError.textContent = 'Le password non coincidono.';
        return;
    }
    const formData = new FormData();
    formData.append('username', name);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('passwordConfirm', passwordConfirm);
    if (avatarInput && avatarInput.files[0]) {
        formData.append('avatar', avatarInput.files[0]);
    }
    try {
        await pb.collection('users').create(formData);
        authError.textContent = 'Registrazione avvenuta! Ora puoi accedere.';
        setTimeout(() => { window.location.href = '/login.html'; }, 1000);
    } catch (err) {
        authError.textContent = 'Errore nella registrazione.';
    }
});
