
const tasks = [];
const task = (description, project,date) => {
    const proto = {
        type: "task",
        project,
        currentIndex: null,
        node: null,
        date,
    }
    return Object.assign({}, proto, {description, project, date});
}

const projects = [];
const project = (title) => {
    const proto = {
        type: "project",
        title,
        tasks: null,
    }
    return Object.assign({}, proto, {title});

}



export {task, tasks, projects, project};

