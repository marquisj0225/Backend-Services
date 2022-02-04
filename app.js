const {Model} = require('objection');
const Person = require('./models/Person');

const express = require('express');
const app = express();

// Initialize knex.
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

// Bind all Models to a knex instance. If you only have one database in
// your server this is all you have to do. For multi database systems, see
// the Model.bindKnex() method.
Model.knex(knex);

app.get('/example', async function (req, res) {
    // this query returns [ { id: 1, description: 'Hello' }, { id: 2, description: 'World' }]
    const results = await knex.raw(`SELECT id, description FROM example ORDER BY created_at`);

    res.json(results);
});

app.get('/example/:id', async function (req, res) {
    // this query returns [ { id: 1, description: 'Hello' } ]
    const results = await knex.raw(`SELECT id, description FROM example WHERE id = ?`, [req.params.id]);

    res.json(results[0]);
});


/**
 * YOUR CODE STARTS HERE
 */
// Gets a person's profile
app.get('/person/:person_id', async function (req, res) {

    try {
        const {person_id} = req.params;
        const person = await Person.query().findById(person_id).whereNotDeleted();
        res.json(person);
    } catch (err) {
        console.log(err);
        res.json({err: err, mes: "there was an error"});
    }


});

// Lists all of the person's pets (a flat list of pet objects; do not return soft-deleted data)
app.get('/person/:person_id/pets', async function (req, res) {
    try {
        const {person_id} = req.params;
        const person = await Person.query()
            .withGraphFetched('pets')
            .findById(person_id).whereNotDeleted();
        res.json(person.pets);
    } catch (err) {
        res.json({err: err, mes: "there was an error"});
    }
});

// Lists all of the person's pets' records (a flat list of record objects; do not return soft-deleted data)
app.get('/person/:person_id/records', async function (req, res) {
    try {
        const {person_id} = req.params;
        const person = await Person.query()
            .withGraphJoined('pets.records')
            .findById(person_id).whereNotDeleted();

        res.json(person.pets.flatMap(pet => pet.records));
    } catch (err) {
        console.log(err);
        res.json({err: err, mes: "there was an error"});
    }
});

/**
 * END YOUR CODE SECTION
 */

app.listen(9001, function () {
    console.log('Snoutprint started and listening on port 9001!');
});
