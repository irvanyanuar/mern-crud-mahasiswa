const router = require('express').Router();
let Mahasiswa = require('../models/mahasiswa.model');

router.route('/').get((req, res) => {
  Mahasiswa.find()
    .then(mahasiswas => res.json(mahasiswas))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nama = req.body.nama;
  const nrp = req.body.nrp;
  const nama_jurusan = req.body.nama_jurusan;
  const email = req.body.email;
  const alamat = req.body.alamat;

  const newMahasiswa = new Mahasiswa({
    nama,
    nrp,
    nama_jurusan,
    email,
    alamat
  });

  newMahasiswa.save()
  .then(() => res.json('Mahasiswa added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Mahasiswa.findById(req.params.id)
    .then(mahasiswa => res.json(mahasiswa))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
  Mahasiswa.findByIdAndDelete(req.params.id)
    .then(() => res.json('Mahasiswa deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
  Mahasiswa.findById(req.params.id)
    .then(mahasiswa => {
      mahasiswa.nama = req.body.nama;
      mahasiswa.nrp = req.body.nrp;
      mahasiswa.nama_jurusan = req.body.nama_jurusan;
      mahasiswa.email = req.body.email;
      mahasiswa.alamat = req.body.alamat;

      mahasiswa.save()
        .then(() => res.json('Mahasiswa updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;