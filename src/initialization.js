import {tasks, task, project, projects} from './tasksAndProjects.js';
import {library, icon} from '@fortawesome/fontawesome-svg-core';
import {faCircle as faFaCircle} from '@fortawesome/free-regular-svg-icons';
library.add(faFaCircle);
import { findIconDefinition } from '@fortawesome/fontawesome-svg-core'
const c = findIconDefinition({ prefix: 'far', iconName: 'circle'});

import { compareAsc, format, isThisWeek, isToday } from 'date-fns';

function initializeDOM(){
    const container = document.getElementById("container");
    const sidebar = document.createElement("div");
    sidebar.setAttribute("id", "sidebar");
    container.appendChild(sidebar);

    const content = document.createElement("div");
    content.setAttribute("id", "content");
    content.classList.add("content");

    const inbox = document.createElement("button");
    inbox.setAttribute("class", "button-active");
    inbox.setAttribute("id", "inbox");
    inbox.textContent = "Inbox";
    inbox.addEventListener("click", e => {
        clickTab(e);
        loadInboxContent();
    });
    sidebar.appendChild(inbox);

    const today = document.createElement("button");
    today.textContent = "Today";
    today.setAttribute("id", "today");
    today.addEventListener("click", e => {
        clickTab(e);
        loadTodayContent();
    });
    sidebar.appendChild(today);

    const week = document.createElement("button");
    week.textContent = "This Week";
    week.setAttribute("id", "week")
    week.addEventListener("click", e => {
        clickTab(e);
        loadWeekContent();
    });
    sidebar.appendChild(week);



    const addProject = document.createElement("button");
    addProject.textContent = "Add Project";
    addProject.addEventListener("click", e => {
        const container = document.createElement("div");
        container.setAttribute("id", "project-container");
        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", "project-input");

        const add = document.createElement("button");
        add.textContent = "Add";
        add.setAttribute("id", "add-project-confirm");
        add.addEventListener("click", () =>{
            projects.push(project(input.value));
            loadProjects(sidebar);

            sidebar.removeChild(container);
            sidebar.appendChild(addProject);
        });


        const cancel = document.createElement("button");
        cancel.textContent = "Cancel";
        cancel.setAttribute("id", "cancel-project");
        cancel.addEventListener("click", ()=>{

            sidebar.removeChild(container);
            sidebar.appendChild(addProject);

        });
        
        container.appendChild(input);
        container.appendChild(add);
        container.appendChild(cancel);

        sidebar.replaceChild(container, addProject);

    });
    sidebar.appendChild(addProject);

    container.appendChild(content);
    loadInboxContent();




}

function loadProjects(sidebar){
    document.querySelectorAll(".project-button").forEach(button => {
        sidebar.removeChild(button);
    });
    projects.sort((e1,e2) => {
        e1.title.localeCompare(e2.title);
    });

    projects.forEach(project => {
        const projectButton = document.createElement("button");
        projectButton.classList.add("project-button");
        projectButton.textContent = project.title;
        projectButton.addEventListener("click", e => {
            clickTab(e);
            loadProjectContent(project);

        });

        sidebar.appendChild(projectButton);
    });


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

function loadProjectContent(project){
    const projectContent = replaceContent();
    
    const title = document.createElement("p");
    title.textContent = project.title;
    title.classList.add("tabTitle");
    projectContent.appendChild(title);

    const projectTasks = tasks.filter(task => task.project == project.title);






}

function loadTasks(content, taskList){
    taskList.forEach((task,index) => {
        task.currentIndex = index;
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", `${index}`);
        task.node = taskDiv;

        content.appendChild(taskDiv);
        taskDiv.appendChild(icon(c).node[0]);


        const text = document.createElement("p"); 
        text.classList.add("task-text"); 
        let date = (task.date == -2)? "None": format(task.date, 'M/dd/yyyy');
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
            content.removeChild(e.target.parentNode);
            tasks.splice(indexFunction(), 1);
            loadInboxContent();

        });
    });

}


function loadInboxContent(){
    const inboxContent = replaceContent();


    const title = document.createElement("p");
    title.textContent = "Inbox";
    title.classList.add("tabTitle");
    inboxContent.appendChild(title);
    tasks.sort((e1,e2) => {
        return compareAsc(e1.date, e2.date);
    });

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
        let date = (task.date == -2)? "None": format(task.date, 'M/dd/yyyy');
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
            tasks.push(task(input.value, null, -2));  
        }
        else{
            const dateTokens = dateInput.value.split('-');
            const date = new Date(dateTokens[0], `${Number(dateTokens[1]) - 1}`, dateTokens[2]);
            tasks.push(task(input.value, null, date));  
        }
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
        let date = (task.date == -2)? "None": format(task.date, 'MM\/dd\/yyyy');
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

    const weekTasks = tasks.filter(task => isThisWeek(task.date));

    weekTasks.forEach((task,index) => {
        task.currentIndex = index;
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.setAttribute("id", `${index}`);
        task.node = taskDiv;

        weekContent.appendChild(taskDiv);
        taskDiv.appendChild(icon(c).node[0]);


        const text = document.createElement("p"); 
        text.classList.add("task-text"); 
        let date = (task.date == -2)? "None": format(task.date, 'MM\/dd\/yyyy');
        text.textContent = `Deadline: ${date} Description: ` + task.description; 
        taskDiv.appendChild(text);
    });

}



export{initializeDOM};