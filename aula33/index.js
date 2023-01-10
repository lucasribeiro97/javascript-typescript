const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Ribeiro',
    idade: 25,
    endereco: {
        rua: 'Avenida Brasil',
        numero: 320
    }
};

// Atribuição via desestruturação
const { nome, sobrenome, ...resto } = pessoa;
console.log(nome, sobrenome, resto);