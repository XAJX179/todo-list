export class Project {
  uuid;
  name;
  todoList;
  static allProjects = [];

  constructor(name, todoList = []) {
    this.uuid = crypto.randomUUID()
    this.name = name;
    this.todoList = todoList;
    Project.addToAllList(this)
  }

  addTodo(todo) {
    this.todoList.push(todo)
  }

  findTodo(id) {
    return this.todoList.find((todo) => todo.uuid == id)
  }

  deleteTodo(id) {
    let index = this.todoList.findIndex((todo) => todo.uuid == id)
    this.todoList.splice(index, 1)
  }

  updateTodo(id, data) {
    let todo = this.todoList.find((todo) => todo.uuid == id)
    todo.title = data.title;
    todo.description = data.desc;
    todo.dueDate = data.dueDate
    todo.priority = data.priority
    return todo
  }

  static find(uuid) {
    const index = this.allProjects.findIndex((proj) => proj.uuid == uuid)
    return this.allProjects[index]
  }

  static addToAllList(todo) {
    this.allProjects.push(todo)
  }

  static delete(id) {
    let index = Project.allProjects.findIndex((proj) => proj.uuid == id)
    this.allProjects.splice(index, 1)
  }
}
