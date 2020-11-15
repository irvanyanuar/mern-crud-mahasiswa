import React, { Component } from 'react';
import axios from 'axios';

export default class CreateJurusan extends Component {

  constructor(props) {
    super(props);
    this.onChangeNamaJurusan = this.onChangeNamaJurusan.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      nama_jurusan: ''
    };
  }

  onChangeNamaJurusan(e) {
    this.setState({
      nama_jurusan: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const newJurusan = {
      nama_jurusan: this.state.nama_jurusan,
    };
    console.log(newJurusan);

    axios.post('http://localhost:5000/jurusan/add', newJurusan)
    .then(res => console.log(res.data));

    this.setState({
      nama_jurusan: ''
    });
    
    window.location = '/jurusan';
  }

  render() {
    return (
      <div>
        <h3 className="alert alert-secondary">Tambah Jurusan</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Nama Jurusan: </label>
            <input type="text"
              required
              className="form-control"
              value={this.state.nama_jurusan}
              onChange={this.onChangeNamaJurusan}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Jurusan" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}