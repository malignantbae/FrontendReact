import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';

class Navbar extends React.Component {
    render(){
        return <div className="Navbar">
            <div className="container-fluid"></div>
            <a className="Navbar__brand" href="/">
            <img className="Navbar__logo" src={logo} alt="Logo"/>
                <span className="font-weight-light">Platzi</span>
                <span className="font-weight-bold">Conf</span>
            </a>
        </div>
    }
}
export default Navbar;