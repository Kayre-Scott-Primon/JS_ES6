// desafios //

/*   1
class Usuario{
     constructor(email, senha){
          this.email = email,
          this.senha = senha;
          this.admin = false;
     }

     isAdmin(){
          return this.admin;
     }
}

class Admin extends Usuario{
     constructor(){
          super();
          this.admin = true;
     }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');

console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true
*/

/*2

const usuarios = [
     { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
     { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
     { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
    ];

const arrIdade = usuarios.map(item => item.idade);

console.log(arrIdade);

const arr2 = usuarios.filter(item => {
     return item.idade >= 18 && item.empresa === 'Rocketseat';
});

console.log(arr2);

const arr3 = usuarios.find(item => {
     return item.empresa === 'Google'
});

console.log(arr3);

const arr4 = usuarios.reduce((total , next) => {
     return total.idade + next;
});

console.log(arr4);
*/

/*3

// 3.1
const arr = [1, 2, 3, 4, 5];

arr.map(function(item) {
 return item + 10;
});

const arr3 = arr.map(item =>{ item + 10});

// 3.2
// Dica: Utilize uma constante pra function
const usuario = { nome: 'Diego', idade: 23 };

function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);


const idade = (usuario) => (
     usuario.idade
     );

console.log(idade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostrarUser = (nome, idade ) => (nome ,idade);
 
*/

/* 4 
// 4.1
const empresa = {
     nome: 'Rocketseat',
     endereco: {
          cidade: 'Rio do Sul',
          estado: 'SC',
     }
    };

const {nome, endereco: {cidade, estado} } = empresa ;

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

//4.2
function mostraInfo(usuario) {
     return `${usuario.nome} tem ${usuario.idade} anos.`;
    }
    mostraInfo({ nome: 'Diego', idade: 23 })


const mostra = (nome,idade) => {
     return `${nome} tem ${idade} anos.`;
}

console.log(mostra('Diego',23));

*/

/* 5 

//5.1
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

//5.2
const usuario = {
     nome: 'Diego',
     idade: 23,
     endereco: {
     cidade: 'Rio do Sul',
     uf: 'SC',
     pais: 'Brasil',
     }
    };
    
const usuario2 = {...usuario , nome: 'Gabriel'}
const usuario3 = {...usuario , cidade: 'lontras'}

console.log(usuario2);
console.log(usuario3);

*/


/* 6 
const usuario = 'Diego';
const idade = 23;
console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

console.log(`O usuario ${usuario} possui ${idade} anos`);

*/


/* 7 */
const nome = 'Diego';
const idade = 23;
/*
const usuario = {
 nome: nome,
 idade: idade,
 cidade: 'Rio do Sul',
};*/

const usuario = {
     nome,
     idade,
     cidade: 'Rio Grade do Sul',
};

console.log(usuario);
