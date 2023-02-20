'use strict';

import {getIncompleteTasks} from './Model.js';
getIncompleteTasks();

function renderSingleTask(task, cb) {
    const list = document.createElement('li');
    list.classList.add('list-group-item');
    list.appendChild(document.createTextNode(" " + task["description"]));
    
    let done = document.createElement('button');
    done.classList.add('btn', 'btn-sm', 'btn-warning');
    done.innerHTML += '<span class="material-icons-outlined">done</span>';
    done.addEventListener('click', () => {cb(task);}); 

    list.prepend(done);
    
    
    return list;
}

export function renderTaskList(cb) {
    let ul = document.createElement('ul');
    ul.classList.add('list-group', 'list-group-flush');
    // if (getIncompleteTasks()==null) {
    //     let div = document.createElement('div');
    //     div.innerText = "None!";
    //     return div;
    // }
    for (let task of getIncompleteTasks()) {
        ul.appendChild(renderSingleTask(task, cb));
    }
    return ul;
}