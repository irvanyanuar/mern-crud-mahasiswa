import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">MERN CRUD Mahasiswa</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/mahasiswa" className="nav-link">Mahasiswa</Link>
          </li>
          <li className="navbar-item">
          <Link to="/jurusan" className="nav-link">Jurusan</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}