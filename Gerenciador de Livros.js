const gerenciadorDeLivros = {
    titulo: 'Divina Comédia',
    autor: 'Dante Alighiere',
    anoNascimento: 1304,
    disponivel: true,

    obterDetalhes() {
        return `Titúlo: ${this.titulo}, Autor: ${this.autor}, 
        Ano Nascimento: ${this.anoNascimento}, Disponibilidade: ${this.disponivel}`
    },

    emprestarLivro() {
        if (this.disponivel == true) {
            this.disponivel = false
            return `Estou emprestando o Livro.`
        } else if (this.disponivel == false) {
            return `O livro está emprestado!`
        }
    },

    devolverLivro() {
        if (this.disponivel == false) {
            this.disponivel = true
            return `Estou devolvendo o livro.`
        } else if (this.disponivel == true) {
            return `O livro foi devolvido!`
        }
    }
}
// Emprestar Livro
gerenciadorDeLivros.emprestarLivro()
console.log(gerenciadorDeLivros.emprestarLivro())
console.log(gerenciadorDeLivros.obterDetalhes())
// Devolver Livro
gerenciadorDeLivros.devolverLivro()
console.log(gerenciadorDeLivros.devolverLivro())
console.log(gerenciadorDeLivros.obterDetalhes())