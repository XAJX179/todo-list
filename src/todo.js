export class Todo {
  uuid;
  title;
  description;
  dueDate;
  priority;
  // TODO: add complete button
  // isComplete;

  constructor(title, description, dueDate, priority) {
    this.uuid = crypto.randomUUID()
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    // this.isComplete = false;
  }
}
