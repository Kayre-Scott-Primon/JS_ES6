alert('Teste');

class List{
     constructor(){
         this.data = [];
     }

     add(data){
         this.data.push(data);
         console.log(this.data);
     }
}

class TodoList extends List{
     constructor(){
         super();

         this.usuario = 'Diego';
     }

     mostraUsuario(){
         console.log(this.usuario);
     }
}

class Matematica{
   static soma(a,b){
      return (a+b);
   }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
     MinhaLista.add('novoTodo');
}

MinhaLista.mostraUsuario();

console.log(Matematica.soma(2,3));