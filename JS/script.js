/* Validação de informções de contato para redirecionar para o contato do watts*/
const whatsappNumber = '5531986520585';

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', event => {
        event.preventDefault();

        const firstName = document.getElementById('firstName')?.value.trim() || '';
        const lastName = document.getElementById('lastName')?.value.trim() || '';
        const email = document.getElementById('email')?.value.trim() || '';
        const phone = document.getElementById('phone')?.value.trim() || '';
        const message = document.getElementById('message')?.value.trim() || ''; /*Pega a id de cada input e valida informações de campos obrigatorios */

        const text = `Olá, meu nome é ${firstName} ${lastName}.\n` +
            `E-mail: ${email}\n` +
            `Telefone: ${phone}\n\n` +
            `Mensagem:\n${message}`; /* texto que será enviado no watts*/

        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
    });
}
/* botão "MEU BOTÃO" de direcionamento para pagina SOBRE*/
document.getElementById("meuBotao")?.addEventListener('click', () => {
    window.location.href = "./sobre.html"; // URL de destino
});
/* Evento DOMContentLoaded (pode ser substituido pelo (window.onLoad) DOMCOntentLoaded e disparado quando o DOM (HTML)
está pronto e usado para ter uma interatividade rapida no site, e foi utilizado para criar a sidebar HAMBURGUER*/
document.addEventListener('DOMContentLoaded', () => {
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
});
/*obs (window.onLoad) disparado apenas quando a pagina está 100% carregada (CSS,IMG etc) usado para efeitos visuais animações etc*/
