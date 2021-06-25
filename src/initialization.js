import {tasks, task} from './tasksAndProjects.js';
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

    tasks.forEach(task => {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("task-div");
        taskDiv.textContent = task.description; 
        inboxContent.appendChild(taskDiv);
    });

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "Add Task";
    inboxContent.appendChild(addTaskButton);
    addTaskButton.addEventListener("click", () => {
        createPopUp(inboxContent, addTaskButton);

    });

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
}
function createPopUp(inboxContent, addTaskButton){
    const popUpBox = document.createElement("div");
    popUpBox.setAttribute("id", "add-task-popup");
    inboxContent.replaceChild(popUpBox, addTaskButton);

    const input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("class", "input-add-task");
    input.setAttribute("id", "input-add-task");

    popUpBox.appendChild(input);

    const add = document.createElement("button");
    add.setAttribute("id", "add-task-confirm");
    add.textContent = "Add";
    add.addEventListener("click", e => {
        tasks.push(task(input.value, null));
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

    const title = document.createElement("p");
    title.textContent = "Today";
    title.classList.add("tabTitle");
    todayContent.appendChild(title);



}

function loadWeekContent(){
    const weekContent = replaceContent();


    const title = document.createElement("p");
    title.textContent = "This Week";
    title.classList.add("tabTitle");
    weekContent.appendChild(title);

}



export{initializeDOM};