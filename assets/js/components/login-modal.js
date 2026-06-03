const modal = document.querySelector('.modal-login');
const btnModals = document.querySelectorAll('.btn-login');
const closeModal = document.querySelector('.modal__close');

btnModals.forEach((btnModal) => {
    btnModal.addEventListener('click', () => {
        modal?.showModal();
    });
});

closeModal?.addEventListener('click', () => {
    modal?.close();
});

// Valida se tem erro

function toggleLoginInputError(input, message) {
    if (!input) return;

    const label = input.closest('.login__label');
    if (!label) return;

    const existing = label.querySelector('.login__error');
    const hasError = Boolean(message);

    input.classList.toggle("input__error", hasError);
    input.setAttribute('aria-invalid', hasError ? 'true' : 'false');

    if (hasError) {
        if (!existing) {
            const error = document.createElement('span');
            error.className = 'login__error';
            error.setAttribute('role', 'alert');
            error.textContent = message;
            label.appendChild(error);
        } else {
            existing.textContent = message;
        }
    } else {
        existing?.remove();
        input.removeAttribute('aria-invalid');
    }
}

//Validação formulario

const loginForm = document.querySelector('.login-forms');
const name = loginForm?.querySelector('[name="name"]');
const email = loginForm?.querySelector('[name="email"]');
const senha = loginForm?.querySelector('[name="senha"]');
const submitBtn = loginForm?.querySelector('.submit-btn, .login__btn');

function validarLoginForm() {
    let formularioValido = true;

    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const senhaValue = senha.value.trim();

    if (nameValue === '') {
        toggleLoginInputError(name, 'Por favor, informe seu nome.');
        formularioValido = false;
    } else {
        toggleLoginInputError(name, null);
    }

    if (emailValue === '') {
        toggleLoginInputError(email, 'Por favor, informe seu e-mail.');
        formularioValido = false;
    } else if (!emailValue.includes("@")){
        toggleLoginInputError(email, 'E-mail inválido. Ex: nome@empresa.com');
        formularioValido = false;
    } else {
        toggleLoginInputError(email, null);
    }

    if (senhaValue === '') {
        toggleLoginInputError(senha, 'Por favor, informe sua senha.');
        formularioValido = false;
    } else {
        toggleLoginInputError(senha, null);
    }

    const ticket = {
        nameValue,
        emailValue,
        senhaValue
    };

    return {
        formularioValido,
        ticket
    };
}

function handleLoginSubmit(event) {
    event.preventDefault();

    const result = validarLoginForm();

    if (!result.formularioValido) {
        return;
    }

    console.log(result.ticket);
    alert("Login efetuado, cheque o console.");
    modal?.close();
}

if (loginForm && submitBtn && name && email && senha) {
    loginForm.addEventListener('submit', handleLoginSubmit);

    if (submitBtn.type === 'button') {
        submitBtn.addEventListener('click', handleLoginSubmit);
    }

    [name, email, senha].forEach(input => {
        input.addEventListener('input', () => toggleLoginInputError(input, null));
    });
}


const eyeIcon = document.querySelector(".password-show");
const password = loginForm?.querySelector('[name="senha"]');

if (eyeIcon && password) {
    eyeIcon.addEventListener('click', (event) => {
        event.preventDefault();

        const passwordIsVisible = password.type === "text";
        password.type = passwordIsVisible ? "password" : "text";
        const icon = eyeIcon.querySelector('i') || eyeIcon;

        icon.classList.toggle("fa-eye", !passwordIsVisible);
        icon.classList.toggle("fa-eye-slash", passwordIsVisible);
    });
}
