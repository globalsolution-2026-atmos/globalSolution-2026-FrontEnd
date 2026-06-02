const modal = document.querySelector('.modal-login');
const btnModals = document.querySelectorAll('.btn-login');
const closeModal = document.querySelector('.modal__close');

btnModals.forEach((btnModal) => {
    btnModal.addEventListener('click', () => {
        modal.showModal();
    });
});

closeModal.addEventListener('click', () => {
    modal.close();
});

// Valida se tem erro

function toggleLoginInputError(input, hasError) {
    input.classList.toggle("input__error", hasError);
}

//Validação formulario

const name = document.querySelector('.login-name');
const email = document.querySelector('.login-email');
const senha = document.querySelector('.login-senha');
const submitBtn = document.querySelector('.submit-btn')

function validarLoginForm() {
    let formularioValido = true;

    const nameValue = name.value;
    const emailValue = email.value;
    const senhaValue = senha.value;

    if (nameValue === '') {
        toggleLoginInputError(name, true);
        formularioValido = false;
    } else {
        toggleLoginInputError(name, false);
    }

    if (emailValue === '') {
        toggleLoginInputError(email, true);
        formularioValido = false;
    } else if (!emailValue.includes("@")){
        toggleLoginInputError(email, true);
        formularioValido = false;
    } else {
        toggleLoginInputError(email, false);
    }

    if (senhaValue === '') {
        toggleLoginInputError(senha, true);
        formularioValido = false;
    } else {
        toggleLoginInputError(senha, false);
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

if (submitBtn && name && email && senha && modal) {
    submitBtn.addEventListener('click', (event)=> {
        event.preventDefault();

        const result = validarLoginForm();

        if (!result.formularioValido) {
            return;
        }

        console.log(result.ticket);
        alert("Login efetuado, cheque o console.");
        modal.close();

    });
}


const eyeIcon = document.querySelector(".password-show");
const password = document.querySelector(".login-senha");

if (eyeIcon && password) {
    eyeIcon.addEventListener('click', (event) => {
        event.preventDefault();

        const passwordIsVisible = password.type === "text";
        password.type = passwordIsVisible ? "password" : "text";

        eyeIcon.classList.toggle("fa-eye", !passwordIsVisible);
        eyeIcon.classList.toggle("fa-eye-slash", passwordIsVisible);
    });
}
