/*
Entre 0 - 11 - Bom Dia
Entre 12 - 17 - Boa Tarde
Entre 18 e 23 - Boa Noite
*/

// If pode ser usado sozinho (Condição simples)
// Sempre utiliza a palavra necesseriamente existe um if
// Posso ter quantos else if eu quiser na checagem
// Só posso ter um else na checagem
// Podemos usar condição sem else if utilizando apenas o if e else

const hora = 25;

if (hora >= 0 && hora <= 11) {
    console.log('Bom Dia!');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {
    console.log('Boa Noite!');
} else {
    console.log('Olá');
}

