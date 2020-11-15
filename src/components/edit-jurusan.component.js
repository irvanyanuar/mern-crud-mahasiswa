import React, { Component } from 'react';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

export default class EditJurusan extends Component {
  constructor(props) {
    super(props);

    this.onChangeNamaJurusan = this.onChangeNamaJurusan.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      nama_jurusan: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/jurusan/' + this.props.match.params.id)
      .then(response => {
        this.setState({
          nama_jurusan: response.data.nama_jurusan,
        })
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  onChangeNamaJurusan(e) {
    this.setState({
      nama_jurusan: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const jurusan = {
      nama_jurusan: this.state.nama_jurusan
    };

    console.log(jurusan);

    axios.post('http://localhost:5000/jurusan/update/' + this.props.match.params.id, jurusan)
      .then(res => console.log(res.data));

    this.setState({
      nama_jurusan: ''
    })

    window.location = '/jurusan';
  }

  render() {
    return (
      <div>
        <h3 className="alert alert-secondary">Edit Jurusan</h3>
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
            <input type="submit" value="Update Jurusan" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}