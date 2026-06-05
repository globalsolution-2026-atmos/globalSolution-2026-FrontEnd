// ── Formulário de contato ──
const contactForm = document.querySelector('.contato__form');
const customSelect = contactForm?.querySelector('[data-select]');
const subjectInput = contactForm?.querySelector('input[name="subject"]');

if (customSelect && subjectInput) {
    const trigger = customSelect.querySelector('.contato__select-trigger');
    const valueText = customSelect.querySelector('[data-select-value]');
    const options = customSelect.querySelectorAll('[data-value]');

    function openSelect() {
        customSelect.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
    }

    function closeSelect() {
        customSelect.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
    }

    trigger.addEventListener('click', event => {
        event.stopPropagation();
        const isOpen = customSelect.classList.contains('is-open');
        isOpen ? closeSelect() : openSelect();
    });

    options.forEach(option => {
        option.addEventListener('click', event => {
            event.stopPropagation();
            // Mostra o texto legível, guarda o slug no hidden
            valueText.textContent = option.textContent.trim();
            subjectInput.value = option.dataset.value;
            customSelect.classList.add('has-value');
            setSubjectError(null);

            options.forEach(item => item.setAttribute('aria-selected', 'false'));
            option.setAttribute('aria-selected', 'true');

            closeSelect();
            trigger.focus();
        });
    });

    // Fecha ao clicar fora
    document.addEventListener('click', event => {
        if (!customSelect.contains(event.target)) closeSelect();
    });

    // Fecha com Escape
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeSelect();
    });
}

const nameInput = contactForm?.querySelector('[name="name"]');
const emailInput = contactForm?.querySelector('[name="email"]');
const empresaInput = contactForm?.querySelector('[name="empresa"]');
const mensagemInput = contactForm?.querySelector('[name="mensagem"]');

// Mostra ou limpa uma mensagem de erro abaixo do campo
function setError(input, message) {
    if (!input) return;

    const label = input.closest('.contato__label');
    if (!label) return;

    const existing = label.querySelector('.contato__error');

    if (message) {
        if (!existing) {
            const error = document.createElement('span');
            error.className = 'contato__error';
            error.setAttribute('role', 'alert');
            error.textContent = message;
            label.appendChild(error);
        } else {
            existing.textContent = message;
        }
        input.setAttribute('aria-invalid', 'true');
    } else {
        existing?.remove();
        input.removeAttribute('aria-invalid');
    }
}

function setSubjectError(message) {
    const trigger = customSelect?.querySelector('.contato__select-trigger');
    const label = customSelect?.closest('.contato__label');
    const existing = label?.querySelector('.contato__error');

    if (!trigger || !label) return;

    if (message) {
        if (!existing) {
            const error = document.createElement('span');
            error.className = 'contato__error';
            error.setAttribute('role', 'alert');
            error.textContent = message;
            label.appendChild(error);
        } else {
            existing.textContent = message;
        }
        trigger.setAttribute('aria-invalid', 'true');
    } else {
        existing?.remove();
        trigger.removeAttribute('aria-invalid');
    }
}

function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function createTicketId() {
    const timestamp = Date.now().toString(36).toUpperCase();
    const suffix = Math.random().toString(36).slice(2, 6).toUpperCase();
    return `ATMOS-${timestamp}-${suffix}`;
}

function validateForm() {
    let valid = true;

    if (!nameInput.value.trim()) {
        setError(nameInput, 'Por favor, informe seu nome.');
        valid = false;
    } else {
        setError(nameInput, null);
    }

    if (!emailInput.value.trim()) {
        setError(emailInput, 'Por favor, informe seu e-mail.');
        valid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
        setError(emailInput, 'E-mail inválido. Ex: nome@empresa.com');
        valid = false;
    } else {
        setError(emailInput, null);
    }

    if (!empresaInput.value.trim()) {
        setError(empresaInput, 'Por favor, informe sua empresa ou instituição.');
        valid = false;
    } else {
        setError(empresaInput, null);
    }

    if (!subjectInput.value.trim()) {
        setSubjectError('Por favor, selecione um assunto.');
        valid = false;
    } else {
        setSubjectError(null);
    }

    if (!mensagemInput.value.trim()) {
        setError(mensagemInput, 'Por favor, escreva sua mensagem.');
        valid = false;
    } else {
        setError(mensagemInput, null);
    }

    return valid;
}

if (contactForm && nameInput && emailInput && empresaInput && mensagemInput && subjectInput) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        if (!validateForm()) return;

        const ticket = {
            id: createTicketId(),
            createdAt: new Date().toISOString(),
            name: nameInput.value.trim(),
            email: emailInput.value.trim(),
            empresa: empresaInput.value.trim(),
            subject: subjectInput?.value || '',
            mensagem: mensagemInput.value.trim()
        };

        console.log('Ticket registrado:', ticket);
        alert(`Mensagem enviada com sucesso! Ticket: ${ticket.id}`);
        // TODO: substituir pelo envio real (fetch para API)
    });

    // Limpa o erro do campo assim que o usuário começa a corrigir
    [nameInput, emailInput, empresaInput, mensagemInput].forEach(input => {
        input?.addEventListener('input', () => setError(input, null));
    });
}
