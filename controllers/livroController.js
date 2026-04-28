const livroController ={
    listarLivro: () => {
        const livros = livroService.listar();
        const lista = document.getElementById("listaLivros");

        lista.innerHTML = "";

        livros.forEach(livro =>{
            const item = document.createElement("li");
            item.textContent = `${livro.titulo} - ${livro.autor}`;
            lista.appendChild(item);
        });
    },

    adicionarLivro: () => {
        const titulo = prompt("Título do livro:");
        const autor = prompt("Autor");

        livroService.adicionar({titulo,autor});
    },

    removerLivro: () => {
        const titulo = prompt("Digite o título do livro que deseja remover:");
        const autor = prompt("Digite o autor do livro:");

        livroService.remover(titulo, autor);
        livroController.listarLivro();
    }
};