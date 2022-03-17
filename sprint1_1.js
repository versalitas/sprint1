  //ex1.1.1.1 funció que mostri pel consola un nom passat com parametre

  let showName = (name) => {
    console.log(name);
 } 
  
  showName('Mary');
  
  
  /*ex 1.1.2.1 Mostra per consola el nom i cognoms 
  de l'usuari guardats en variable mitjançant template literals */
  
  let name = 'Mary';
  let surname = 'Contrary';
  
  console.log(`Her name is ${name} ${surname}.`);
  
  
  /*Ex 1.1.2.2 Invoca una funció 
  que retorni un valor des de dins d'una template literal. */
  
  const showId = (userId) => {
      return userId;
  }
  
  console.log(`His userId is ${showId('Tricky Foo')}`);
  
  
  //Ex 1.1.3.1
  /*Una matriu de deu funcions 
  i emplena-la mitjançant un bucle de
   manera que cada funció compti del 0 al 9 per la consola. 
   Invoca cada funció de l'array iterativament. 
   Haurà de mostrar-se per consola el compte del 0 al 9 deu vegades.*/
  
  
  let funcArray = [];
  
  let countToNine = () => {
      for ( let i = 0 ; i <= 9 ; i++ )
      console.log(i);
  }
  
  
  for (let i = 0 ; i < 10 ; i++) {
      console.log(`Ronda ${i + 1}:`); 
      funcArray.push(countToNine());
  }
  
  
  /* ex 1.1.3.2
   Una funció anònima autoinvocable igualada
   a una variable que mostri per consola 
   el nom de l'usuari rebut com a paràmetre.*/
  
  
  const showUser = (function(userName = 'Stranger') {
  
    console.log(`Hello ${userName}!`);
  
  })('Polly Pocket');