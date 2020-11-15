import React, { Component } from 'react';
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

export default class CreateMahasiswa extends Component {
  constructor(props) {
    super(props);

    this.onChangeNama = this.onChangeNama.bind(this);
    this.onChangeNRP = this.onChangeNRP.bind(this);
    this.onChangeNamaJurusan = this.onChangeNamaJurusan.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeAlamat = this.onChangeAlamat.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      nama: '',
      nrp: '',
      nama_jurusan: '',
      email: '',
      alamat: '',
      jurusans: []

    }
    this.componentDidMount();
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jurusan/')
  .then(response => {
    if (response.data.length > 0) {
      this.setState({ 
        jurusans: response.data.map(jurusans => jurusans.nama_jurusan),
        nama_jurusan: response.data[0].nama_jurusan
      });
    }
  })
  .catch((error) => {
    console.log(error);
  })
  }

  onChangeNama(e) {
    this.setState({
      nama: e.target.value
    });
  }

  onChangeNRP(e) {
    this.setState({
      nrp: e.target.value
    });
  }

  onChangeNamaJurusan(e) {
    this.setState({
      nama_jurusan: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangeAlamat(e) {
    this.setState({
      alamat: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const mahasiswa = {
      nama: this.state.nama,
      nrp: this.state.nrp,
      nama_jurusan: this.state.nama_jurusan,
      email: this.state.email,
      alamat: this.state.alamat,
    };

    console.log(mahasiswa);

    axios.post('http://localhost:5000/mahasiswa/add', mahasiswa)
    .then(res => console.log(res.data));

    this.setState({
      nama: '',
      nrp: '',
      nama_jurusan: '',
      email: '',
      alamat: '',
    });

    window.location = '/';
  }

  render() {
    return (
      <div>
        <h3 className="alert alert-secondary">Tambah Mahasiswa</h3>
        <form onSubmit={this.onSubmit}>

          <div className="form-group">
            <label>Nama: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.nama}
              onChange={this.onChangeNama}
            />
          </div>

          <div className="form-group">
            <label>NRP: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.nrp}
              onChange={this.onChangeNRP}
            />
          </div>

          <div className="form-group">
            <label>Jurusan: </label>
            <select ref="userInput"
              required
              className="form-control"
              value={this.state.nama_jurusan}
              onChange={this.onChangeNamaJurusan}>
              {
                this.state.jurusans.map(function (jurusan) {
                  return <option
                    key={jurusan}
                    value={jurusan}>{jurusan}
                  </option>;
                })
              }
            </select>
          </div>

          <div className="form-group">
            <label>Email: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>

          <div className="form-group">
            <label>Alamat: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.almat}
              onChange={this.onChangeAlamat}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Tambah" className="btn btn-primary" />
          </div>
          
        </form>
      </div>
    )
  }
}