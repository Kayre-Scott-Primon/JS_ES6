//WebPack

 //import {soma , sub} from './funcoes'; // aqui o nome da funcao deve ser o mesmo
//import somaF from './soma'; // se tiver um export default, o nome da funcao pode ser outro
//import {soma as somaF , sub} from './funcoes'; // para renomear a função
//import soma ,{sub} from './funcoes'; // uma function default e outras nao
import * as funcoes from '../funcoes';

//console.log(soma(1,2));
//console.log(sub(1,2));

console.log(funcoes.sub(1,2));
console.log(funcoes.default(1,2));