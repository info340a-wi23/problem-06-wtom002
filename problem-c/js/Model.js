'use strict';

import initialTasks from  './task-data.js';


let currentTaskList = Array.from(initialTasks.map((task, index) => {
    return { ...task, id: index + 1 };
  }));

export function getIncompleteTasks() {
    
    return currentTaskList.filter(task => task.status === 'incomplete');
}

export function addTask(desc) {
    let newTask = {
        description: desc,
        status: 'incomplete',
        id: currentTaskList.length + 1,
    };
    currentTaskList = { ...currentTaskList, newTask };
}

export function markComplete(id) {
    currentTaskList = currentTaskList.map((task) => {
        if (task.id === id) {
            return {...task, status: "complete"};
        } else {
            return task
        }
    });
}