import { Todo } from "./todo.js"
import { Project } from "./project.js"

console.log("Hi")

let todo = new Todo('s', 'sd', 'sd', 'dskl')

console.log(todo)

let project = new Project('myProject', [todo.uuid])

console.log(project)

