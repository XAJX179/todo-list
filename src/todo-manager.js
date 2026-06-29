import { Todo } from "./todo.js"
import { Project } from "./project.js"
import { Display } from "./display.js"

export const TodoManager = (
  () => {
    function setup() {
      let defaultProj = new Project('Default Project')
      let todo = new Todo('s', 's', 's', 's',)
      let todo2 = new Todo('s', 's', 's', 's',)
      defaultProj.addTodo(todo);
      defaultProj.addTodo(todo2);

      Display.draw(Project.allProjects, Todo.allTodos)
    }

    return { setup }
  }
)()
