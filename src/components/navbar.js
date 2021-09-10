import React from 'react';
import './navbar.css'
export default function Navbar(props){
    return (
        <section>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary" id="navbaar">
        <a className="navbar-brand" href="/">
          {/* <!-- <img
            src="/docs/4.6/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          /> --> */}
          TextUtil
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/"
                >Home <span className="sr-only">(current)</span></a
              >
            </li>

          </ul>
            <div className="custom-control custom-switch d-flex">

                <div className="theme mx-2 bg-primary rounded" onClick={()=>{props.changeMode('primary')}}></div>
                <div className="theme mx-2 bg-info rounded" onClick={()=>{props.changeMode('info')}}></div>
                <div className="theme mx-2 bg-danger rounded" onClick={()=>{props.changeMode('danger')}}></div>
                <div className="theme mx-2 bg-warning rounded" onClick={()=>{props.changeMode('warning')}}></div>
                <div className="theme mx-2 bg-dark rounded" onClick={()=>{props.changeMode('dark')}}></div>
                <div className="theme mx-2 bg-light rounded" onClick={()=>{props.changeMode('light')}}></div>
            </div>
        </div>


      </nav>
    </section>
    );
    };