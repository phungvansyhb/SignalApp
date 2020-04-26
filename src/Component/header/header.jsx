import React, {Component} from 'react';
import './header.style.css'
class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-light navbar-expand-md fixed-top bg-light text-right" data-aos="fade"
                     data-aos-duration={200} style={{padding: '16px'}}>
                    <div className="container"><a className="navbar-brand" href=" ">Signi<strong>App</strong></a>
                        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1"><span
                            className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"/></button>
                        <div className="collapse navbar-collapse text-capitalize" id="navcol-1">
                            <ul className="nav navbar-nav ml-auto">
                                <li className="nav-item" role="presentation"><a className="nav-link active" href="#guide">Hướng
                                    dẫn</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link active" href="#fix">góp
                                    ý</a></li>
                                <li className="nav-item" role="presentation"><a className="nav-link active" href="#author">tác
                                    giả</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;