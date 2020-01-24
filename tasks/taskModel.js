const db = require("../data/db-config.js");
const { boolToString } = require("../helpers.js");

module.exports = {
  getAllTasks,
  getProjectTasks,
  addTasks
};

function getAllTasks() {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name')
    .then(tasks => {
        boolToString(tasks)
        return tasks
    })
}

function getProjectTasks(projectID) {
    return db('tasks as t')
    .join('projects as p', 't.project_id', 'p.id')
    .select('t.id', 't.description', 't.notes', 't.completed', 'p.name as project_name')
    .where({ project_id: projectID })
    .then(tasks => {
      boolToString(tasks)
      return tasks
    })
    .catch(err => console.log(err));
}

function addTasks(task) {
  return db("tasks")
    .insert(task, "id")
    .join("projects", "projects.id", "tasks.project_id")
    .select("tasks.id", "tasks.description", "tasks.notes", "project.name");
}