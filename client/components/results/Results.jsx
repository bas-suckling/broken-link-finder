import React from 'react'
import LinksList from '../links-list/LinksList'

class Results extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                {(this.props.baseUrl ?
                    (<div>
                        <h3>Links found at {this.props.baseUrl}</h3>
                        {(this.props.links) ?
                            <LinksList links={this.props.links} /> :
                            <p>No links found</p>
                        }
                    </div>)
                    : <h3></h3>
                )}
            </>
        )
    }
}
export default Results