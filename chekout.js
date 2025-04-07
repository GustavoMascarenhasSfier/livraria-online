document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita o redirecionamento da página

        let valid = true;
        const inputs = form.querySelectorAll("input, select");

        inputs.forEach(input => {
            if (!input.value.trim()) {
                input.classList.add("invalid");
                valid = false;
            } else {
                input.classList.remove("invalid");
            }
        });

        if (valid) {
            successMessage.textContent = "Pagamento realizado com sucesso!";
            successMessage.style.color = "green";
            successMessage.style.fontSize = "16px";
            successMessage.style.marginTop = "10px";

            form.reset(); // Limpa os campos após o sucesso
        }
    });
});
