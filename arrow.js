// const sayHello = function(name){
//     return "Hey there, " + name + " !"
// }

// console.log(sayHello('sammy'))

const sayHello = (name) =>  `Hey there ${name}  !`


console.log(sayHello('sammy'))

const todos = [{
    title: 'Buy bread',
    isDone: true,
},{
    title: 'Go to gym',
    isDone: true
},{
    title: 'Record youtube videos',
    isDone: false,
},{
    title: 'Make a team',
    isDone: true,
}]

const thingsDone = todos.filter((todo) => todo.isDone ===true)

console.log(thingsDone)
thingsDone.forEach((thing) => console.log(thing.title))

console.log("Mehtab*************")
const result = todos.filter((todo) => todo.isDone == false ? console.log(todo.title): true)