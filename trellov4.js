const myTodos = ['Buy Bread', 'Go to Gym', 'Record youtube Videos']


console.log(myTodos.indexOf('Buy Bread'))

const newTodos = [{
    title: 'Buy Bread',
    isDone: false,

}, {
    title:'Go to Gym',
    isDone:false,
}, {
    title: 'Record youtube videos',
    isDone: true,
}]

const index = newTodos.findIndex(function(todo, index){
    console.log(todo)
    return todo.title === 'Go to Gym'
})

console.log(index)


console.log('****************')

const findTodo = function(myTodos, title){
    const index = myTodos.findIndex(function(todo,index){
           return todo.title.toLowerCase() === title.toLowerCase() 
    })
    return myTodos[index]
}

let printMe = findTodo(newTodos, 'Go To Gym')

console.log(printMe)

console.log("*************")

const findTodo1 = function(myTodos, title){
    const titleReturn =  myTodos.find(function(todo, index ){
            return todo.title.toLowerCase() === title.toLowerCase()
    })
    return titleReturn
}


let printMe1 = findTodo1(newTodos, 'Go To Gym')

console.log(printMe1)
