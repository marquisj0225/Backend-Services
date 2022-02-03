# Backend Task

We're creating a pet health app called Snoutprint where users can upload medical records for their pets (PDF or image files) and share pet information with other users.

This task does not require a database installation to complete; however, the knex.js query builder is configured for a sample PostgreSQL database.
For the purposes of this project, using `knex.raw` is fine for database queries, and its usage is demonstrated in the example endpoints.
Using a flavor of SQL other than PostgreSQL is fine as well.

## 1. Schema

Create a schema for person, pet and record, as follows:

- A person consists of a first name, last name and email address.
- A pet consists of a name, species, breed, sex and birthdate.
- A record consists of a title and URL to a file.
- A person can have multiple pets, and a pet can have multiple people (such as a family or a group of friends)
- A pet can have multiple records, but every record must belong to a single pet.

**In addition, EVERY table you create must have a creation timestamp field, and its rows must be soft-deletable** (side note: this is useful for customer support and resolving interpersonal disputes that inevitably occur).

→ Write CREATE TABLE statements in `create_tables.sql` in the `db` directory.

## 2. API endpoints

Another developer has written some of the API endpoints already; here are the ones you've been asked to write:

- Get a person's profile
- List all of the pets for a given person
- List all of the records that a person has access to (a flat list of record objects)

Note that only non-deleted rows should be considered (per the soft delete requirement in #1), and the field you used for soft deletes should not be exposed in any API.

→ Update `app.js` with these 3 endpoint implementations; follow the example in the file for basic structure.

## 3. Schema update

Congratulations! Our app has gained some traction, and now we have partnerships with the American Kennel Club (for dogs) and the Cat Fanciers' Association (for cats). However, now you need to update the database schema to include a pet's AKC registration number (dogs only) or CFA registration number (cats only).

→ Write SQL statement(s) to update your database schema with this new information in `update_schema.sql` in the `db` directory.

→ Make sure this new information is included in the getPets API endpoint in `app.js`. If necessary, create a new version of the endpoint.

## 4. Optimization

Users have written in to complain that loading their pet list is painfully slow! How would you address the problem?

→ Place your response in `optimize.sql` in the `db` directory. Essay response and/or SQL are acceptable.

## 5. Analytics

It's been 12 months since we've gone live, and the operations team would like some insight into trends. One of the things they'd like to see is usage over time.

→ Write a query to get the number of records uploaded for every month (starting from the first of each month) up to the current date since we've gone live in `analytics.sql` in the `db` directory.
