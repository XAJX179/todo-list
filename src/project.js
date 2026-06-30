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

  static find(uuid) {
    const index = this.allProjects.findIndex((proj) => proj.uuid == uuid)
    return this.allProjects[index]
  }

  static addToAllList(todo) {
    this.allProjects.push(todo)
  }
}
