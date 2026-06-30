export class Todo {
  uuid;
  title;
  description;
  dueDate;
  priority;
  // TODO: add complete button
  // isComplete;
  static allTodos = [];

  constructor(title, description, dueDate, priority) {
    this.uuid = crypto.randomUUID()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.isComplete = false;
    Todo.addToAllList(this)
  }

  static find(uuid) {
  }

  static addToAllList(todo) {
    this.allTodos.push(todo)
  }
}
