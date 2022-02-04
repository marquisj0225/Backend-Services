const {Model} = require('objection');
const SoftDeleted = require('./SoftDeleted');

class Pet extends SoftDeleted {
    static get tableName() {
        return 'pets';
    }

    // This object defines the relations to other models.
    static get relationMappings() {
        const Record = require('./Record');

        return {
            records: {
                relation: Model.HasManyRelation,
                //A pet can have multiple records
                modelClass: Record,
                join: {
                    from: 'pets.id',
                    to: 'records.pet_id'
                }
            }
        }
    }

}

module.exports = Pet;

