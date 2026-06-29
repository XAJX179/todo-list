export class Project {
  name;
  todoList;

  constructor(name, todoList = []) {
    this.name = name;
    this.todoList = todoList;
  }
}
