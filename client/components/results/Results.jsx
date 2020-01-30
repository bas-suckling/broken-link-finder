import React from 'react'
import LinksList from '../links-table/LinksList'

class Results extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            links: []
        }   
    }

    render() {
        return (
            <>
            {(this.props.baseUrl ?
                (<div>
                    <h3>Links hosted at {this.props.baseUrl}</h3>
                    {(this.state.links.length = 0) ? 
                        <LinksList links = {this.state.links}/>:
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