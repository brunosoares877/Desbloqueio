// Função para limpar CPF (remover formatação)
function limparCPF(cpf) {
    return cpf.replace(/[^\d]/g, '');
}

// Função para formatar CPF
function formatarCPF(cpf) {
    const numeros = limparCPF(cpf);
    return numeros.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
}

// Função para validar se todos os dígitos são iguais
function todosDigitosIguais(cpf) {
    return cpf.split('').every(digito => digito === cpf[0]);
}

// Função para calcular dígito verificador
function calcularDigito(cpf, posicao) {
    let soma = 0;
    let peso = posicao === 1 ? 10 : 11;
    
    for (let i = 0; i < cpf.length; i++) {
        soma += parseInt(cpf[i]) * peso;
        peso--;
    }
    
    const resto = soma % 11;
    return resto < 2 ? 0 : 11 - resto;
}

// Função principal de validação de CPF
function validarCPF(cpf) {
    // Remove formatação
    const cpfLimpo = limparCPF(cpf);
    
    // Verifica se tem 11 dígitos
    if (cpfLimpo.length !== 11) {
        return {
            valido: false,
            motivo: 'CPF deve conter exatamente 11 dígitos'
        };
    }
    
    // Verifica se todos os dígitos são iguais
    if (todosDigitosIguais(cpfLimpo)) {
        return {
            valido: false,
            motivo: 'CPF com todos os dígitos iguais é inválido'
        };
    }
    
    // Valida primeiro dígito verificador
    const primeiroDigito = calcularDigito(cpfLimpo.substring(0, 9), 1);
    if (parseInt(cpfLimpo[9]) !== primeiroDigito) {
        return {
            valido: false,
            motivo: 'Primeiro dígito verificador inválido'
        };
    }
    
    // Valida segundo dígito verificador
    const segundoDigito = calcularDigito(cpfLimpo.substring(0, 10), 2);
    if (parseInt(cpfLimpo[10]) !== segundoDigito) {
        return {
            valido: false,
            motivo: 'Segundo dígito verificador inválido'
        };
    }
    
    return {
        valido: true,
        cpfFormatado: formatarCPF(cpfLimpo)
    };
}

// Aguarda o DOM estar pronto
document.addEventListener('DOMContentLoaded', function() {
    // Formatação automática do input
    const cpfInput = document.getElementById('cpfInput');
    if (cpfInput) {
        cpfInput.addEventListener('input', function(e) {
    let valor = limparCPF(e.target.value);
    
    // Limita a 11 dígitos
    if (valor.length > 11) {
        valor = valor.substring(0, 11);
    }
    
    // Aplica formatação
    if (valor.length > 0) {
        e.target.value = formatarCPF(valor);
    } else {
        e.target.value = valor;
    }
        });
    }

    // Manipulação do formulário
    const cpfForm = document.getElementById('cpfForm');
    if (cpfForm) {
        cpfForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const cpfInput = document.getElementById('cpfInput');
    const cpf = cpfInput.value;
    const resultDiv = document.getElementById('result');
    
    // Remove classes anteriores
    resultDiv.classList.remove('hidden', 'valid', 'invalid', 'error');
    
    if (!cpf || limparCPF(cpf).length === 0) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '⚠️ Por favor, digite seu CPF para verificar.';
        return;
    }
    
    const cpfLimpo = limparCPF(cpf);
    
    // Verifica se tem 11 dígitos
    if (cpfLimpo.length !== 11) {
        resultDiv.className = 'result error';
        resultDiv.innerHTML = '⚠️ CPF deve conter exatamente 11 dígitos.';
        return;
    }
    
    // Se tem 11 dígitos, mostra que está bloqueado
    const cpfFormatado = formatarCPF(cpfLimpo);
    resultDiv.className = 'result blocked';
    resultDiv.innerHTML = `
        🔒 <strong>BENEFÍCIO BLOQUEADO</strong><br><br>
        CPF: <strong>${cpfFormatado}</strong><br><br>
        Seu benefício está bloqueado e precisa ser desbloqueado para liberar o pagamento e receber seu empréstimo.
    `;
    
    // Mostra o botão de desbloqueio
    const unlockButtonContainer = document.getElementById('unlockButtonContainer');
    if (unlockButtonContainer) {
        unlockButtonContainer.classList.remove('hidden');
    }
        });
    }

    // Ação do botão de desbloqueio
    const unlockButton = document.getElementById('unlockButton');
    if (unlockButton) {
        unlockButton.addEventListener('click', function() {
            alert('Redirecionando para desbloqueio...');
            // Aqui você pode adicionar a ação desejada, como redirecionar para outra página
        });
    }

    // Carousel functionality
    let currentSlide = 0;
    const totalSlides = 3;
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    if (carousel && indicators && indicators.length > 0) {
        function updateCarousel() {
            if (carousel) {
                carousel.style.transform = `translateX(-${currentSlide * 33.333}%)`;
            }
            
            // Atualiza indicadores
            indicators.forEach((indicator, index) => {
                if (index === currentSlide) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateCarousel();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateCarousel();
        }

        // Event listeners do carousel
        if (nextBtn) {
            nextBtn.addEventListener('click', nextSlide);
        }
        if (prevBtn) {
            prevBtn.addEventListener('click', prevSlide);
        }

        // Indicadores clicáveis
        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                currentSlide = index;
                updateCarousel();
            });
        });
    }

    // Auto-play (opcional - descomente se quiser)
    // setInterval(nextSlide, 5000);
});
