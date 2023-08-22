let sayHello = function(name){

    console.log(`Greeting message for ${name}`);
    console.log(`Hi ${name}`)
}

let fullNameMaker = function(firstname, lastname){
    console.log('Welcome to fullNameMaker')
    console.log(`Happy to have you, ${firstname} ${lastname}`)
}

let myAdder = function(num1, num2){

    let added = num1 + num2
    return added

}


sayHello('John')
fullNameMaker('Mehtab', 'Meghwar')
console.log(myAdder(3,5))

let myMultiplier = function(num1, num2){

    return num1* num2
}

console.log(myMultiplier(2,3))

let guestUser = function(name = 'Mehtab', courseCount = 0){
    return 'Hello '+ name + ' and you course count is '+ courseCount
}

console.log(guestUser())