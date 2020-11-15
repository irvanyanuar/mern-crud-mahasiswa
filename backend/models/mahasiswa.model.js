const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mahasiswaSchema = new Schema({
  nama: { type: String, required: true },
  nrp: { type: String, required: true },
  nama_jurusan: { type: String, required: true },
  email: { type: String, required:true },
  alamat: { type: String, required: true },
}, {
  timestamps: true,
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);

module.exports = Mahasiswa;