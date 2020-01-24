const db = require('../data/db-config.js')
const { boolToString } = require("../helpers.js");

module.exports = {
    getProjects,
    addProject,
}

function getProjects() {
    return db('projects')
        .then(projects => {
            boolToString(projects)
            return projects
        })
}

function addProject(project) {
    return db('projects')
        .insert(project, 'id')
}