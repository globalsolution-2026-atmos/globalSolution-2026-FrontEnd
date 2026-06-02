// Guarda em variavel o popup principal dos criadores.
// Todo o restante da logica so roda se esse popup existir na pagina.
const popupCreators = document.getElementById("popup-creators");

if (popupCreators) {
    // Guarda em variaveis os elementos que abrem, fecham e compoem o popup.
    // O ultimoCardFocado serve para devolver o foco ao card depois que o popup fecha.
    const overlayCreators = popupCreators.querySelector(".popup__overlay");
    const botoesFechar = popupCreators.querySelectorAll(".popup__close");
    const cardsCreators = document.querySelectorAll(".team-roles__grid [data-creator-popup]");
    const popupCards = popupCreators.querySelectorAll(".popup__card");
    let ultimoCardFocado = null;

    // Abre o popup do criador escolhido.
    // Primeiro limpa qualquer card ativo, depois ativa apenas o card que combina com o data-creator.
    function abrirPopupCreator(creator, triggerElement) {
        popupCards.forEach((popupCard) => {
            popupCard.classList.remove("active");
        });

        const popupCardAtual = popupCreators.querySelector(`[data-creator-popup="${creator}"]`);

        if (!popupCardAtual) {
            return;
        }

        const popupTitle = popupCardAtual.querySelector(".popup__team__card-label");
        ultimoCardFocado = triggerElement || document.activeElement;

        popupCreators.classList.add("active");
        popupCreators.setAttribute("aria-hidden", "false");

        if (popupTitle) {
            popupCreators.setAttribute("aria-labelledby", popupTitle.id);
        }

        popupCardAtual.classList.add("active");
        popupCardAtual.focus();
    }

    // Fecha o popup, remove os cards ativos e devolve o foco para quem abriu.
    function fecharPopupCreators() {
        popupCreators.classList.remove("active");
        popupCreators.setAttribute("aria-hidden", "true");

        popupCards.forEach((popupCard) => {
            popupCard.classList.remove("active");
        });

        if (ultimoCardFocado) {
            ultimoCardFocado.focus();
        }
    }

    // Cada card abre o popup correspondente no clique.
    // Se o clique foi em um link dentro do card, o popup nao abre.
    cardsCreators.forEach((cardCreator) => {
        cardCreator.addEventListener("click", (event) => {
            if (event.target.closest("a")) {
                return;
            }

            abrirPopupCreator(cardCreator.dataset.creatorPopup, cardCreator);
        });

        // Permite abrir o popup pelo teclado usando Enter ou Espaco.
        cardCreator.addEventListener("keydown", (event) => {
            if (event.target.closest("a")) {
                return;
            }

            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                abrirPopupCreator(cardCreator.dataset.creatorPopup, cardCreator);
            }
        });
    });

    // Botoes de fechar e overlay fecham o popup.
    botoesFechar.forEach((botaoFechar) => {
        botaoFechar.addEventListener("click", fecharPopupCreators);
    });

    if (overlayCreators) {
        overlayCreators.addEventListener("click", fecharPopupCreators);
    }

    // A tecla Escape tambem fecha o popup quando ele estiver aberto.
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && popupCreators.classList.contains("active")) {
            fecharPopupCreators();
        }
    });
}
