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
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Url</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {    
                            this.props.links.map(function (element, i) {
                                return  <tr key={i}>
                                            <td><a href={element.link}>{element.link}</a></td>
                                            <td>{element.status}</td>
                                        </tr> 
                                }
                            )}
                        </tbody>
                    </table> :
                    <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>}
                </div>
            </>
        )
    }
}
export default LinksList