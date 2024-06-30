import { TaskManager } from "./taskmanager .js"
const manager = new TaskManager ();
manager.addTask("Learn JavaScript MOdules");
console.log(manager.tasks);

function completed() {
    manager.addTask("Classes",true);
    console.log(manager.addTask);
}