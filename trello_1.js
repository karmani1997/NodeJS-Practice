const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0])

let sayHello = function(){

    console.log("Greeting message for user")
}

days.forEach(sayHello)

console.log("************")

days.forEach(function(day, index){

    console.log(`Day with ${day} -- ${index}`)
})