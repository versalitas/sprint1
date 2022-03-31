/* =============================================
Ex 1.2.2.2 
classe Persona que rebi un paràmetre 
'nom' al ser instanciada. Té el mètode dirNom 
que imprimeixi per consola el paràmetre 'nom'. 
Invoca el mètode dirNom des de fora de la classe.
============================================= */

class Person{
    constructor(name){
        this.name = name;
    }
    sayName(){
        console.log(this.name);
    }
 }
 //instanciació de objecte + invocació del mètode
 const anyone = new Person('Conrad');
 anyone.sayName();