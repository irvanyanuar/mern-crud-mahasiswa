import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Jurusan = props => (
  <tr>
    <td>{props.jurusan.nama_jurusan} </td>
    <td><Link to={"/edit-jurusan/" + props.jurusan._id}><span className="badge badge-warning">edit</span></Link> |
    <a href="#" onClick={() => { if(window.confirm("Apakah anda yakin ingin menghapus Jurusan ini?")){props.deleteJurusan(props.jurusan._id)} }}><span className="badge badge-danger">delete</span></a>
    </td>
  </tr>
)


export default class MahasiswasList extends Component {
  constructor(props) {
    super(props);
    this.deleteJurusan = this.deleteJurusan.bind(this);
    this.state = { jurusans: [] };
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jurusan/')
      .then(response => {
        this.setState({ jurusans: response.data });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteJurusan(id) {
    axios.delete('http://localhost:5000/jurusan/' + id)
      .then(res => console.log(res.data));
    this.setState({
      jurusans: this.state.jurusans.filter(el => el._id !== id)
    })
  }

  mahasiswaList() {
    return this.state.jurusans.map(currentmahasiswa => {
      return <Jurusan jurusan={currentmahasiswa} deleteJurusan={this.deleteJurusan} key={currentmahasiswa._id} />;
    })
  }

  render() {
    return (

      <div>
        <h3 className="alert alert-info text-center">LIST JURUSAN</h3>
        <Link to={"/create-jurusan/"}>
          <button class="btn btn-primary btn-sm mt-2 mb-2">Tambah Jurusan</button>
        </Link>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nama Jurusan</th>
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