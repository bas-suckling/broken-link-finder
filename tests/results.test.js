import React from 'react'
import { mount, shallow } from 'enzyme'
import Results from '../client/components/results/Results'
import LinksList from '../client/components/links-list/LinksList'

test('Renders <LinksList/> with correct table information if there are props', () => {
	const defaultProps = (
        {
        baseUrl:'www.url.com',
        links :[
            {link: "www.example.com", status:200},
            {link: "www.example2.com", status:404}
	],})

	const wrapper = mount(<Results {... defaultProps}/>)
	expect(wrapper.text()).toContain('www.example.com',400)
})

test("Doesn't render <Linkslist/> if there are no links", () => {
    const defaultProps = (
        {
        baseUrl:'www.url.com',
        links: ''
    })

	const wrapper = shallow(<Results {... defaultProps}/>)
	expect(wrapper.text()).toContain('No links found')
})