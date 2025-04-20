
/**
 * Categories must be --> 'Study', 'Entertainment', 'Personal', 'Health', 'Learning'
 */



// 1.
class TodoApp {
    constructor() {
        this.todos = []
    }



    // task 2. add
    addTodo(taskName, taskCompleteTime, taskCategories){
        const newTask = {
            id: this.todos.length + 1,
            taskName,
            taskCategories,
            taskCompleteTime,
            completed: false
        }
        this.todos.push(newTask)
    }


    // task 3. complete
    completeTodo(fTaskName){
        const findTask = this.todos.find(task => task.taskName === fTaskName)
        if (!findTask) {
            return false
        }
        findTask.completed = true
        return true 
    }


    // task 4. remove
    removeTodo(rTaskName){
        this.todos = this.todos.filter(task => task.taskName !== rTaskName)
    }


    // task 5. display
    displayTodoList(dCategoriesName = 'All'){
        let tasksToDisplay = this.todos

        if (dCategoriesName !== 'All') {
            tasksToDisplay = this.todos.filter(task => task.taskCategories === dCategoriesName);
        }

        tasksToDisplay.forEach(task => {
            console.log({
                id: task.id,
                name: task.taskName,
                categorie: task.taskCategories,
                time: task.taskCompleteTime,
            })
        })
    }



    // task 6. hours
    hoursWorked(){
        const fil = this.todos.filter(task => task.completed === true)

        if (fil.length <= 0) {
            return 'Not any completed task yet.'
        }

        return fil.reduce(function(acc, cur){
            return acc + cur.taskCompleteTime
        }, 0)
    }



    // task 7. time needed
    timeNeeded(){
        const fil = this.todos.filter(task => task.completed === false)

        if (fil.length <= 0) {
            return 'Not any incompleted task yet.'
        }

        return fil.reduce(function(acc, cur){
            return acc += cur.taskCompleteTime
        }, 0)
    }



    // task 8. Edit todo
    editTodo(eTaskName, updatedObj){
        const taskIndex = this.todos.findIndex(task => task.taskName === eTaskName);


        if (taskIndex === -1 || !updatedObj) {
            return false;
        }

        const eTask = this.todos[taskIndex];

        const updatedTask = {
            ...eTask,
            taskName: updatedObj.taskName ? updatedObj.taskName : eTask.taskName,
            taskCategories: updatedObj.taskCategories ? updatedObj.taskCategories : eTask.taskCategories,
            taskCompleteTime: updatedObj.taskCompleteTime ? updatedObj.taskCompleteTime : eTask.taskCompleteTime
        }

        this.todos[taskIndex] = updatedTask;

        console.log(eTask)
        console.log(this.todos)

        return true
    }



    // task 9. get todo
    getTodo(gTaskNameOrGeCatname){
        const getTod = this.todos.find(task => task.taskName === gTaskNameOrGeCatname || task.taskCategories === gTaskNameOrGeCatname)

        return getTod
    }



    // task 10. largest todo
    lergestTodo() {
        const notCom = this.todos.filter(task => !task.completed)
    
        if (notCom.length === 0) return 'No uncompleted tasks.'
    
        return notCom.reduce((max, curr) =>
            curr.taskCompleteTime > max.taskCompleteTime ? curr : max
        );
    }


    
    // task 11. smallest todo
    smallestTodo() {
        const notCom = this.todos.filter(task => !task.completed)
    
        if (notCom.length === 0) return 'No uncompleted tasks.'
    
        return notCom.reduce((min, curr) =>
            curr.taskCompleteTime > min.taskCompleteTime ? min : curr 
        );
    }



    // task 12. sort todo
    sortTodos() {
        const notCom = this.todos.filter(task => !task.completed);
    
        const highToLow = notCom.sort((a, b) => b.taskCompleteTime - a.taskCompleteTime);
    
        return highToLow;
    }   
    
    

    // task 13. undoTodo
    undoTodo(uTaskName){
        const uTaskFind = this.todos.find(task => task.taskName === uTaskName && task.completed)

        if(!uTaskFind) return false

        uTaskFind.completed = false
        return true
    }



    // task 14. completed percentage
    completedPercentage() {
        const allTallLen = this.todos.length
        const allCompletedTasksLen = this.todos.filter(task => task.completed).length;

        return allTallLen === 0 || allCompletedTasksLen === 0 ? 0 : (allCompletedTasksLen / allTallLen) * 100;

    }



    // task 15. import todos
    importTodos(importedJson){
        const jsonToObj = JSON.parse(importedJson)
        jsonToObj.forEach(task => this.todos.push(task))
    }



    // task 16. clear all todos
    clearAllTodos(){
        this.todos = []
    }
}


const todo = new TodoApp()


todo.addTodo('Learn JavaScript', 100, 'Learning')
todo.addTodo('Learn Python', 100, 'Learning')
todo.addTodo('Something', 20, 'Personal')


console.log(todo.completeTodo('Learn JavaScript'));
// console.log(todo.completeTodo('Learn Python'));
// console.log(todo.completeTodo('Something'));


// todo.removeTodo('Learn JavaScript')


// todo.displayTodoList('Personal')
todo.displayTodoList()

console.log(todo.hoursWorked())
console.log(todo.timeNeeded())



// todo.editTodo('Something', {taskName: 'tName', taskCategories: 'tCate', taskCompleteTime: 10})

console.log(todo.editTodo('Something', {taskName: 'More Than Something', taskCategories: 'Study'}));



console.log(todo.getTodo('Learnin'));


todo.lergestTodo()



console.log(todo.lergestTodo());
console.log(todo.smallestTodo());


console.log(todo.sortTodos());




// console.log(todo.undoTodo('Learn JavaScript'));




console.log(todo.completedPercentage());






const someJSONtodoTask = `[
    {
      "id": 4,
      "taskName": "Task Name Four",
      "taskCategories": "Learning",
      "taskCompleteTime": 100,
      "completed": true
    },
    {
      "id": 5,
      "taskName": "Task Name Five",
      "taskCategories": "Learning",
      "taskCompleteTime": 100,
      "completed": false
    },
    {
      "id": 6,
      "taskName": "Task Name Six",
      "taskCategories": "Study",
      "taskCompleteTime": 20,
      "completed": false
    }
]`


todo.importTodos(someJSONtodoTask)




todo.clearAllTodos()