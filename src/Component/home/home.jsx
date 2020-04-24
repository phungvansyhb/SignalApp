import React, {Component} from 'react';
import './home.style.css'
class Home extends Component {
    render() {
        return (

            <div className="home-intro">
                <div className="jumbotron shadow-lg">

                    <h1 className="mb-5">Welcome to my signal app</h1>
                    <p><a className="btn btn-warning go-btn" href="#caculator" role="button">Let's Go</a></p>
                </div>
            </div>
        );
    }
}

export default Home;