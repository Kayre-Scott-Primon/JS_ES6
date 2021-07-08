
//promise : funcoes assincronas 
const minhaPromise = () => new Promise((resolve,reject) =>{
     setTimeout(()=> {resolve('OK')}, 2000);
});

/*
minhaPromise()
.then(response => {
     console.log(response);
})
.catch(err =>{});
*/  
// fazer a mesma coisa de forma mais facil com es6
// e pode trabalhar com varios sem precisar ficar copiando o then e o cacth

async function executaPromise(){
     console.log(await minhaPromise());
     console.log(await minhaPromise());
     console.log(await minhaPromise());
}

executaPromise();

const executaPromise2 = async () => {
     console.log(await minhaPromise());
     console.log(await minhaPromise());
     console.log(await minhaPromise());

};

executaPromise2();