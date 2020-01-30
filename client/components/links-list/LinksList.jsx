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
                                <th>Url</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                        {console.log('this is links', this.props.links)}
                            {    
                            this.props.links.map(function (element, i) {
                                return  <tr key={i}>
                                            <td>{element.url}</td>
                                            <td>{element.status}</td>
                                        </tr>
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}
export default LinksList