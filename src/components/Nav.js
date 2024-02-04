import React from 'react'

import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark font-weight-bold text-white" style={{ background: "#195290", width: "100%" }}>
      <Link className="navbar-brand" to="/">
        <img src="mainlogo.png" width="100%" height="50" className="main_logo d-inline-block align-top" alt="" />

      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">

          <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="/Imagecompressor">Image Compressor <span className="sr-only">(current)</span></Link>
          </li>


          <li className="nav-item dropdown active">
            <div className="nav-link dropdown-toggle c-pointer" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Converter
            </div>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <Link className="dropdown-item" to="/imgtopdf">images to pdf</Link>
              <Link className="dropdown-item" to="/Imagetotext">Image to Text</Link>
              <Link className="dropdown-item" to="/changeimageformat">image converter</Link>
              <Link className="dropdown-item" to="/csvtojson">csv to json</Link>
              <Link className="dropdown-item" to="/Jsontocsv">json to csv</Link>
              <Link className="dropdown-item" to="/Pdftocsv">pdf to csv</Link>
              <Link className="dropdown-item" to="/mergepdf">Merge pdf</Link>
              <Link className="dropdown-item" to="/splitpdf">Split pdf</Link>
              <Link className="dropdown-item" to="/Passwordprotectpdffile">Password Protected PDF</Link>
              <Link className="dropdown-item" to="/Fileencrption">Make file with End to End encrypted</Link>
              <Link className="dropdown-item" to="/wordtopdf">word to pdf</Link>
              <Link className="dropdown-item" to="/pdftoword">pdf to word</Link>
            </div>
          </li>

          <li className="nav-item active">
            <Link className="nav-link" to="Features">Features</Link>
          </li>
        </ul>


      </div>
    </nav>

  )
}
