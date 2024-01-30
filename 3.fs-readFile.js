const fs = require('node:fs')

console.log('leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // Ejecuta este colback
  console.log('primer texto', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('leyendo el segundo archivo')
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => { // Ejecuta este colback)
  console.log('segundo texto', text)
})


/* that is better
Potential issue with the use of the variable err inside the callback functions. If there is an error while reading the file, the err variable should be checked to handle the error appropriately.
const fs = require('node:fs');

console.log('Reading the first file...');
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error reading the first file:', err);
  } else {
    console.log('First file text:', text);
  }
});

console.log('--> Performing tasks while reading the first file...');

console.log('Reading the second file...');
fs.readFile('./archivo2.txt', 'utf-8', (err, text) => {
  if (err) {
    console.error('Error reading the second file:', err);
  } else {
    console.log('Second file text:', text);
  }
});

/*