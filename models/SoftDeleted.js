// Import objection and the plugin.
const {Model} = require('objection');
const objectionSoftDelete = require('objection-js-soft-delete').default;

// Specify the options for this plugin. This are the defaults.
const softDelete = objectionSoftDelete({
    columnName: 'deleted_at',
    deletedValue: new Date(),
    notDeletedValue: null,
});

// Inject the plugin to the model
class SoftDeletedModel extends softDelete(Model) {

    toJSON() {
        delete this.deleted_at;
        return this;
    }
}


module.exports = SoftDeletedModel;