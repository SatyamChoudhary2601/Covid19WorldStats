import React, { Component } from 'react';
import CountUp from 'react-countup';

class Summary extends Component {
    render() {
        const { summary, currentdate } = this.props;
        return (
            <div>
                <h2>COVID-19 Worldwide Stats</h2>

                <div className="row">

                    <div className="NewConfirmed">
                        <h4>New Confirmed</h4>
                        <h2>
                            <CountUp
                                start={0}
                                end={summary.NewConfirmed}
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
                                end={summary.TotalConfirmed}
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
                                end={summary.NewDeaths}
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
                                end={summary.TotalDeaths}
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
                                end={summary.NewRecovered}
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
                                end={summary.TotalRecovered}
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
export default Summary;