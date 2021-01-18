// File System Module - require 'fs'
const fs = require('fs')

fs.writeFile('movie.txt', 'TheMask', (err) => {
    if (err) { console.log(err) }
    console.log('file created')
})