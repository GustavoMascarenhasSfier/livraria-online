document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');

    // Inicializar o EmailJS com a sua API Key
    emailjs.init("7GvcJrgGno6OGOdp1");  

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        successMessage.textContent = '';

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            successMessage.textContent = 'Por favor, preencha todos os campos.';
            successMessage.style.color = 'red';
            return;
        }

        try {
            const serviceID = 'service_t7b2qef';  
            const templateID = 'template_tpzf4i6'; 

            const templateParams = {
                name: name,
                email: email,
                message: message 
            };

            await emailjs.send(serviceID, templateID, templateParams);

            successMessage.textContent = 'Mensagem enviada com sucesso! Confira seu e-mail para a confirmação.';
            successMessage.style.color = 'green';
            form.reset();
        } catch (error) {
            console.error('Erro ao enviar o e-mail:', error);
            successMessage.textContent = 'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente mais tarde.';
            successMessage.style.color = 'red';
        }
    });
});

