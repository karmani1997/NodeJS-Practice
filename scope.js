let iAmGlobal = 'someValue'

if (true){

    var iAmLocal = 'some more values'
    iAmGlobal = 'super man'
    console.log(iAmGlobal);
    console.log(iAmLocal)
}

iAmLocal = '*******'
console.log(iAmLocal)

console.log(iAmGlobal)
