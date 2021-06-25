import {tasks, task} from './tasksAndProjects.js';
import {library, icon} from '@fortawesome/fontawesome-svg-core';
import {faCircle as faFaCircle} from '@fortawesome/free-regular-svg-icons';
library.add(faFaCircle);
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const c = findIconDefinition({ prefix: 'far', iconName: 'circle'});

import { compareAsc, format, isToday } from 'date-fns';

function initializeDOM(){
    const container = document.getElementById("container");
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");
    container.appendChild(sidebar);

    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.classList.add("content");

    let inbox = document.createElement("button");
    inbox.setAttribute("class", "button-active");
    inbox.setAttribute("id", "inbox");
    inbox.textContent = "Inbox";
    inbox.addEventListener("click", e => {
        clickTab(e);
        loadInboxContent();
    });
    sidebar.appendChild(inbox);

    let today = document.createElement("button");
    today.textContent = "Today";
    today.setAttribute("id", "today");
    today.addEventListener("click", e => {
        clickTab(e);
        loadTodayContent();
    });
    sidebar.appendChild(today);

    let week = document.createElement("button");
    week.textContent = "This Week";
    week.setAttribute("id", "week")
    week.addEventListener("click", e => {
        clickTab(e);
        loadWeekContent();
    });
    sidebar.appendChild(week);

    container.appendChild(content);
    loadInboxContent();




}

function clickTab(e){
    const buttons = document.querySelectorAll(".button-active");
    buttons.forEach(button => {
        button.classList.toggle("button-active");
    });
    e.target.classList.toggle("button-active");
}

function replaceContent(){
    const container = document.getElementById("container");
    const originalContent = document.getElementById("content");
    const content = document.createElement("div");
    content.classList.add("content");
    content.setAttribute("id", "content");

    container.replaceChild(content, originalContent);
    return content;

}

function loadInboxContent(){
    const inboxContent = replaceContent();


    const title = document.createElement("p");
    title.textContent = "Inbox";
    title.classList.add("tabTitle");
    inboxContent.appendChild(title);

    tasks.forEach((task,index) => {
        task.currentIndex = index;
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", `${index}`);
        task.node = taskDiv;

        inboxContent.appendChild(taskDiv);
        taskDiv.appendChild(icon(c).node[0]);


        const text = document.createElement("p"); 
        text.classList.add("task-text"); 
        let date = (task.date == "None")? "None": format(task.date, 'M/dd/yyyy');
        console.log(date);
        text.textContent = `Deadline: ${date} Description: ` + task.description; 
        taskDiv.appendChild(text);
    });
    document.querySelectorAll(".fa-circle").forEach(circle => {
        circle.addEventListener("click", e => {
            const indexFunction = () => {
                let index = 0; 
                tasks.forEach(task => {
                if(task.node.id  == e.target.parentNode.id){
                        index = task.currentIndex;
                    }
                });
                return index;
            }
            inboxContent.removeChild(e.target.parentNode);
            tasks.splice(indexFunction(), 1);
            loadInboxContent();

        });
    });

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "Add Task";
    inboxContent.appendChild(addTaskButton);
    addTaskButton.addEventListener("click", () => {
        createPopUp(inboxContent, addTaskButton);

    });
}


    /* Stuff to add: 
    the addtaskbutton should have an eventlistener that brings up a prompt to
    allow the user to submit details about their todo task. 
    During which, the addtaskbutton is removed until the user has submitted their 
    todo
    
    Add the todo task to a list of current tasks. 
    
    Upon each reload of loadInbox Content, we need to get the tasks in order
    (via sorting the list of tasks by date) and then re-display them each time.

    Might have to seperate this loadInboxContent with another one just for page initialization
    vs re-entry.




    */


function createPopUp(inboxContent, addTaskButton){
    const popUpBox = document.createElement("div");
    popUpBox.setAttribute("id", "add-task-popup");
    inboxContent.replaceChild(popUpBox, addTaskButton);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "input-add-task");
    input.setAttribute("id", "input-add-task");
    const dateInput = document.createElement("input");
    dateInput.setAttribute("id", "date-input");
    dateInput.setAttribute("type", "date");

    popUpBox.appendChild(input);
    popUpBox.appendChild(dateInput);


    const add = document.createElement("button");
    add.setAttribute("id", "add-task-confirm");
    add.textContent = "Add";
    add.addEventListener("click", e => {
        if(dateInput.value == null || dateInput.value == ""){
            tasks.push(task(input.value, null, "None"));  
        }
        else{
            const dateTokens = dateInput.value.split('-');
            const date = new Date(dateTokens[0], `${Number(dateTokens[1]) - 1}`, dateTokens[2]);
            tasks.push(task(input.value, null, date));  
        }
        console.log(tasks);
        loadInboxContent();

    });


    popUpBox.appendChild(add);

    const cancel = document.createElement("button");
    cancel.setAttribute("id", "cancel-task-confirm");
    cancel.textContent = "Cancel";
    cancel.addEventListener("click", e=> {
        loadInboxContent();
    });

    popUpBox.appendChild(cancel);











}

function loadTodayContent(){
    const todayContent = replaceContent();

    const todayTasks = tasks.filter(task => isToday(task.date));
    console.log(todayTasks);
    const title = document.createElement("p");
    title.textContent = "Today";
    title.classList.add("tabTitle");
    todayContent.appendChild(title);

    todayTasks.forEach((task,index) => {
        task.currentIndex = index;
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", `${index}`);
        task.node = taskDiv;

        todayContent.appendChild(taskDiv);
        taskDiv.appendChild(icon(c).node[0]);


        const text = document.createElement("p"); 
        text.classList.add("task-text"); 
        let date = (task.date == "None")? "None": format(task.date, 'MM\/dd\/yyyy');
        console.log(date);
        text.textContent = `Deadline: ${date} Description: ` + task.description; 
        taskDiv.appendChild(text);
    });



}

function loadWeekContent(){
    const weekContent = replaceContent();


    const title = document.createElement("p");
    title.textContent = "This Week";
    title.classList.add("tabTitle");
    weekContent.appendChild(title);

}



export{initializeDOM};