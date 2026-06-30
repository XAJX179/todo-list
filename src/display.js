import { Project } from "./project.js"

export const Display = (
  () => {
    let projectList = document.querySelector('.project-list')
    let todoList = document.querySelector('.todo-list')
    let todoListHeading = document.querySelector('.todos h2')
    let newProjectDialog = document.querySelector('#new-project-dialog')
    let newProjectButton = document.querySelector('.projects>.new-button')
    let newTodoButton = document.querySelector('.todos>.new-button')
    let newTodoDialog = document.querySelector('#new-todo-dialog')

    function draw(projects) {
      console.log(projects)
      projects.forEach(project => {
        createProjectItem(project)
      });
      createProjectTodosItems(projects[0])
      setEvents()
    }

    function createProjectItem(project) {
      let projectItem = document.createElement('li')
      let projectButton = document.createElement('button')
      let projectHeading = document.createElement('h3')
      projectHeading.append(projectButton)
      projectItem.append(projectHeading)
      projectList.append(projectItem)

      projectButton.textContent = project.name;
      projectButton.classList.add('proj-btn')
      projectItem.dataset.id = project.uuid
    }

    function createProjectTodosItems(project) {
      project.todoList.forEach((todo) => {
        let todoItem = document.createElement('li')
        let todoItemHeading = document.createElement('h3')
        let todoItemDescription = document.createElement('p')
        let todoItemDueDate = document.createElement('p')
        let todoItemPriority = document.createElement('p')
        let todoItemEditButton = document.createElement('button')
        todoItem.append(todoItemHeading)
        todoItem.append(todoItemDescription)
        todoItem.append(todoItemDueDate)
        todoItem.append(todoItemPriority)
        todoItem.append(todoItemEditButton)
        todoList.append(todoItem)

        todoItemHeading.textContent = todo.title
        todoItemDescription.textContent = todo.description
        todoItemDueDate.textContent = todo.dueDate
        todoItemPriority.textContent = todo.priority
        todoItemEditButton.textContent = "Edit"
        todoListHeading.textContent = project.name + " Todos"
        todoListHeading.dataset.projectId = project.uuid
        todoItem.dataset.id = todo.uuid
      })
    }

    function setEvents() {
      projectList.addEventListener('click', showSelectedProjectsTodos)
      newProjectDialog.addEventListener('submit', () => {
      })
      newTodoDialog.addEventListener('submit', () => {
      })
    }

    function showSelectedProjectsTodos(e) {
      if (e.target.className == 'proj-btn') {
        todoList.replaceChildren()
        let uuid = e.target.parentNode.parentNode.dataset.id
        let project = Project.find(uuid)
        console.log(project)
        createProjectTodosItems(project)
      }
    }

    return { draw }
  }
)()
