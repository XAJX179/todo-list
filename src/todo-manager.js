import { Todo } from "./todo.js"
import { Project } from "./project.js"
import { Display } from "./display.js"
import './style.css'

export const TodoManager = (
  () => {
    function setup() {
      let defaultProj = new Project('Default Project')
      let todo = new Todo('title1', 'a desc', '19/2/26', 'high',)
      let todo2 = new Todo('title2', 'a desc', '19/2/26', 'low',)
      let todo3 = new Todo('title3', 'a desc', '19/2/26', 'low',)
      let proj2 = new Project('Default Project 2')
      defaultProj.addTodo(todo);
      defaultProj.addTodo(todo2);
      proj2.addTodo(todo3)

      Display.draw(Project.allProjects)
    }

    return { setup }
  }
)()
