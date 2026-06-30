import { TodoManager } from "./todo-manager.js"

export const Display = (
  () => {
    let projectList = document.querySelector('.project-list')
    let todoList = document.querySelector('.todo-list')
    let todoListHeading = document.querySelector('.todos h2')
    let newProjectDialog = document.querySelector('#new-project-dialog')
    // let newProjectButton = document.querySelector('.projects>.new-button')
    // let newTodoButton = document.querySelector('.todos>.new-button')
    let newTodoDialog = document.querySelector('#new-todo-dialog')

    function draw(projects) {
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
      if (TodoManager.getDefaultProject().uuid !== project.uuid) {
        let projectDelButton = document.createElement('button')
        projectItem.append(projectDelButton)
        projectDelButton.classList.add('del-btn')
        projectDelButton.textContent = "Delete"
      }
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
        todoItem.dataset.id = todo.uuid
      })
      todoListHeading.textContent = project.name + " Todos"
      todoListHeading.dataset.projectId = project.uuid
    }

    function setEvents() {
      projectList.addEventListener('click', projectEvents)

      newProjectDialog.addEventListener('submit', (e) => {
        e.preventDefault()
        let name = e.target.elements['proj-name'].value
        TodoManager.addNewProject(name)
        newProjectDialog.close()
      })

      newTodoDialog.addEventListener('submit', (e) => {
        e.preventDefault()
      })

    }

    function projectEvents(e) {
      if (e.target.className == 'proj-btn') {
        showSelectedProjectsTodos(e)
      } else if (e.target.className == 'del-btn') {
        removeProject(e)
      }
    }

    function showSelectedProjectsTodos(e) {
      todoList.replaceChildren()
      let uuid = e.target.parentNode.parentNode.dataset.id
      let project = TodoManager.findProject(uuid)
      createProjectTodosItems(project)
    }

    function removeProject(e) {
      console.log(e.target.parentNode.dataset.id)
      console.log(todoListHeading.dataset.projectId)
      // if it's todos are currently listed
      if (e.target.parentNode.dataset.id == todoListHeading.dataset.projectId) {
        todoList.replaceChildren()
        createProjectTodosItems(TodoManager.getDefaultProject())
      }
      e.target.parentNode.remove()
    }

    return { draw, createProjectItem }
  }
)()
