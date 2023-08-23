const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record video for youtube')
myTodos.push('Gp to the Gym')

myTodos.forEach(function(todo, index){
    console.log(`Your task no. ${index + 1} is: ${todo}`);
})



const todo = []

todo.unshift(1)
todo.unshift(2)
todo.unshift(3)

console.log(todo)
for (let i = todo.length-1; i>=0; i--){

    console.log(todo[i])
}