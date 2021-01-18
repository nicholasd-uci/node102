// File System Module - require 'fs'
const fs = require('fs')

// fs.readFile is for reading documents
// fs.readFile('movie.txt', 'utf8', (err, data) => {
//     if (err) { console.log(err) }
//     console.log(data)
// })

// fs.writeFile is for creating a document
fs.writeFile('pokemon.txt', 'This is a text file that you can keep track of all the pokemon in the world! STARTS HERE =====> ', (err) => {
    if (err) { console.log(err) }
    console.log('File Created!')
})

// fs.appendFile is for adding to a document
// fs.appendFile('pokemon.txt', 'MewTwo', (err) =>{
//     if (err) { console.log(err) }
//     console.log('Pokemon File Updated')
// })

