import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import MahasiswasList from "./components/mahasiswas-list.component";
import EditMahasiswa from "./components/edit-mahasiswa.component";
import CreateMahasiswa from "./components/create-mahasiswa.component";
import JurusansList from "./components/jurusans-list.component";
import EditJurusan from "./components/edit-jurusan.component";
import CreateJurusan from "./components/create-jurusan.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={MahasiswasList} />
        <Route path="/mahasiswa" exact component={MahasiswasList} />
        <Route path="/edit/:id" component={EditMahasiswa} />
        <Route path="/create" component={CreateMahasiswa} />
        <Route path="/jurusan" component={JurusansList} />
        <Route path="/edit-jurusan/:id" component={EditJurusan} />
        <Route path="/create-jurusan" component={CreateJurusan} />
      </div>
    </Router>
  );
}

export default App;