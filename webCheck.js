let userEmail = '   lco12'
let password = '1234'

console.log(password.length)
console.log(userEmail.toUpperCase())

console.log(userEmail.trim())


let userChecker = function(myString){

    if ((myString.includes(12)) && (myString.length>2)){
        return true
    }
    else{
        return false
    }
}

console.log(userChecker(userEmail))

let passwordChecker = function(password){
    if ((password.includes('123')) && password.length> 8){
        return true
    }
    else{

    }
}