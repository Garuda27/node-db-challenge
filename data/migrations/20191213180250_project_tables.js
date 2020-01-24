exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments()
          tbl.string('name', 128).unique().notNullable()
          tbl.string('description', 255)
          tbl.boolean('completed', false)
      })
  
      .createTable('resources', tbl => {
          tbl.increments()
          tbl.string('name', 128).unique().notNullable()
          tbl.string('description', 255)
      })
  
      .createTable('tasks', tbl => {
          tbl.increments()
          tbl.string('description', 255).notNullable()
          tbl.string('notes', 255)
          tbl.boolean('completed', false)
  
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('RESTRICT');
      })
   
      .createTable('project_resource', tbl => {
          tbl.increments()
  
          tbl
          .integer('project_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('projects')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
  
          tbl
          .integer('resource_id')
          .unsigned()
          .notNullable()
          .references('id')
          .inTable('resources')
          .onUpdate('CASCADE')
          .onDelete('RESTRICT');
  
          tbl.unique(['project_id', 'resource_id']);
      })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTableIfExists('project_resource')
      .dropTableIfExists('takes')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };