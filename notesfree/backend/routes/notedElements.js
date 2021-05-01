const router = require('express').Router();
let notedElem = require('../models/notedElem.model');

router.route('/').get((req, res) => {
  notedElem.find()
    .then(elem => res.json(elem)) // jak ok to zwracamy jsona z userem
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  notedElem.find({section_id:req.params.id})
    .then(elem => res.json(elem))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { // podajemy nowego usera 

  console.log(req.body)

    const text_note = req.body.text_note;
    const is_text_note_link = req.body.is_text_note_link;
    const photo_url = req.body.photo_url;
    const photo_name = req.body.photo_name;
    const tag = req.body.tag;
    const section_id = req.body.section_id;

  const newElem = new notedElem({
      text_note,
      is_text_note_link,
      photo_url,
      photo_name,
      tag,
      section_id
      });

  newElem.save()
    .then(() => res.json('newElem added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;