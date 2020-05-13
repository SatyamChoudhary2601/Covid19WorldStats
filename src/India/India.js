import React, { Component } from 'react';
import CountUp from 'react-countup';


class India extends Component {
    render() {
        const { india, currentdate } = this.props;

        const India = india[76]
        console.log("INDIA", India)

        return (
            <div>
                <h2>CORONA Cases in India</h2>
                <div className="row">
                    <div className="NewConfirmed">
                        <h4>New Confirmed</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={India.NewConfirmed}
                                duration={2.5}
                                separator=","
                            />
                        </h2>

                        <h6 style={{ color: 'black' }}>Last Updated</h6>
                        <h5>{new Date(currentdate).toDateString()}</h5>
                    </div>
                    <div className="TotalConfirmed">
                        <h4>Total Confirmed</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={India.TotalConfirmed}
                                duration={2.5}
                                separator=","
                            />
                        </h2>
                        <h6 style={{ color: 'black' }}>Last Updated</h6>
                        <h5>{new Date(currentdate).toDateString()}</h5>
                    </div>
                    <div className="NewDeaths">
                        <h4>New Deaths</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={India.NewDeaths}
                                duration={2.5}
                                separator=","
                            />
                        </h2>
                        <h6 style={{ color: 'black' }}>Last Updated</h6>
                        <h5>{new Date(currentdate).toDateString()}</h5>
                    </div>
                    <div className="TotalDeaths">
                        <h4>Total Deaths</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={India.TotalDeaths}
                                duration={2.5}
                                separator=","
                            />
                        </h2>
                        <h6 style={{ color: 'black' }}>Last Updated</h6>
                        <h5>{new Date(currentdate).toDateString()}</h5>
                    </div>
                    <div className="NewRecovered">
                        <h4>New Recovered</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={India.NewRecovered}
                                duration={2.5}
                                separator=","
                            />
                        </h2>
                        <h6 style={{ color: 'black' }}>Last Updated</h6>
                        <h5>{new Date(currentdate).toDateString()}</h5>
                    </div>
                    <div className="TotalRecovered">
                        <h4>Total Recovered</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={India.TotalRecovered}
                                duration={2.5}
                                separator=","
                            />
                        </h2>
                        <h6 style={{ color: 'black' }}>Last Updated</h6>
                        <h5>{new Date(currentdate).toDateString()}</h5>
                    </div>
                </div>

            </div>
        )
    }
}

export default India;