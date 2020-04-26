import React, {Component} from 'react';
import './footer.style.css'
class Footer extends Component {
    render() {
        return (
            <div className="footer-2" id="author">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6">
                            <p className="ft-text" style={{marginTop: '5%', marginBottom: '3%'}}>©View source code on
                                github</p>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6">
                            <p className="ft-text" style={{marginTop: '5%', marginBottom: '3%'}}><a
                                href="github.com">github.com/phungvansyhb/SigniApp</a></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;