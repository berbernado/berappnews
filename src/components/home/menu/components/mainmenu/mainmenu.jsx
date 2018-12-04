import React, { Component } from "react";
import { Link } from "react-router-dom";

class MainMenu extends Component {
    render() {
        return (
            <div className="main-menu float-left d-none d-md-block">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="active has-dropdown"><a href="index.html">Ecc Sport</a>
                            <ul className="sub-menu">
                                <li><Link to="/">Sepak Bola</Link></li>
                                <li><Link to="/">Basket</Link></li>
                                <li><Link to="/">MotoGP</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">ECC Net</Link></li>
                        <li><Link to="/">ECC Health</Link></li>
                        <li><Link to="/">ECC Travel</Link></li>
                        <li><Link to="/">ECC Finance</Link></li>
                    </ul>                
                </nav>
            </div>
            
        );
    }
}


export default MainMenu;