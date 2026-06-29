export class Todo {
  uuid;
  title;
  description;
  dueDate;
  priority;

  constructor(title, description, dueDate, priority) {
    this.uuid = crypto.randomUUID()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
