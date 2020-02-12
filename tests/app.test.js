import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'

test('<App />', () => {
  //renders 1 LandingPage component
  const wrapper = shallow(<App />)
  expect(wrapper.text()).toContain("<LandingPage />")
})

