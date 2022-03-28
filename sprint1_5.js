






/*Exercici 1.5.1.1==============================

Crea una funció que imprimeixi recursivament 
un missatge per la consola amb demores d'un segon.
=============================================*/


let repeatMessage = (message, exitMessage, turns) => {   
    let i = turns;
    const messageInterval = setInterval(() => {
        console.log(`${message}: ${i} s to destruction`);
        i--; 
        if(i === 0){
        console.log(exitMessage);
        clearInterval(messageInterval)}
    }, 1000); 

}   
    
repeatMessage(`Fatal error`, `KABOOM!!!!`, 5); 





/*Exercici 1.5.1.2==============================

Crea una funció que, en executar-la, 
escrigui una frase en un fitxer.
=============================================*/

const fs = require('fs');

const writeTxt = (message, fileName) => {

    fs.writeFile(fileName, message, err => {
    if (err) {
        console.error(err);
        
    }
        console.log(`The file ${fileName} has been created`})
    })
}

writeTxt("Did this actually work?",'./someText.txt' );

/*Exercici 1.5.1.3==============================

Crea una altra funció que mostri per consola el 
contingut del fitxer de l'exercici anterior.
=============================================*/

//fs module imported in the last exercise

const readTxt = (fileName) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        
    }
    console.log(data);
    return data;
    });
}
 
   
//calling the function
const newMessage = readTxt('./someText.txt');
console.log(`s this is it ${newMessage}`);

/*Exercici 1.5.2.1==============================

Crea una funció que comprimeixi el fitxer 
del nivell 1.
=============================================*/

//fs module imported in first excercise
const zlib = require('zlib');
const gzip = zlib.createGzip();

 

//Zip function

const myZipper = async(someFile) => {
    try {
        const input = await fs.createReadStream(someFile);
        const output = await fs.createWriteStream(someFile);
        const result = await input.pipe(gzip).pipe(output);
        if(result){
            console.log('Compression has been successful');
        }
    } catch(err){
        console.log('Non specified error.')
    }
}

myZipper('./someText.txt');

/*Exercici 1.5.2.2==============================

Crea una funció que llisti per la consola el 
contingut del directori d'usuari de 
l'ordinador utilizant Node Child Processes.
=============================================*/

//Funciona en el mac...

//importando modulo
const { exec } = require('child_process');

exec('ls -lh', {cwd: '/Users'}, (error, stdout, stderr) => {
  
   if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});


/*Exercici 1.5.3.1.1============================

=============================================*/



//1
//crea una funció que creï dos fitxers codificats 
//en hexadecimal i en base64 respectivament, 
//a partir del fitxer del nivell 1

//importing vital modules
const { Buffer } = require('buffer')
const crypto = require('crypto');

//encodes a text to hex and base64
 const myFirstEncoder = (readFunc, writeFunc) => {
   
    const message = readFunc('./someText.txt');
    const bufferObj = Buffer.from(message, 'utf8');

    // encodes a string to hexidecimal via buffer obj
    const hexMessage = bufferObj.toString('hex');
        
    // encodes a string to base64 via buffer obj
    const base64Message = bufferObj.toString('base64');
    
    writeFunc(`./someTextHex.txt`, hexMessage);
    writeFunc(`./someTextBase64.txt`, base64Message):

}    

//2
// Crea una funció que guardi els fitxers del punt anterior, 
//ara encriptats amb l'algoritme aes-192-cbc, i esborri els fitxers inicials.

//encryptation using aes-192-cbc

const encryptAes = (message) => {
    const algorithm = 'aes-192-cbc';
    const password = 'querty'
    const key = crypto.scryptSync(password, 'salt', 24);
    const iv = Buffer.alloc(16, 0); 
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    const encrypted = cipher.update(message, 'utf8', 'hex');
    return encrypted += cipher.final('hex');
}

//main function

const encryptAndSave = (readFunc, writeFunc, encryptFunc) => {
    
    let hexMessage = readFunc('./someTextHex.txt');
    let encryptedHexMessage = encryptFunc(hexMessage);
    
    let base64Message = readFunc('./someTextBase64.txt');
    let encryptedBase64Message = encryptFunc(base64Message);

    writeFunc()


}
















///////////////////////

 
  


//3
//Un altra funció que desencripti i descodifiqui 
//els fitxers de l'apartat anterior tornant a 
//generar una còpia de l'inicial 










//4
//Un README 
//amb instruccions per a l'execució de cada part






