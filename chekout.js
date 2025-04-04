document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("checkout-form");
    const inputs = form.querySelectorAll("input");
    const cardNumberInput = document.getElementById("cardnumber");

    // Show Visa Logo when typing in card number
    cardNumberInput.addEventListener("focus", () => {
        const logo = document.querySelector(".visa-logo");
        logo.style.opacity = "1";
        logo.style.transform = "scale(1.1)";
    });

    cardNumberInput.addEventListener("blur", () => {
        const logo = document.querySelector(".visa-logo");
        logo.style.opacity = "0";
        logo.style.transform = "scale(1)";
    });

    // Form Validation
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        inputs.forEach(input => {
            const errorMessage = input.nextElementSibling;

            if (!input.value.trim()) {
                input.classList.add("invalid");
                errorMessage.textContent = "Please fill out this field.";
                errorMessage.style.visibility = "visible";
                valid = false;
            } else {
                input.classList.remove("invalid");
                errorMessage.style.visibility = "hidden";
            }
        });

        if (valid) {
            alert("Payment Successful!");
            form.reset();
        }
    });
});
