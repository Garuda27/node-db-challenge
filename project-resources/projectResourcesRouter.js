const express = require("express");

const ProjectResources = require('./projectResourcesModel.js')

const router = express.Router();

router.get('/:projectID', (req, res) => {
    ProjectResources.getProjectResources(req.params.projectID)
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({ error: err }));
})

router.post('/:projectID/:resourceID', (req, res) => {
    const linkedResource = { project_id: req.params.projectID, resource_id: req.params.resourceID }
    ProjectResources.addProjectResources(linkedResource)
        .then(linked => res.status(201).json({ message: 'succesfully linked', linked}))
        .catch(err => res.status(500).json({ error: err }));
})

module.exports = router;