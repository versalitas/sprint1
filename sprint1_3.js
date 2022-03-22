/*Exercici 1.3.1.1==============================

Funció que retorni una Promise que 
invoqui la funció resolve() o reject() que rep. 
Invoca-la passant-li les dues funcions de manera 
que imprimeixin un missatge diferent depenent 
de si la Promise es resol o no. 
=============================================*/

//function for random (and realistic) dishwasher outcomes
const diceRoll = () => {
    if ((Math.floor(Math.random() * 5) % 2 === 0 )) {
        return true;
    } else {
        return false;
    }
}  

//IKEA "Renlig" dishwasher Promise function

const renligProm = () => {
    return new Promise((resolve, reject) => {
        if(isClean){
            resolve(`OMG, it's clean!`);
        } else {
            reject(`Something went wrong. Clean filters and refill salt.`);
        }
    });
}

const handleCleanSuccess = (resolvedValue) => {
    console.log(resolvedValue);
  };
  
const handleCleanFailure = (rejectReason) => {
    console.log(rejectReason);
  };

let isClean = diceRoll();
renligProm().then(handleCleanSuccess, handleCleanFailure);



 
/*Exercici 1.3.1.2==============================
Arrow function que rebi un paràmetre 
i una funció callback i li passi a la 
funció un missatge o un altre (que s'imprimirà per consola) 
en funció del paràmetre rebut.
=============================================*/

     

//function that returns Promise
const grantApplication = (isGranted) => {
    return new Promise((resolve, reject) => {
        if(isGranted){
            resolve(`Your application has been successfully processed.`);
        } else {
            reject(`Your application has mysteriously disappeared into the Twilight Zone.`);
        }
    })
};
    

// handler functions
const handleSuccess = (resValue) => {
    console.log(resValue);
};

const handleFailure = (rejectionValue) => {
    console.log(rejectionValue);
};

//function: 
let isGranted = diceRoll();
//output
grantApplication(isGranted).then(handleSuccess, handleFailure);


/*Exercici 1.3.2.1==============================
Donats els objectes employees i salaries, 
crea una arrow function getEmployee que retorni 
una Promise efectuant la cerca en l'objecte pel seu id.
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

//search function (necessito practicar les metòdes dels arrays...)
const searchEmployee = (numId) => {
    
    for (i = 0 ; i < employees.length ; i++) {
         if(employees[i].id === numId) {
             return employees[i].name;
         }
    }    
}

//generator of employee id:s
const genNumEmployee = () => {return Math.floor((Math.random() * 5))};
let numId = genNumEmployee();

//method: returns promise
getEmployees = (numId) => {
    return new Promise((resolve, reject) => {
        if(searchEmployee(numId) !== undefined) {
            resolve(`${searchEmployee(numId)} is currently employed.`);
        } else {
            reject(`Bad request. Id not valid.`);
        }
    })    
};

// methods: handlers of success and failure
const successHandler = (resValue) => {
    console.log(resValue);
};

const failureHandler = (rejectValue) => {
    console.log(rejectValue);
};
//calling the method
getEmployees(numId).then(successHandler, failureHandler); 


/*Exercici 1.3.2.2====================================
Crea una altra arrow function getSalary que rebi com a 
paràmetre un objecte employee i retorni el seu salari.
=====================================================*/
//random employee number
let numObj = genNumEmployee();
//verification of id generated 
//console.log(`number: ${num}`);

//method: retrieves salary property from an object passed as parametre
const getSalary = (obj) => {
    return new Promise ((resolve, reject) => {
        if (obj !== undefined){
            resolve(obj.salary);
        } else {
            reject(`Bad request. Employee not in the register.`)
        }
    })
};

const succHandler = (resValue) => {
    console.log(resValue);
}

const failHandler = (rejectValue) => {
    console.log(rejectValue);
}

//output
getSalary(employees[numObj]).then(succHandler, failHandler);




/*Exercici 1.3.2.3====================================
Invoca la primera funció getEmployee 
i després getSalary niant l'execució de les dues promises.
=====================================================*/




/* Exercici 1.3.3.1====================================
Fixa un element catch a la invocació del 
nivell anterior que capturi qualsevol error 
i el mostri per la consola. 
=====================================================*/
