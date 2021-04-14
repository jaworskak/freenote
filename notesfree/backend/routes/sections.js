const router = require('express').Router();
let Section = require('../models/section.model');

router.route('/').get((req, res) => {
  Section.find()
    .then(sect => res.json(sect)) // jak ok to zwracamy jsona z userem
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { // podajemy nowego usera 
  const section_name = req.body.section_name;
  const section_id = 1

  const newSection = new Section({
      section_id,
      section_name,
      });

  newSection.save()
    .then(() => res.json('Section added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;