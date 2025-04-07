// Espera o carregamento completo do DOM antes de executar o código
document.addEventListener('DOMContentLoaded', () => {
    // Obtém os links de alternância entre login e cadastro
    const switchToSignUp = document.getElementById('switch-to-signup');
    const switchToLogin = document.getElementById('switch-to-login');

    // Obtém os containers dos formulários de login e cadastro
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Verifica se todos os elementos existem antes de adicionar os eventos
    if (switchToSignUp && switchToLogin && loginForm && signupForm) {
        // Quando clicar em "Cadastre-se", oculta o login e mostra o cadastro
        switchToSignUp.addEventListener('click', (e) => {
            e.preventDefault();
            loginForm.style.display = 'none';
            signupForm.style.display = 'block';
        });

        // Quando clicar em "Entrar" dentro da área de cadastro, volta para login
        switchToLogin.addEventListener('click', (e) => {
            e.preventDefault();
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    // Lida com o envio do formulário de cadastro
    const formCadastro = document.querySelector('#signup-form form');
    if (formCadastro) {
        formCadastro.addEventListener('submit', function (e) {
            e.preventDefault();

            // Pega os valores de nome e email
            const nome = document.getElementById('nome').value;
            const email = document.getElementById('email').value;

            // Mostra mensagem de boas-vindas
            alert(`Obrigado por se cadastrar com a gente, ${nome}!\nSeu e-mail: ${email}`);

            // Volta para o formulário de login após o cadastro
            signupForm.style.display = 'none';
            loginForm.style.display = 'block';
        });
    }

    // Função para formatar o número de telefone automaticamente
    window.formatarTelefone = function (input) {
        let valor = input.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (valor.length <= 10) {
            valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
        } else {
            valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');
        }
        input.value = valor;
    };

    // Função para formatar o CPF automaticamente
    window.formatarCPF = function (input) {
        let valor = input.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (valor.length <= 11) {
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        }
        input.value = valor;
    };
});


// ==============================
// Validação do formulário de login
// ==============================

// Seleciona o formulário de login correto (form interno, não o container externo)
const loginFormReal = document.getElementById('login-formulario');

if (loginFormReal) {
    loginFormReal.addEventListener('submit', function (e) {
        e.preventDefault();

        // Obtém os valores dos campos de e-mail e senha
        const email = document.getElementById('login-email').value.trim();
        const senha = document.getElementById('login-senha').value.trim();

        // Verifica se os campos estão preenchidos
        if (email === '' || senha === '') {
            alert('Por favor, preencha o e-mail e a senha para continuar.');
            return;
        }

        // Se estiver tudo ok, redireciona para a página principal
        window.location.href = 'index.html';

    });
}


