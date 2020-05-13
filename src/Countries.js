import React, { Component } from 'react';


class Countries extends Component {
    render() {
        const { countries } = this.props;


        return (




            <tr>
                <td>{countries.Country} code {countries.CountryCode} </td>
                <td>{countries.TotalConfirmed}</td>
                <td>{countries.TotalDeaths}</td>
                <td>{countries.TotalRecovered}</td>
                <td>{countries.NewConfirmed}</td>
                <td>{countries.NewDeaths}</td>
                <td>{countries.NewRecovered}</td>
            </tr>

        )
    }
}
export default Countries;