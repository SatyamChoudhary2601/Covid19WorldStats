import React, { Component } from 'react'
import axios from 'axios';
import Summary from './Summary';
import Countries from './Countries';
import India from './India/India'



class Details extends Component {
    state = {
        countries: [],
        global: [],
        currentDate: null,
        loading: true
    }

    async componentDidMount() {
        const res = await axios.get("https://api.covid19api.com/summary");
        this.setState({ countries: res.data.Countries })
        this.setState({ global: res.data.Global })
        this.setState({ currentDate: res.data.Date })
        this.setState({ loading: false })
        console.log(res);

    }
    render() {


        const newIndex = this.state.countries[76]
        console.log("detail index", newIndex)


        if (this.state.loading) {
            return <div><h2>Loading...</h2><br /><p>Not loaded yet??</p><br /><h2>Refresh the Page</h2> </div>
        }
        return (
            <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <meta name="google-site-verification" content="T7m6oQ4oSA2LztgQYQAsF1cxSM1bAX5hiWDDzsdHhWk" />
                <div style={{ marginTop: 20 }}>
                    <Summary
                        summary={this.state.global}
                        currentdate={this.state.currentDate}
                    />
                </div>
                <div>
                    <India
                        india={this.state.countries}
                        currentdate={this.state.currentDate}
                    />
                </div>
                <div>
                    <h2>CORONA cases All Around the World</h2>


                    <table>
                        <thead>
                            <tr>
                                <th>Countries</th>
                                <th>Total Confirmed</th>
                                <th>Total Deadth</th>
                                <th>Total Recovered</th>
                                <th>New Confirmed</th>
                                <th>New Deadth</th>
                                <th>New Recovered</th>
                            </tr>
                        </thead>




                        <tbody>

                            {this.state.countries.map(country => (
                                <Countries
                                    countries={country}
                                    key={country.CountryCode}
                                />

                            ))}

                        </tbody>

                    </table>
                </div>
            </div>
        )
    }
}
export default Details;