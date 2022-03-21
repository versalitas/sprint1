/*=============================================
 Ex 1.2.1.1 
Mostra per la consola el resultat 
d'una arrow function autoinvocable que 
sumi dos nombres.
============================================= */

const sumNums = ((num1 , num2) => {
    return (num1 + num2);
})(5,2);

console.log(sumNums);


/* =============================================
Ex 1.2.1.2 
Arrow function que rebi un paràmetre, 
retorni un objecte amb un atribut que tingui com 
a valor el paràmetre rebut.
=============================================*/


let myObj = (valor) => {
    
  return {
      color: valor,
    }
}

console.log(myObj('green'));


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


/* =============================================
EX 1.2.3.1

Escriu una function creadora d'objectes que 
faci instàncies d'una classe abstracta. 
Invoca-la amb diferents definicions.
=============================================*/

//classe "abstracte" DIY... amb un métode "abstracte"
class Food{
    constructor() {
        if(this.constructor === Food){
            throw new Error ("Abstract class: object can't be instantiated");
        }
    }
    showFlavor() {
       throw new Error ("Abstract method: Not implemented");
   }
}

//test que no es pot instanciar la classe
//const pineApple = new Food(); 

//classe amb una funció (de construcció... )
class Fruit extends Food {
    constructor(name, flavor){
        super();
        this.name = name;
        this.flavor = flavor;
    }
    showFlavor() {
        console.log(`Today we serve ${this.name}, its taste is ${this.flavor}.`);
    }
}

//instanciant objectes i probant el metode
const fruit1 = new Fruit('pineapple', 'sweet');
fruit1.showFlavor();
const fruit2 = new Fruit('lemon', 'sour');
fruit2.showFlavor();

// alternatiu amb factory function pasando el objecte que ha heredat el métode
function createFruit(name, flavor) {
    let fruit = Object.create(fruit1);
    fruit.name = name;
    fruit.flavor = flavor;
    return fruit;
}
//instanciant objectes i probant el metode
let fruit3 = createFruit('quince', 'tart');
fruit3.showFlavor();



