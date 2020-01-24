const express = require("express");

const Tasks = require("./taskModel.js");

const router = express.Router();

router.get("/", (req, res) => {
  Tasks.getAllTasks()
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: err }));
});

router.get("/:projectID", (req, res) => {
  Tasks.getProjectTasks(req.params.projectID)
    .then(tasks => res.status(200).json(tasks))
    .catch(err => res.status(500).json({ error: err }));
});

router.post("/:projectID", (req, res) => {
    const newTask = { ...req.body, project_id: req.params.projectID}
  Tasks.addTasks(newTask)
    .then(task => res.status(201).json(task))
    .catch(err => res.status(500).json({ error: err }));
});

module.exports = router;