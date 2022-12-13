/*
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}

const pessoa1 = criaPessoa('Lucas', 'Ribeiro', 25);
const pessoa2 = criaPessoa('Maria', 'Oliveira', 18);
const pessoa3 = criaPessoa('João', 'Monteiro', 24);
console.log(pessoa1.nome, pessoa2.nome);
*/

const pessoa1 = {
    nome: 'Lucas',
    sobrenome: 'Ribeiro',
    idade: 25,

    fala() {
        console.log(`A minha idade atual é ${this.idade}.`);
    },

    incrementaIdade() {
        this.idade++;
    }
};

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
