import React from 'react'
import LinksList from '../links-list/LinksList'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: [
                { url: "www.example.com", status: "404" },
                { url: "www.test.com", status: "200" }
            ]
        }
    }

    render() {
        return (
            <>
                {(this.props.baseUrl ?
                    (<div>
                        <h3>Links hosted at {this.props.baseUrl}</h3>
                        {(this.state.links) ?
                            <LinksList links={this.state.links} /> :
                            <p>No links found</p>
                        }
                    </div>)
                    : <h3>No Url Specified</h3>
                )}
            </>
        )
    }
}
export default Results