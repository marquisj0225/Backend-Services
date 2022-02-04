const SoftDeleted = require('./SoftDeleted');

class Record extends SoftDeleted {
    static get tableName() {
        return 'records';
    }

}

module.exports = Record;
