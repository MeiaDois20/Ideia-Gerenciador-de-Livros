# 📚 Sistema de Gerenciamento de Livros em JavaScript (Terminal)

Este projeto simula um sistema simples de **gerenciamento de livros** com funcionalidades de empréstimo e devolução, feito para ser executado diretamente no **terminal**, sem dependências externas.

---

## 🚀 Funcionalidades

- Criar um livro com título, autor, ano de nascimento e disponibilidade.
- Exibir os detalhes do livro.
- Emprestar um livro (altera o status para **indisponível**).
- Devolver um livro (altera o status para **disponível**).
- Verificar a disponibilidade do livro.

---

## 🧠 Lógica de Funcionamento

A função `gerenciamentoDeLivros` retorna um objeto com as seguintes propriedades e métodos:

### Parâmetros
```js
gerenciamentoDeLivros(titulo, autor, anoNascimento, disponivel)
```

### Propriedades
- `titulo`: Título do livro.
- `autor`: Nome do autor.
- `anoNascimento`: Ano de nascimento do autor.
- `disponivel`: Estado do livro (padrão: `true`).

### Métodos
- `.obterDetalhes()` → Mostra as informações completas do livro.
- `.disponibilidade()` → Retorna se o livro está `Disponível` ou `Indisponível`.
- `.emprestarLivro()` → Marca o livro como emprestado.
- `.devolverLivro()` → Marca o livro como devolvido.

---

## 🧪 Exemplo de Uso

```js
let gerenciadorDeLivros = gerenciamentoDeLivros('Divina Comédia: Inferno', 'Dante Aligheri', 1304)

console.log(gerenciadorDeLivros.obterDetalhes())

gerenciadorDeLivros.emprestarLivro()
console.log(gerenciadorDeLivros.obterDetalhes())

console.log(gerenciadorDeLivros.emprestarLivro()) // Tentativa de novo empréstimo

gerenciadorDeLivros.devolverLivro()
console.log(gerenciadorDeLivros.obterDetalhes())

console.log(gerenciadorDeLivros.devolverLivro()) // Tentativa de devolver um livro já disponível
```

---

## ✅ Saída Esperada (resumida)

```
INFORMAÇÕES DO LIVRO: 
Titúlo: Divina Comédia: Inferno;
Autor: Dante Aligheri, 
Ano Nascimento: 1304;
Disponibilidade: Disponivel

DISPONIBILIDADE:
Emprestado.

ALERTA:
O livro ja foi emprestado!

DISPONIBILIDADE:
Disponivel.

ALERTA:
O livro ja está disponivel!
```

---

## 🛠️ Requisitos

- Node.js ou qualquer ambiente capaz de executar JavaScript via terminal (ex: navegador com console).

---

## 📄 Licença

Uso livre para fins educacionais, simulações ou protótipos.