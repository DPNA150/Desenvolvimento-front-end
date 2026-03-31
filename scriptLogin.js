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

// LOGIN
document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    alert("Login realizado!");
    window.location.href = "index.html";
});

// CADASTRO ETAPA 1
document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    if (password !== confirmPassword) {
        alert("Senhas não coincidem.");
        return;
    }

    // Ir para próxima etapa
    this.style.display = 'none';
    document.getElementById('signup-form2').style.display = 'block';
});

// CADASTRO FINAL
document.getElementById('signup-form2').addEventListener('submit', function (event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    alert("Cadastro realizado com sucesso!");
    window.location.href = "index.html";
});
