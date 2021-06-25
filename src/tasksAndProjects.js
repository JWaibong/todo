
let tasks = [];
let task = (description, project,date) => {
    const proto = {
        type: "task",
        project,
        currentIndex: null,
        node: null,
        date,
    }
    return Object.assign({}, proto, {description, project, date});
}




export {task, tasks};

