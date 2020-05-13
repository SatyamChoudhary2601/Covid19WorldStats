import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Menu extends Component {
    render() {
        return (
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12" >
                <header>

                    <nav>
                        <a href="http://www.proartme.com/"><img src="https://scontent.fslv1-1.fna.fbcdn.net/v/t1.0-9/p960x960/31949981_1706619552764343_2677470865590845440_o.jpg?_nc_cat=108&_nc_sid=8024bb&_nc_ohc=3yOK91rt9fIAX9Hru7m&_nc_ht=scontent.fslv1-1.fna&_nc_tp=6&oh=d55845029ed3caeb44c0082294bd570d&oe=5EDF0283" /></a>
                        <ul className="nav-link">

                            <Link to="/" style={{color:'white'}}><li className="linkhover">Home</li></Link>
                            <Link to="/about" style={{color:'white'}}><li className="linkhover2">About Me</li></Link>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}
export default Menu;