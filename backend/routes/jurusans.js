const router = require('express').Router();
let Jurusan = require('../models/jurusan.model');

router.route('/').get((req, res) => {
  Jurusan.find()
    .then(jurusans => res.json(jurusans))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nama_jurusan = req.body.nama_jurusan;

  const newJurusan = new Jurusan({nama_jurusan});

  newJurusan.save()
    .then(() => res.json('Jurusan added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Jurusan.findById(req.params.id)
    .then(jurusan => res.json(jurusan))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Jurusan.findByIdAndDelete(req.params.id)
    .then(() => res.json('Jurusan deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Jurusan.findById(req.params.id)
    .then(jurusan => {
      jurusan.nama_jurusan = req.body.nama_jurusan;

      jurusan.save()
        .then(() => res.json('Jurusan updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;