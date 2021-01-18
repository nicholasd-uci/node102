// File System Module - require 'fs'
const fs = require('fs')

// fs.readFile is for reading documents
fs.readFile('movie.txt', 'utf8', (err, data) => {
    if (err) { console.log(err) }
    console.log(data)
})

// fs.writeFile
fs.writeFile('pokemon.txt', 'This is a text file that you can keep track of all the pokemon in the world!', (err) => {
    if (err) { console.log(err) }
    console.log('File Created!')
})

// fs.appendFile
fs.appendFile('pokemon.txt', 'MewTwo', (err) =>{
    if (err) { console.log(err) }
    console.log('Pokemon File Updated')
})

