import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './Header.css';
import logo from './../../../media/logo.png';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <div id="logo" title="My Flash Cards App" data-root="true">
                    <img src={logo} className="logo" alt="logo" />
                    <h1>Dog Breeds of the World</h1>
                </div>
                <nav>
                    <div id="hamburger" className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul className="nav-bar">
                        <li className="nav-item">
                            <Link to={`/breeds`}>Doglist</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/game'}>Enter Game</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}
