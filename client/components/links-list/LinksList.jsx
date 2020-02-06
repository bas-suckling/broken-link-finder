import React from 'react'

class LinksList extends React.Component {
    constructor(props) {
        super(props)
        //props is an array of objects with the format [{url: "www.example.com", status:"pending"}, {url: "www.example2.com", status:"pending"}]
    }

    render() {
        return (
            <>
                <div >
            
                    {    
                    this.props.links.map(function (element, i) {
                        console.log(element)
                        return  <ul key={i}>
                                    <li>{element.link}</li>
                                    <li>{element.status}</li>
                                </ul>
                                
                        }
                    )}
                </div>
            </>
        )
    }
}
export default LinksList