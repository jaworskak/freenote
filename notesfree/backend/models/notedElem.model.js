const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notedElemSchema = new Schema({
  text_note: { type: String, required: true },
  is_text_note_link: {type: Boolean, required:true },
  photo_url: { type: String, required: true },
  photo_name: {type: String, required: true},
  tag: {type:String, required: true},
  section_id: { type: String, required: true }
}, {
  timestamps: true,
});

const NotedELem = mongoose.model('NotedELem', notedElemSchema);

module.exports = NotedELem;