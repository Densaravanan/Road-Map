import { formatDate } from "./utils.js";

export class TaskManager {
    constructor() {
        //let, const, var;
        this.tasks = [];
    }
}
addTask(description, completed = false) {
    const tasks = {
        description,
        date: formatDate(new Date()),
        completed:completed,
    };
    this.tasks.push(tasks)
}