const days = ['Mon', 'Tue', 'Wed', 'Thr', 'Fri', 'Sat']

console.log(days[0])

days.forEach(function (day, index){

        console.log(`starts with ${index+1} -- ${day}`)

})

for (index = 0; index < days.length; index ++){
    const element =  days[index];
    console.log(element)
    console.log(days[index])
}

