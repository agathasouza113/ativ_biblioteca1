const livroService = {
    listar: () => {
        return livroRepository.listar();
    },

    adicionar: (livro) => {
        if(!livro.titulo){
            alert("Titulo é obrigatório");
            return;
        }
        return livroRepository.salvar(livro);
    },

    remover: (titulo, autor) => {
        if(!titulo || !autor){
            alert("Título e autor são obrigatórios");
            return;
        }
        return livroRepository.remover(titulo, autor);
    }
};