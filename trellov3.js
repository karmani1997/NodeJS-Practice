let myTodos = {

    day: 'Monday',
    meetings: 0,
    meetDone: 0,

    addMeeting: function (num){
        this.meetings = this.meetings + num
    },

    summary: function(){
        return `You have ${this.meetings}  meeting today`
    }
    
}

let myTodosTwo = {

    day: 'Tuesday',
    meetings: 12,
    meetDone: 3,

    addMeeting: function (){
        console.log('Hi I am function');
        console.log(this)
    }
}

myTodos.addMeeting(4)
console.log(myTodos.summary())
//myTodosTwo.addMeeting()

