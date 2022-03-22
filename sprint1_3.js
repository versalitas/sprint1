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

// handler functions
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

//calling randomized function: 
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

//search function (necessito practicar les metòdes dels arrays.)
const searchEmployee = (numId) => {
    for (i = 0 ; i < employees.length ; i++) {
         if(employees[i].id === numId) {
             return employees[i];
         }
    }    
};

//generator of employee id:s
const genNumEmployee = () => {return Math.floor((Math.random() * 5))};
let id = genNumEmployee();

//method: returns promise
getEmployees = (numId) => {
    return new Promise((resolve, reject) => {
        if(searchEmployee(numId) !== undefined) {
            resolve(searchEmployee(numId));
        } else {
            reject(`Bad request: ID not valid.`);
        }
    })    
};

// methods: handlers of success and failure
const successHandler1 = (resolveValue) => {
    console.log(resolveValue);
};

const failureHandler1 = (rejectValue) => {
    console.log(rejectValue);
};
//calling the method
/*getEmployees(id).then(successHandler1, failureHandler1);*/


/*Exercici 1.3.2.2====================================
Crea una altra arrow function getSalary que rebi com a 
paràmetre un objecte employee i retorni el seu salari.
=====================================================*/




const searchSalary = (obj) => {
   if(salaries[i].id === obj.id) {
        return salaries[i].salary;
    }
   
}

const getSalary = (obj) => {
    return new Promise ((resolve, reject) => {
        if (obj!== undefined){
            resolve(`${obj.name}'s salary: ${searchSalary(obj)}.`);
        } else {
            reject(`Bad request. Employee not in the register.`)
        }
    })
};

const successHandler2 = (resValue) => {
    console.log(resValue);
}

const failHandler2 = (rejectValue) => {
    console.log(rejectValue);
}

//output
/*const employeeObj = searchEmployee(id);
getSalary(employeeObj).then(successHandler2, failHandler2);*/




/*Exercici 1.3.2.3====================================
Invoca la primera funció getEmployee 
i després getSalary niant l'execució de les dues promises.
=====================================================*/


/*


el codig està en el pròxim apartat amb el catch posat



*/

/* Exercici 1.3.3.1====================================
Fixa un element catch a la invocació del 
nivell anterior que capturi qualsevol error 
i el mostri per la consola. 
=====================================================*/

getEmployees(id)
.then((resolvedValue) => {
    return getSalary(resolvedValue);
})
.then((successHandler2) => {
    console.log(successHandler2);
})
.catch((failHandler2) => {
    console.log(failHandler2);
});
