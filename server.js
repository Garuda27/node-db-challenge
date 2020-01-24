const express = require('express')
const helmet = require('helmet')

const ProjectRouter = require("./projects/project-router")
const ResourcesRouter = require('./resources/resourceRouter.js')
const TasksRouter = require('./tasks/taskRouter.js')
const ProjectResourcesRouter = require('./project-resources/projectResourcesRouter.js')

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/projects', ProjectRouter)
server.use('/resources', ResourcesRouter)
server.use('/tasks', TasksRouter)
server.use('/project-resources', ProjectResourcesRouter)

server.get('/', (req, res) => {
    res.status(200).send(`<h2>It's working!!!</h2>`)
})

module.exports = server 