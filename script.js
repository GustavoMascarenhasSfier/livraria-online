// Alternar entre o formulário de login e cadastro
const switchToSignUp = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');

switchToSignUp.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    loginForm.style.display = 'none'; // Esconde o formulário de login
    signupForm.style.display = 'block'; // Mostra o formulário de cadastro
});

switchToLogin.addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    signupForm.style.display = 'none'; // Esconde o formulário de cadastro
    loginForm.style.display = 'block'; // Mostra o formulário de login
});

// Função para formatar telefone 
function formatarTelefone(input) {     
    let valor = input.value.replace(/\D/g, '');    
     if (valor.length <= 10) {         
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');    
     } else {        
         valor = valor.replace(/^(\d{2})(\d{5})(\d{0,4})$/, '($1) $2-$3');    
         }     input.value = valor; } 
          // Função para formatar CPF function formatarCPF(input)
           {     let valor = input.value.replace(/\D/g, '');     
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');     
            valor = valor.replace(/(\d{3})(\d)/, '$1.$2');     
            valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');     
            input.value = valor; }

            //funcao para formatar o cpf

            function formatarCPF(input) {
                let valor = input.value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
            
                // Formata o CPF
                if (valor.length <= 11) {
                    valor = valor.replace(/^(\d{3})(\d{3})(\d{3})(\d{1})$/, '$1.$2.$3-$4');
                }
            
                input.value = valor; // Atualiza o valor do input com o formato n
                
            }


// Função que só será chamada na página específica
function initPageSpecificFunction() {
    if (window.location.pathname.includes("html2.html")) {
        console.log("Página Home");
        // Coloque funções específicas para home aqui
    } else if (window.location.pathname.includes("html2.html")) {
        console.log("html2");
        // Coloque funções específicas para outra página aqui
    }
}

initPageSpecificFunction();

            
            
