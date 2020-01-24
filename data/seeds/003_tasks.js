exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('tasks').del()
      .then(function () {
        // Inserts seed entries
        return knex('tasks').insert([
          { task_id: 1, description: "Task 1 is important", notes: "These are some notes for task 1", completed: 0, project_id: 1 },
          { task_id: 2, description: "Task 2 is important", notes: "These are some notes for task 2", completed: 0, project_id: 1 },
          { task_id: 3, description: "Task 3 is important", notes: "These are some notes for task 3", completed: 0, project_id: 2 },
          { task_id: 4, description: "Task 4 is important", notes: "These are some notes for task 4", completed: 0, project_id: 2 },
          { task_id: 5, description: "Task 5 is important", notes: "These are some notes for task 5", completed: 0, project_id: 3 },
          { task_id: 6, description: "Task 6 is important", notes: "These are some notes for task 6", completed: 0, project_id: 4 },
          { task_id: 7, description: "Task 7 is important", notes: "These are some notes for task 7", completed: 0, project_id: 5 },
          { task_id: 8, description: "Task 8 is important", notes: "These are some notes for task 8", completed: 0, project_id: 5 }
        ]);
      });
  };