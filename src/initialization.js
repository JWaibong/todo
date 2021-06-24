function initializeDOM(){
    const sidebar = document.getElementById("sidebar");
    let inbox = document.createElement("button");
    inbox.setAttribute("class", "button-active");
    inbox.textContent = "Inbox";
    inbox.addEventListener("click", () => {
        const buttons = document.querySelectorAll(".button-active");
        buttons.forEach(button => {
            button.classList.toggle("button-active");
        });
        inbox.classList.toggle("button-active");

    });

    sidebar.appendChild(inbox);

    let today = document.createElement("button");
    today.textContent = "Today";
    today.addEventListener("click", () => {
        const buttons = document.querySelectorAll(".button-active");
        buttons.forEach(button => {
            button.classList.toggle("button-active");
        });
        today.classList.toggle("button-active");
    });
    sidebar.appendChild(today);

    let week = document.createElement("button");
    week.textContent = "This Week";
    week.addEventListener("click", () => {
        const buttons = document.querySelectorAll(".button-active");
        buttons.forEach(button => {
            button.classList.toggle("button-active");
        });
        week.classList.toggle("button-active");
    });
    sidebar.appendChild(week);

}


export{initializeDOM};