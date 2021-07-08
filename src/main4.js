function soma(a = 3,b = 6){ // valores padrao
     return a + b;
}

console.log(soma(1));
console.log(soma());

const subtrair = ( a = 3 , b = 6) => a - b; // tambem serve p Arrow

console.log(subtrair(2));
console.log(subtrair());