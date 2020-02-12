import React from 'react'

class LinksList extends React.Component {
    constructor(props) {
        super(props)
        //props is an array of objects with the format [{url: "www.example.com", status:"pending"}, {url: "www.example2.com", status:"pending"}]
    }

    render() { 
        return (
            <>
                <div > {this.props.links.length > 0 ?
                    <div>
                        <table className="table animated fadeIn">
                            <thead>
                                <tr>
                                    <th>Url</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    this.props.links.map(function (element, i) {
                                        const linkColour = (status) => {
                                            if (status != 200) {
                                                return 'redStatus'
                                            }
                                        }
                                        return <tr key={i}>
                                            <td><a href={element.link}>{element.link}</a></td>
                                            <td className={`greenStatus ${linkColour(element.status)}`}>{element.status}</td>
                                        </tr>
                                    }
                                    )}
                            </tbody>
                        </table>
                    </div> :
                    <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>}
                </div>
            </>
        )
    }
}
export default LinksList