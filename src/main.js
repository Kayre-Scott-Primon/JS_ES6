import api from './api';

class App{
     constructor(){
          this.repositories = [];

          this.formEl = document.getElementById('repo-form');
          this.lsitEl = document.getElementById('repo-list');
          this.inputEl = document.querySelector('input[name=repository]');

          this.registerHandlers();
     }

     registerHandlers(){
          this.formEl.onsubmit = event => this.addRepository(event);
     }

     setLoading(loading = true){
          if(loading === true){
               let loadingEl = document.createElement('span');
               loadingEl.appendChild(document.createTextNode('Carregando...'));
               loadingEl.setAttribute('id','loading');

               this.formEl.appendChild(loadingEl);
          } else{
               document.getElementById('loading').remove();
          }
     }

     async addRepository(event){
          event.preventDefault();

          const repoInput = this.inputEl.value;

          if(repoInput.length === 0)
               return;
          
          this.setLoading();

          try{
               const response = await api.get(`/repos/${repoInput}`);

               const {name,descripton,html_url,owner:{avatar_url}} = response.data;

               this.repositories.push({
                    name,
                    descripton,
                    avatar_url,
                    html_url,
               });
     
               this.inputEl.value = '';

               this.render ();
               //console.log(this.repositories);

          }catch (err){
               alert('O repositorio nao exsite!');
          }

          this.setLoading(false);
     }

     render(){
          this.lsitEl.innerHTML = ''; //apaga

          this.repositories.forEach( repo =>{
               let imgEl  = document.createElement('img');
               imgEl.setAttribute('src',repo.avatar_url);

               let titleEl = document.createElement('strong');
               titleEl.appendChild(document.createTextNode(repo.name));

               let descriptionEl = document.createElement('p');
               descriptionEl.appendChild(document.createTextNode(repo.description));

               let linkEl = document.createElement('a');
               linkEl.setAttribute('target','_blank');
               linkEl.setAttribute('href', repo.html_url);
               linkEl.appendChild(document.createTextNode('Acessar'));

               let lsitItemEl = document.createElement('li');
               lsitItemEl.appendChild(imgEl);
               lsitItemEl.appendChild(titleEl);
               lsitItemEl.appendChild(descriptionEl);
               lsitItemEl.appendChild(linkEl);

               this.lsitEl.appendChild(lsitItemEl);
          });
     }
}
new App();