export class Todo {
  uuid;
  title;
  description;
  dueDate;
  priority;
  static allTodos = [];

  constructor(title, description, dueDate, priority) {
    this.uuid = crypto.randomUUID()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    Todo.addToAllList(this)
  }

  static find(uuid) {
    console.log(uuid)
    console.log(this.allTodos)
  }

  static addToAllList(todo) {
    this.allTodos.push(todo)
  }
}
