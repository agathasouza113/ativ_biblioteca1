let livros = [];

const livroRepository = {
    listar: () => livros,

    salvar: (livro) => {
        livros.push(livro);
        return livro;
    },

    remover: (titulo, autor) => {
        livros = livros.filter(livro => 
        !(livro.titulo === titulo && livro.autor === autor));
    }
}