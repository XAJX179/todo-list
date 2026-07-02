import { Todo } from "./todo.js"
import { Project } from "./project.js"
import { Display } from "./display.js"
import './style.css'
import { isDataStored, storageAvailable } from "./localStorage.js"

export const TodoManager = (
  () => {
    let defaultProj;

    function setup() {
      if (storageAvailable() && isDataStored()) {
        loadStorage()
      } else if (storageAvailable()) {
        defaultProj = new Project('Default Project')
        localStorage.setItem('projects', JSON.stringify(Project.allProjects))
      } else {
        defaultProj = new Project('Default Project')
      }
      Display.draw(Project.allProjects)
    }

    function findProject(uuid) {
      return Project.find(uuid)
    }

    function addNewProject(name) {
      let project = new Project(name)
      Display.createProjectItem(project)
      localStorage.setItem('projects', JSON.stringify(Project.allProjects))
      return project;
    }

    function deleteProject(id) {
      Project.delete(id)
      localStorage.setItem('projects', JSON.stringify(Project.allProjects))
    }

    function findTodo(id, project_id) {
      let project = findProject(project_id)
      return project.findTodo(id)
    }

    function addNewTodo(data, project) {
      let todo = new Todo(data.title, data.desc, data.dueDate, data.priority)
      project.addTodo(todo)
      localStorage.setItem('projects', JSON.stringify(Project.allProjects))
      return todo;
    }

    function deleteTodo(id, project_id) {
      let project = findProject(project_id)
      project.deleteTodo(id)
      localStorage.setItem('projects', JSON.stringify(Project.allProjects))
    }

    function updateTodo(todo_id, data, project) {
      let result = project.updateTodo(todo_id, data)
      localStorage.setItem('projects', JSON.stringify(Project.allProjects))
      return result
    }

    function toggleTodoCompletion(id, project_id) {
      let project = findProject(project_id)
      let result = project.toggleTodoCompletion(id)
      localStorage.setItem('projects', JSON.stringify(Project.allProjects))
      return result
    }

    function getDefaultProject() {
      return defaultProj;
    }

    function loadStorage() {
      let projects = localStorage.getItem('projects')
      Project.allProjects = JSON.parse(projects)
      Project.allProjects.forEach((proj) => Object.setPrototypeOf(proj, Project.prototype))
      defaultProj = Project.allProjects[0]
    }

    return { setup, addNewProject, deleteProject, addNewTodo, deleteTodo, findProject, findTodo, updateTodo, toggleTodoCompletion, getDefaultProject }
  }
)()
