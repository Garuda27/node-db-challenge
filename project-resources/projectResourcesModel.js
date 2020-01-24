const db = require('../data/db-config.js')

module.exports = {
    getProjectResources,
    addProjectResources,
}

function getProjectResources(projectID) {
    return db('project_resource as pr')
        .join('projects as p', 'p.id', 'pr.project_id')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .select('pr.id', 'p.name as project_name', 'r.name as resource_name', 'r.description as resource_description')
        .where('pr.project_id', projectID)
        .then(resources => {
            console.log(resources)
            return resources
        })
        .catch(err => console.log('getProjectResources: ', err))
}

function addProjectResources(link) {
    console.log('link: ', link)
    return db('project_resource as pr')
        .insert(link, 'id')
        .join('projects as p', 'p.id', 'pr.project_id')
        .join('resources as r', 'r.id', 'pr.resource_id')
        .select('pr.id', 'p.name as project_name', 'r.name as resource_name', 'r.description as resource_description')
        .then(newResource => {
            return newResource
        })
        .catch(err => console.log('error in addProjectResources: ', err))
}