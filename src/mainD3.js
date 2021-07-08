//desafio 3


/*   3.1
// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

// isso 
/*
function umPorSegundo() {
     delay().then(() => {
          console.log('1s');
     delay().then(() => {
          console.log('2s');
     delay().then(() => {
          console.log('3s');
     });
     })
 });
}
umPorSegundo();
*/

// por isso
/*
 const umporsegundo = async () => {
      console.log(await delay() + '1s');
      console.log(await delay() + '2s');
      console.log(await delay() + '3s');
 }

 umporsegundo();
 */


 /* 3.2 
 /*
 import axios from 'axios';

     function getUserFromGithub(user) {
          axios.get(`https://api.github.com/users/${user}`)
     .then(response => {
          console.log(response.data);
     })
     .catch(err => {
          console.log('Usuário não existe');
     })
}
getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');
*/
/*
import axios from 'axios';
class Api {
     static async getusergit(user){
          try{
               const response = await axios.get(`https://api.github.com/users/${user}`);
               console.log(response);
          }
          catch (err) {
               console.warn('ERRO! -')
          }
     }

}

Api.getusergit('diego3g');
Api.getusergit('diego3g124123');
*/

/* 3.3 */
/*
class Github {
     static getRepositories(repo) {
     axios.get(`https://api.github.com/repos/${repo}`)
     .then(response => {
     console.log(response.data);
     })
     .catch(err => {
     console.log('Repositório não existe');
     })
     }
    }
    Github.getRepositories('rocketseat/rocketseat.com.br');
    Github.getRepositories('rocketseat/dslkvmskv');
   */
 /*
import axios from 'axios';

class github {
     static async getrepositoriogit(repo){
          try{
               const response = await axios.get(`https://api.github.com/repos/${repo}`);
               console.log(response.data);
          }
          catch(err){
               console.warn('ERRO! -');
          }
     }
}

github.getrepositoriogit('rocketseat/rocketseat.com.br');
github.getrepositoriogit('rocketseat/dslkvmskv');

*/

/* 3.4 
import axios from 'axios';

const buscaUsuario = usuario => {
     axios.get(`https://api.github.com/users/${user}`)
     .then(response => {
     console.log(response.data);
     })
     .catch(err => {
     console.log('Usuário não existe');
     });
    }
    buscaUsuario('diego3g');
*/
import axios from 'axios';

class Teste {
     static async buscauser(user) {
          try{
               const response = await axios.get(`https://api.github.com/users/${user}`);
               console.log(response.data);
          }
          catch (err){
               console.warn('ERRO ! -');
          }
     }
}

Teste.buscauser('diego3g');