import React from 'react'
import { shallow, mount } from 'enzyme'
import LinksList from '../client/components/links-list/LinksList'

const defaultProps = ({links :[
	{link: "www.example.com", status:200},
	{link: "www.example2.com", status:404}
]})

test('Renders the table with status codes', () => {
	const wrapper = shallow(<LinksList {... defaultProps}/>)
	expect(wrapper.text()).toContain(200, 404)
})

test('Renders the table with the links', () => {
	const wrapper = shallow(<LinksList {... defaultProps}/>)
	expect(wrapper.text()).toContain('www.example.com', 'www.example2.com')
})

test('element.status has class "greenStatus" if status == 200', () => {
	const props = ({links :[
		{link: "www.example.com", status:200}
	]})
	const wrapper = mount(<LinksList {... props}/>)
	expect(wrapper.someWhere(n => n.hasClass('greenStatus')))
})

test('element.status has class "redStatus" if status == 200', () => {
	const props = ({links :[
		{link: "www.example.com", status:404}
	]})
	const wrapper = mount(<LinksList {... props}/>)
	expect(wrapper.someWhere(n => n.hasClass('redStatus')))
})