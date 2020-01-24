exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('resources').del()
      .then(function () {
        // Inserts seed entries
        return knex('resources').insert([
          { res_id: 1, name: 'Resource 1', description: 'This is the description for resource 1', project_id: 1 },
          { res_id: 2, name: 'Resource 2', description: 'This is the description for resource 2', project_id: 1 },
          { res_id: 3, name: 'Resource 3', description: 'This is the description for resource 3', project_id: 1 },
          { res_id: 4, name: 'Resource 4', description: 'This is the description for resource 4', project_id: 2 },
          { res_id: 5, name: 'Resource 5', description: 'This is the description for resource 5', project_id: 3 },
          { res_id: 6, name: 'Resource 6', description: 'This is the description for resource 6', project_id: 4 },
          { res_id: 7, name: 'Resource 7', description: 'This is the description for resource 7', project_id: 4 },
          { res_id: 8, name: 'Resource 8', description: 'This is the description for resource 8', project_id: 5 },
          { res_id: 9, name: 'Resource 9', description: 'This is the description for resource 9', project_id: 5 }
        ]);
      });
  };