import defaultExport, * as initialTasks from "./task-data";

const currentTaskList = initialTasks.map((task, index) => {
    return { ...task, id: index + 1 };
  });

export function getIncompleteTasks() {
    return currentTaskList.filter( ()=> currentTaskList.status === 'incomplete');
}

export function addTask(description) {
    currentTaskList = { ...task, id: index + 1 };
}

export function markComplete(id) {
    
}