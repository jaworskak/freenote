const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sectionSchema = new Schema({
  section_name: {type: String, required: true}
}, {
  timestamps: true,
});

const section = mongoose.model('Section', sectionSchema);

module.exports = section;