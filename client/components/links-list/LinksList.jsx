import React from 'react'

class LinksList extends React.Component {
    constructor(props) {
        super(props)
        //props is an array of objects with the format [{url: "www.example.com", status:"pending"}, {url: "www.example2.com", status:"pending"}]
    }

    render() {
        return (
            <>
                <div className="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Url address</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.links.map(function (status, url, i) {
                                return  <tr key={i}>
                                            <td>{url.value}</td>
                                            <td>{status.value}</td>
                                        </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default LinksList