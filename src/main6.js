// rest


//pegar o resto das propriedades
/*
const usuario = {
     nome: 'Diego',
     idade: 23,
     empresa: 'Rocketseat'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

const arr = [1,2,3,4,5,6];

const [a,b, ...c] = arr;


console.log(a);
console.log(b);
console.log(c);

// em vez de ficar add parametros, usa- se
function soma(...params){
     return params.reduce((total,next) => total + next);
}

console.log(soma(1,3,4));

//ou ainda 

function soma2(a,b,...params){
     return params;
}

console.log(soma2(1,3,4,5,6));
*/




//spread


// propagar, repassar infos

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const usuario = {
     nome: 'Diego',
     idade: 23,
     empresa: 'Rocketseat'
};

const usuario2 = {...usuario, nome: 'Gabriel'};

console.log(usuario2);