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



const numId = Math.floor(Math.random() * 4);
const someEmpl = employees.find(employee => employee.id === numId);
  console.log(numId);
  console.log(someEmpl);



/*const getEmployee = (someId) => {
  if(employees.find(employee => {employee.id === someId})){
    resolve(`Employee is currently employed`);
  } else {
   reject(new Error('Error. Not in the register.'))
  }
};

console.log(numId);

getEmployee(numId);*/

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

