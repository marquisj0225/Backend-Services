const {Model} = require('objection');
const SoftDeleted = require('./SoftDeleted');

class Person extends SoftDeleted {
    static get tableName() {
        return 'persons';
    }

    // This object defines the relations to other models.
    static get relationMappings() {
        const Pet = require('./Pet');

        return {
            pets: {
                relation: Model.ManyToManyRelation,
                modelClass: Pet,
                join: {
                    from: 'persons.id',
                    through: {
                        from: 'persons_pets.person_id',
                        to: 'persons_pets.pet_id'
                    },
                    to: 'pets.id'
                }
            }
        }
    }

}

module.exports = Person;
