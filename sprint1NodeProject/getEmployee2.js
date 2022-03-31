/* Exercici 1.3.3.1====================================
Fixa un element catch a la invocació del 
nivell anterior que capturi qualsevol error 
i el mostri per la consola. 
=====================================================*/


getEmployees(someId)
.then((resolvedValue) => {
    console.log(`${resolvedValue.name} is currently employed.` )
    return getSalary(resolvedValue);
})
.then((resolvedValue) => {
    console.log(`The salary of this employee is ${resolvedValue}.`);
})
.catch((rejectValue) => {
    console.log(rejectValue);
});

   