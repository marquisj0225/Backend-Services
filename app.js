const express = require('express');
const app = express();
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'snoutprint',
    database: 'snoutprint-db'
  }
});

app.get('/example', async function (req, res) {
  // this query returns [ { id: 1, description: 'Hello' }, { id: 2, description: 'World' }]
  const results = await knex.raw(`SELECT id, description FROM example ORDER BY created_at`);
  
  res.json(results);
});

app.get('/example/:id', async function (req, res) {
  // this query returns [ { id: 1, description: 'Hello' } ]
  const results = await knex.raw(`SELECT id, description FROM example WHERE id = ?`, [ req.params.id ]);
  
  res.json(results[0]);
});

/**
 * YOUR CODE STARTS HERE
 */

// Gets a person's profile
 app.get('/person/:person_id', function (req, res) {
  res.status(200).send();
});

// Lists all of the person's pets (a flat list of pet objects; do not return soft-deleted data)
app.get('/person/:person_id/pets', function (req, res) {
  res.status(200).send();
});

// Lists all of the person's pets' records (a flat list of record objects; do not return soft-deleted data)
app.get('/person/:person_id/records', function (req, res) {
  res.status(200).send();
});

/**
 * END YOUR CODE SECTION
 */

app.listen(9001, function () {
  console.log('Snoutprint started and listening on port 9001!');
});
