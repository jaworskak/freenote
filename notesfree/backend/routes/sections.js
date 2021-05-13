const router = require('express').Router();
let Section = require('../models/section.model');

router.route('/').get((req, res) => {
  Section.find()
    .then(sect => res.json(sect)) 
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Section.findById(req.params.id)
    .then(sect => res.json(sect))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => { 
  const section_name = req.body.section_name;


  const newSection = new Section({
      section_name,
      elements_count: '0'
      });

  newSection.save()
    .then(() => res.json('Section added!'))
    .catch(err => res.status(400).json('Error: ' + err));

   
});


module.exports = router;