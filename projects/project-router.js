const express = require("express"),
    Projects = require("./project-model"),
    router = express.Router();

    router.get('/', (req, res) =>{
        Projects.getProjects()
            .then(projects => res.status(200).json(projects))
            .catch(err => res.status(500).json({ error: err }))
    })
    
    router.post('/', (req, res) => {
        Projects.addProject(req.body)
            .then(project => res.status(201).json(project))
            .catch(err => res.status(500).json({ error: err }))
    })



module.exports = router; 