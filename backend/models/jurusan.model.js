const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const jurusanSchema = new Schema({
  nama_jurusan: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

const Jurusan = mongoose.model('Jurusan', jurusanSchema);

module.exports = Jurusan;