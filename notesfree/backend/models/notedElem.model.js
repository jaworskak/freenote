const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const notedElemSchema = new Schema({ // single element
  text_note: { type: String, required: false },
  is_text_note_link: {type: Boolean, required:false },
  photo_url: { type: String, required: false },
  photo_name: {type: String, required: false},
  tag: {type:String, required: true},
  section_id: { type: String, required: true }
}, {
  timestamps: true,
});

const NotedELem = mongoose.model('NotedELem', notedElemSchema);

module.exports = NotedELem;