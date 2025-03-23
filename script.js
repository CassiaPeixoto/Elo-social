class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu); // Seleciona o elemento do menu mobile
        this.navList = document.querySelector(navList); // Seleciona a lista de navegação
        this.navLinks = document.querySelectorAll(navLinks); // Seleciona os links de navegação
        this.activeClass = "active"; // Classe para adicionar/remover o estado ativo

        this.handleClick = this.handleClick.bind(this); // Garante que o 'this' dentro de handleClick se refira à instância da classe
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation // Verifica se o link já tem uma animação aplicada
                ? (link.style.animation = "") // Se tiver, remove a animação
                : (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`); // Se não tiver, aplica a animação com um atraso baseado no índice
        });
    }

    handleClick() {
        this.navList.classList.toggle(this.activeClass); // Alterna a classe 'active' na lista de navegação
        this.mobileMenu.classList.toggle(this.activeClass); // Alterna a classe 'active' no menu mobile
        this.animateLinks(); // Chama a função para animar os links
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClick); // Adiciona um evento de clique ao menu mobile
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent(); // Se o menu mobile existir, adiciona o evento de clique
        }
        return this; // Retorna a instância da classe para encadeamento
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();

// seja voluntario

document.getElementById("volunteerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário para validação

    const nome = document.getElementById("nome").value.trim();
    const sobrenome = document.getElementById("sobrenome").value.trim();
    const email = document.getElementById("email").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const cep = document.getElementById("cep").value.trim();
    const logradouro = document.getElementById("logradouro").value.trim();
    const numero = document.getElementById("numero").value.trim();
    const experiencia = document.querySelector('input[name="experiencia"]:checked');
    const area = document.getElementById("area").value;
    const horario = document.getElementById("horario").value.trim();
    const motivacao = document.getElementById("motivacao").value.trim();

    // Validação básica
    if (!nome || !sobrenome || !email || !telefone || !cep || !logradouro || !numero || !experiencia || !area || !horario || !motivacao) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // Validação de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, insira um endereço de e-mail válido.");
        return;
    }

    // Validação de telefone (apenas números)
    const telefoneRegex = /^\d+$/;
    if (!telefoneRegex.test(telefone)) {
        alert("Por favor, insira um número de telefone válido.");
        return;
    }

    // Se todas as validações passarem
    alert("Inscrição enviada com sucesso!");
    this.submit(); // Envia o formulário
});

// divulgue

// Seleciona todos os ícones de interação
const icons = document.querySelectorAll('.icon');

// Adiciona um evento de clique para cada ícone
icons.forEach(icon => {
    icon.addEventListener('click', (event) => {
        const action = event.target.dataset.action;

        switch (action) {
            case 'like':
                alert('Você curtiu este post!');
                break;
            case 'share':
                alert('Você compartilhou este post!');
                break;
            case 'comment':
                alert('Você comentou neste post!');
                break;
            case 'favorite':
                alert('Você adicionou este post aos favoritos!');
                break;
            default:
                console.log('Ação desconhecida:', action);
        }

        // Adiciona uma classe para destacar o ícone clicado
        event.target.classList.toggle('active');
    });
});

// doe

// Variáveis para armazenar a opção e o valor selecionados
let selectedOption = null;
let selectedValue = null;

// Seleciona todos os botões de opções
const optionButtons = document.querySelectorAll('.option-button');
optionButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        optionButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
        // Armazena a opção selecionada
        selectedOption = button.dataset.option;
        console.log(`Opção selecionada: ${selectedOption}`);
    });
});

// Seleciona todos os botões de valores
const valueButtons = document.querySelectorAll('.value-button');
valueButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove a classe 'active' de todos os botões
        valueButtons.forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
        // Armazena o valor selecionado
        selectedValue = button.dataset.value;
        console.log(`Valor selecionado: R$${selectedValue}`);
    });
});

// Botão de doação
const donateButton = document.querySelector('.donate-button');
donateButton.addEventListener('click', () => {
    if (!selectedOption || !selectedValue) {
        alert('Por favor, selecione uma opção e um valor antes de doar.');
    } else {
        alert(`Obrigado por escolher a opção "${selectedOption}" e o valor "R$${selectedValue}".`);
    }
});

// vincular os numeros aos nomes das paginas
document.getElementById('elo-social').addEventListener('click', function() {
    this.classList.toggle('move');
});

// Adiciona um evento de click ao número 01 que redireciona para home.html
document.getElementById('link-home').addEventListener('click', function() {
    window.location.href = 'home.html';
});

// Adiciona um evento de click ao número 02 que redireciona para seja voluntario.html
document.getElementById('link-seja-voluntario').addEventListener('click', function() {
    window.location.href = 'seja voluntario.html';
});

// Adiciona um evento de click ao número 03 que redireciona para divulgue.html
document.getElementById('link-divulgue').addEventListener('click', function() {
    window.location.href = 'divulgue.html';
});

// Adiciona um evento de click ao número 04 que redireciona para doe.html
document.getElementById('link-doe').addEventListener('click', function() {
    window.location.href = 'doe.html';
});