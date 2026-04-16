const whatsappNumber = '5511999999999'; // Substitua pelo número real sem sinais, ex: 5511999999999

const contatoForm = document.getElementById('contactForm');
if (contatoForm) {
    contatoForm.addEventListener('submit', event => {
        event.preventDefault();

        const firstName = document.getElementById('firstName')?.value.trim();
        const lastName = document.getElementById('lastName')?.value.trim();
        const email = document.getElementById('email')?.value.trim();
        const phone = document.getElementById('phone')?.value.trim();
        const message = document.getElementById('message')?.value.trim();

        const text = `Olá, meu nome é ${firstName} ${lastName}.\n` +
            `E-mail: ${email}\n` +
            `Telefone: ${phone}\n\n` +
            `Mensagem:\n${message}`;

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    });
}

const botaoSobre = document.getElementById('meuBotao');
if (botaoSobre) {
    botaoSobre.onclick = () => {
        window.location.href = './sobre.html';
    };
}

const menuBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const mainContainer = document.querySelector('.main-container');
if (menuBtn && sidebar && mainContainer) {
    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mainContainer.classList.toggle('sidebar-open');

        if (sidebar.classList.contains('open')) {
            menuBtn.textContent = '✕';
        } else {
            menuBtn.textContent = '☰';
        }
    });

    const navLinks = sidebar.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('open');
                mainContainer.classList.remove('sidebar-open');
                menuBtn.textContent = '☰';
            }
        });
    });
}

