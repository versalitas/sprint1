/*Exercici 1.4.1.1==============================

Donats els objectes employees i salaries, 
crea una arrow function getEmployee que 
retorni una Promise efectuant la cerca 
en l'objecte pel seu id. Crea una altra arrow 
function getSalary que rebi com a paràmetre 
un objecte employee i retorni el seu salari.
=============================================*/


let employees = [{
    id: 1,
    name: 'Linux Torvalds'
}, {
    id: 2,
    name: 'Bill Gates'
},{
    id: 3,
    name: 'Jeff Bezos'
}];
 
let salaries = [{
    id: 1,
    salary: 4000
}, {
    id: 2,
    salary: 1000
}, {
    id: 3,
    salary: 2000
}];


//generating Id
const randNum = Math.floor(Math.random() * 5);

//console.log(numId);  
  

const getEmployee = (someId) => {
  const employee = employees.find(employee => {return (employee.id === someId)});
    return new Promise((resolve, reject) => {
      if(employee){
        resolve(`Employee ${employee.name} is currently employed`);
      } else {
        reject('Error. Not in the register.');
      }
    })
};

getEmployee(randNum).then(res => {
  console.log(res);
});
.catch(rej => {console.log(rej)});



const getSalary = (someObj) => {
  const salaryObj = salaries.find(sal => {return (sal.id === someObj.id)});
  return new Promise((reject, resolve) => {
     if(salaryObj){
       resolve(`${someObj.name} earns ${salaryObj.salary}.`);
     } else {
       reject(`Error. Not found`);
     }
  })
}

getSalary(employee[randNum])
.then(res => {console.log(res)
});
.catch((rej) => {console.log(rej)});



/*Exercici 1.4.1.2==============================

Crea una funció asíncrona que rebi un id d'empleat 
i imprimeixi per pantalla el nom de l'empleat i 
el seu salari, usant les funcions que has 
definit a l'exercici anterior.
=============================================*/

/*Exercici 1.4.2.1==============================

Crea una nova funció asíncrona que cridi a una 
altra que retorni una Promise que efectuï la 
seva funció resolve() després de 2 segons 
de la seva invocació.
=============================================*/

/*Exercici 1.4.2.2==============================

Crea una nova funció asíncrona que cridi a 
una altra que retorni una Promise que 
efectuï la seva funció resolve() 
després de 2 segons de la seva invocació.
=============================================*/



/*Exercici 1.4.3.1==============================

Captura tots els errors possibles dels 
nivells 1 i 2.
=============================================*/

