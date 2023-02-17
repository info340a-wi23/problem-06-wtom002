'use strict';

import * as model from './Model.js';
import { renderTaskList } from './View.js';

function markCompleteCallback(task) {
    model.markComplete(task.id);
    renderTaskView();
}

export function renderTaskView() {
    let tRoot = document.querySelector('#tasks-root');
    tRoot.innerHTML = '';
    tRoot.appendChild(renderTaskList(markCompleteCallback));
}
let taskInput = document.querySelector('#task-input');
document.getElementById('add-task-button').addEventListener('click', () => {
    
    const taskName = taskInput.value.trim();

    if (taskName) {
        model.addTask(taskName);
        taskInput.value = '';
        renderTaskView();
    }
    // if (taskInput.textContent !== "") {
    //     model.addTask(taskInput.textContent);
    //     taskInput.textContent = '';
    //     renderTaskView();
    // }
})