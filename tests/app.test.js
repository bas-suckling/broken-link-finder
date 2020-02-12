import React from 'react'
import { mount } from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  const expected = 'Broken Link Finder'
  const wrapper = mount(<App />)
  expect(wrapper.text()).toContain(expected)
})

