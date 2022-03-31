/*Exercici 1.4.2.1==============================

Crea una nova funció asíncrona que cridi a una 
altra que retorni una Promise que efectuï la 
seva funció resolve() després de 2 segons 
de la seva invocació.
=============================================*/
const coinTosser = () => {
    if ((Math.floor(Math.random() * 2) % 2 === 0 )) {
        return true;
    } else {
        return false;
    }
  }; 
  
  coinToss = coinTosser();
  console.log(`Your coin toss: ${coinToss}`);
  
  const sprintFinished = (randValue) => {
      return new Promise((resolve, reject) => {
        if(randValue){
          setTimeout(() => {
            resolve(`Yay! Continue to next sprint.`);}, 2000);
        } else {
          reject(`Error, error, error, you'll need to practise more.`);
        }
      });
  };
  
  const anotherFunc = async(randValue) => {
    try {
      const result = await(sprintFinished(randValue));
      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  
  //calling function
  anotherFunc(coinToss);
  
   
  