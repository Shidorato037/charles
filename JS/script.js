document.getElementById("meuBotao").onclick = function () {
    window.location.href = "./sobre.html"; // URL de destino
};
document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const mainContainer = document.querySelector('.main-container');

    menuBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        mainContainer.classList.toggle('sidebar-open');
        
        // Troca o ícone entre ☰ e ✕
        if (sidebar.classList.contains('open')) {
            menuBtn.textContent = '✕';
        } else {
            menuBtn.textContent = '☰';
        }
    });

    // Fechar sidebar ao clicar em um link (bom para mobile)
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
});

