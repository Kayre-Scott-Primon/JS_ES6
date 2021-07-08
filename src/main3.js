const arr = [1,2,3,4,5,6,7];

/*
const newArray = arr.map(function(item){
     return item * 2;
}); 
*/
// vai ser a mesma coisa que :
/*
const newArray = arr.map((item) => {
     return item * 2;
}); 
*/
// que vai ser igual a 
/*
const newArray = arr.map(item => {
     return item * 2;
});
*/
// que vai ser igual a 
const newArray = arr.map(item => item * 2 );

// quando é uma função mais complexa, e fora das outras, nao compensa Arrow

console.log(newArray);

// function teste = ... vai se igual a 
/*
const teste = () => {
     return 'teste';
}
console.log(teste());
*/

// nao funfa -> const teste = () => {nome: 'Diego'};
const teste = () => ({nome: 'Diego'});

console.log(teste());
