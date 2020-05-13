import React, { Component } from 'react'
import './about.css';


class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="body">

                            <h1>
                                <span>S</span>
                                <span>a</span>
                                <span>t</span>
                                <span>y</span>
                                <span>a</span>
                                <span>m</span>
                            </h1>

                        </div>
                        <br />
                        <div style={{ textAlign: 'center' }}>
                            <a href="https://www.proartme.com"><img src="proart.png" className="imagelink" /></a> <br />

                            <div><p><strong>Hello!</strong></p></div>
                            <div><p>My name is Satyam, I am a Data Scientist as well as a Software Web Developer. Covid-19 stats has been developed my me. You can contact me on the following social medias mentioned below</p></div>
                            <h2 style={{ color: 'red' }}>Instagram: <a href="https://www.instagram.com/satyam_mj">Satyam MJ</a> </h2>
                            <h2 style={{ color: 'red' }}>Website: <a href="https://www.proartme.com">Proart by Satyam</a></h2>
                            <h2 style={{ color: 'red' }}>Facebook: <a href="https://www.fb.com/satyam.mj.9">Satyam MJ</a></h2>
                            <h2 style={{ color: 'red' }}>Twitter: <a href="https://twitter.com/ProartSatyam">Proart - Satyam MJ</a></h2>
                            <h2 style={{ color: 'red' }}>Reddit: <a href="https://www.reddit.com/user/proartme">Proart - Satyam MJ</a></h2>
                            <h2 style={{ color: 'red' }}>Pinterest: <a href="https://in.pinterest.com/proartSatyam/">Proart - Satyam MJ</a></h2>
                            <h2 style={{ color: 'red' }}>Medium: <a href="https://in.linkedin.com/in/satyam-mj-89a879134">Proart - Satyam MJ</a></h2>
                            <h2 style={{ color: 'red' }}>YouTube: <a href="https://www.youtube.com/c/borntodance">Born to Dance</a></h2>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
export default About;