const a = {
    nome: 'Lucas',
    sobrenome: 'Ribeiro'
};

const b = {...a};

a.nome = 'Luiz';
console.log(a);
console.log(b);
