const items = document.querySelectorAll("[data-accordion-item]");

items.forEach((item) => {
    item.addEventListener("toggle", () => {
        if (!item.open) {
            return;
        }

        items.forEach((other) => {
            if (other !== item) {
                other.open = false;
            }
        });
    });
});