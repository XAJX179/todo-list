import { Todo } from "./todo.js"
import { Project } from "./project.js"
import { Display } from "./display.js"
import './style.css'

export const TodoManager = (
  () => {
    let defaultProj = new Project('Default Project')

    function setup() {
      let todo = new Todo('title1', 'a desc', '2027-03-23', 'high',)
      let todo2 = new Todo('title2', 'a desc', '2027-03-23', 'low',)
      let todo3 = new Todo('title3', 'a desc', '2027-03-23', 'low',)
      let proj2 = new Project('Default Project 2')
      defaultProj.addTodo(todo);
      defaultProj.addTodo(todo2);
      proj2.addTodo(todo3)

      Display.draw(Project.allProjects)
    }
    function findProject(uuid) {
      return Project.find(uuid)
    }
    function addNewProject(name) {
      let project = new Project(name)
      Display.createProjectItem(project)
      return project;
    }
    function addNewTodo(data, project) {
      let todo = new Todo(data.title, data.desc, data.dueDate, data.priority)
      project.addTodo(todo)
      return todo;
    }

    function getDefaultProject() {
      return defaultProj;
    }

    return { setup, addNewProject, addNewTodo, findProject, getDefaultProject }
  }
)()
