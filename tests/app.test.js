import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App /> renders and contains <LandingPage /> component', () => {
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain("<LandingPage />")
})

