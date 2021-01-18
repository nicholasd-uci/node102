const fs = require('fs')
const { argv } = require('process')

let movie1 = process.argv[2]
let movie2 = process.argv[3]
let movie3 = process.argv[4]

fs.appendFile('movie.txt', `${movie1}, ${movie2}, ${movie3},`, (err) => {
    if (err) { console.log(err) }
    console.log('Movie File is Updated!')
})