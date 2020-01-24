exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('projects').del()
      .then(function () {
        // Inserts seed entries
        return knex('projects').insert([
          { id: 1, name: 'project 1', description: "This is the description for project 1", completed: 0 },
          { id: 2, name: 'project 2', description: "This is the description for project 2", completed: 0 },
          { id: 3, name: 'project 3', description: "This is the description for project 3", completed: 0 },
          { id: 4, name: 'project 4', description: "This is the description for project 4", completed: 0 },
          { id: 5, name: 'project 5', description: "This is the description for project 5", completed: 0 },
        ]);
      });
  };