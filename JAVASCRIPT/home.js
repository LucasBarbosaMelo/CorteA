document.addEventListener('DOMContentLoaded', function () {
    // Função que alterna a exibição do menu do usuário
    function toggleMenu() {
        const menu = document.querySelector(".user-menu");
        const userIcon = document.querySelector(".user-icon");

        // Alterna a visibilidade do menu e adiciona uma classe ao ícone do usuário
        if (menu.style.display === "block") {
            menu.style.display = "none";
            userIcon.classList.remove("active");
        } else {
            menu.style.display = "block";
            userIcon.classList.add("active");
        }
    }

    // Atribui o evento de clique ao ícone de usuário
    const userIcon = document.querySelector(".user-icon");
    if (userIcon) {
        userIcon.addEventListener('click', toggleMenu);
    }
});