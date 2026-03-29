function toggleForm() {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const signupForm2 = document.getElementById('signup-form2');
    const formTitle = document.getElementById('form-title');

    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        signupForm2.style.display = 'none';
        formTitle.textContent = 'Login';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        signupForm2.style.display = 'none';
        formTitle.textContent = 'Cadastro';
    }
}

function login() {
    const usernameLogin = document.getElementById('login-username').value;
    const passwordLogin = document.getElementById('login-password').value;

    if (usernameLogin === "" || passwordLogin === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        window.location.href = "index.html";
    }
}

function seguir() {

    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
        return;
    } else if (password !== confirmPassword) {
        alert("As senhas não coincidem.");
    }

}

function signup() {

    if (username === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("FOI PORRA.");
    }

}