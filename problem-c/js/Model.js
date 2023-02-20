'use strict';

import initialTasks from  './task-data.js';


let currentTaskList = initialTasks.map((task) => {
    return { ...task, id: initialTasks.indexOf(task) + 1 };
});

export function getIncompleteTasks() {
    return currentTaskList.filter(task => task.status === "incomplete");
}

export function addTask(desc) {
    
    let newTask = {
        id: currentTaskList[currentTaskList.length - 1].id + 1,
        description: desc,
        status: 'incomplete',
    };
    currentTaskList = [ ...currentTaskList, newTask ];
}

export function markComplete(id) {
    const updatedTaskList = currentTaskList.map((task) => {
    const taskCopy = { ...task };
    if (taskCopy.id === id) {
        taskCopy.status = "complete";
    }
        return taskCopy;
    });
    currentTaskList = updatedTaskList;
}