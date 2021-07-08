const usuario = {
     nome: 'Diego',
     idade: 23,
     endereco: {
          cidade: 'Rio do Sul',
          estato: 'SC',
     },
};

console.log(usuario);
 /*
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/ 
// vai ser igual a, com desestruturação

const { nome, idade, endereco: {cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

/*
function mostraNome(usuario){
     console.log(usuario.nome);
}
*/
// igual a 
function mostraNome({nome, idade}){
     console.log(nome, idade);
}



mostraNome(usuario);