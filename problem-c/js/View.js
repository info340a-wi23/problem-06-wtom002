'use strict';

import {getIncompleteTasks} from './Model.js';

function renderSingleTask(task, cb) {
    let list = document.createElement('li');
    list.classList.add('list-group-item');
    list.textContent = " " + task.description;
    let button = document.createElement('button');
    button.classList.add('btn', 'btn-sm', 'btn-warning');
    button.innerHTML += '<span class="material-icons-outlined">done</span>';
    button.addEventListener('click', () =>cb(task)); //markCompleteCallback();
    list.prepend(button);
    return list;
}

export function renderTaskList(cb) {
    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    getIncompleteTasks();
    

    return ul;
}