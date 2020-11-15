import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Mahasiswa = props => (
  <tr>
    <td>{props.mahasiswa.nama}</td>
    <td>{props.mahasiswa.nrp}</td>
    <td>{props.mahasiswa.nama_jurusan}</td>
    <td>{props.mahasiswa.email}</td>
    <td>{props.mahasiswa.alamat}</td>
    <td>
      <Link to={"/edit/" + props.mahasiswa._id}><span className="badge badge-warning">Edit</span></Link> |
      <a href="#" onClick={() => { if(window.confirm("Apakah anda yakin ingin menghapus Mahasiswa ini?")){props.deleteMahasiswa(props.mahasiswa._id)} }}><span className="badge badge-danger">Delete</span></a>
    </td>
  </tr>
)


export default class MahasiswasList extends Component {
  constructor(props) {
    super(props);
    this.deleteMahasiswa = this.deleteMahasiswa.bind(this);
    this.state = { mahasiswas: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/mahasiswa/')
      .then(response => {
        this.setState({ mahasiswas: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteMahasiswa(id) {
    axios.delete('http://localhost:5000/mahasiswa/' + id)
      .then(res => console.log(res.data));
    this.setState({
      mahasiswas: this.state.mahasiswas.filter(el => el._id !== id)
    })
  }

  mahasiswaList() {
    return this.state.mahasiswas.map(currentmahasiswa => {
      return <Mahasiswa mahasiswa={currentmahasiswa} deleteMahasiswa={this.deleteMahasiswa} key={currentmahasiswa._id} />;
    })
  }

  render() {
    return (
      <div>
        <h3 className="alert alert-info text-center">LIST MAHASISWA</h3>
        <Link to={"/create/"}>
          <button class="btn btn-primary btn-sm mt-2 mb-2">Tambah Mahasiswa</button>
        </Link>

        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nama</th>
              <th>NRP</th>
              <th>Jurusan</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.mahasiswaList()}
          </tbody>
        </table>
      </div>
    )
  }
}