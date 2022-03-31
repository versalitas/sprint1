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




//testing that searchEmployee returns correct object

test('Returns an object by its id property', () => {
  //arrange
  const testId = 2;
  expectedResult = employees[1];
  //act
  actualResult = searchEmployee(testId);
  //assert
  expect(actualResult).toBe(expectedResult);
};

//testing that searchEmployee returns correct object
test('Throws error if id is not within teh range', () => {
  //arrange
  const testId = 2;
  expectedResult = err;
  //act
  actualResult = searchEmployee(testId);
  //assert
  expect(actualResult).toBe(expectedResult);
}



//method: returns promise
getEmployee = (numId) => {
return new Promise((resolve, reject) => {
    if(searchEmployee(numId) !== undefined) {
        resolve(searchEmployee(numId));
    } else {
        reject(`Error: ID not valid.`);
    }
})    
};


getEmployee(randId)
.then(resValue => {console.log(resValue)
})
.catch(rejectValue => {console.log(rejectValue)});


//search function
const searchSalary = (obj) => {
for (i = 0 ; i < salaries.length ; i++) {
     if(salaries[i].id === obj.id) {
         return salaries[i].salary;
     }
}    
};


const getSalary = (obj) => {
return new Promise ((resolve, reject) => {
    if (obj!== undefined){
        resolve(searchSalary(obj));
    } else {
        reject(`Error. Employee not in the register.`)
    }
})
};


const employeeObj = searchEmployee(randId);
getSalary(employeeObj)
.then(resValue => {console.log(resValue)
})
.catch(rejectValue => {console.log(rejectValue)});