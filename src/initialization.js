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

    const addTaskButton = document.createElement("button");
    addTaskButton.classList.add("add-task-button");
    addTaskButton.textContent = "Add Task";
    inboxContent.appendChild(addTaskButton);







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