function gerenciamentoDeLivros(titulo, autor, anoNascimento, disponivel) {
    return {
        
        titulo: titulo,
        autor: autor,
        anoNascimento: anoNascimento,
        disponivel: disponivel = true,

        obterDetalhes() {
            return `INFORMAÇÕES DO LIVRO: 
            Titúlo: ${this.titulo};
            Autor: ${this.autor}, 
            Ano Nascimento: ${this.anoNascimento};
            Disponibilidade: ${this.disponibilidade1()}`
        },

        disponibilidade1() {
            if (this.disponivel == true) {
                return `Disponivel`
            } else if(this.disponivel == false) {
                return `Indísponivel`
            }
        },

        emprestarLivro() {
            if (this.disponivel == true) {
                this.disponivel = false
                return `           DISPONIBILIDADE:
                Emprestado.`
            } else if (this.disponivel == false) {
                return `            ALERTA:
                O livro ja foi emprestado!`
            }
        },

        devolverLivro() {
            if (this.disponivel == false) {
                this.disponivel = true
                return `            DISPONIBILIDADE:
                Disponivel.`
            } else if (this.disponivel == true) {
                return `            ALERTA:
                O livro ja está disponivel!`
            }
        }
    }
}

let gerenciadorDeLivros = gerenciamentoDeLivros('Divina Comédia: Inferno', 'Dante Aligheri', 1304)
// Obtem os Detalhes do Livro
console.log(gerenciadorDeLivros.obterDetalhes())

// Emprestar o livro
gerenciadorDeLivros.emprestarLivro()
console.log(gerenciadorDeLivros.obterDetalhes())
console.log(gerenciadorDeLivros.emprestarLivro())

// Devolver o livro
gerenciadorDeLivros.devolverLivro()
console.log(gerenciadorDeLivros.obterDetalhes())
console.log(gerenciadorDeLivros.devolverLivro())