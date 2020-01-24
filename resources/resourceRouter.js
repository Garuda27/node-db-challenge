const express = require('express')

const Resources = require('./resourceModel.js')

const router = express.Router()

router.get('/', (req, res) => {
    Resources.getResources()
        .then(resources => res.status(200).json(resources))
        .catch(err => res.status(500).json({ error: err }))
})

router.get("/:projectID", (req, res) => {
    Resources.getProjectResources(req.params.projectID)
    .then(resources => res.status(200).json(resources))
    .catch(err => res.status(500).json({ error: err }));
})

router.post('/', (req, res) => {
    Resources.addResource(req.body)
        .then(resource => res.status(201).json(resource))
        .catch(err => res.status(500).json({ error: err }))
})

module.exports = router;