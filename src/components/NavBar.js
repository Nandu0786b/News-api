import React from 'react'
import{
  Link
} from 'react-router-dom'

const NavBar=(props)=>{
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
        {props.apikey ? <Link className="navbar-brand " to="/home">NewsMonkey</Link>: (
          <Link className="navbar-brand " to="/">Set Api</Link>
      )}
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/business">Business</Link>: (
                  <span className="nav-link disabled">Business</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/entertainment">Entertainment</Link>: (
                  <span className="nav-link disabled">Entertainment</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/general">General</Link>: (
                  <span className="nav-link disabled">General</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/health">Health</Link>: (
                  <span className="nav-link disabled">Health</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/science">Science</Link>: (
                  <span className="nav-link disabled">Science</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/sports">Sports</Link>: (
                  <span className="nav-link disabled">Sports</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/technology">Technology</Link>: (
                  <span className="nav-link disabled">Technology</span>
                )}</li>
                <li className="nav-item">{props.apikey ? <Link className="nav-link" to="/">Reset Api Key</Link>: (
                  <span className="nav-link disabled"></span>
                )}</li>
            </ul>

            </div>
        </div>
        </nav>
      </div>
    )
  }

export default NavBar
