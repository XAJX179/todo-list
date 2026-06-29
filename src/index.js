import { Todo } from "./todo.js"
import { Project } from "./project.js"

console.log("Hi")

let todo = new Todo('s', 'sd', 'sd', 'dskl')
let todo2 = new Todo('s', 'sd', 'sd', 'dskl')

console.log(todo)
console.log(todo2)

let project = new Project('myProject', [todo.uuid, todo2.uuid])

console.log(project)

console.log(Todo.find(todo.uuid))
