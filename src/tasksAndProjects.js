
let tasks = [];
let task = (description, project) => {
    const proto = {
        type: "task",
        project: project,
    }
    return Object.assign({}, proto, {description, project});
}




export {task, tasks};

