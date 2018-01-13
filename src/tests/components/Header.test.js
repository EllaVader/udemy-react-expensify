import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('should render Header correctly', () => {
  // shallow render of our component.  We now have access to the full Shallow Rendering API in enzyme (refer to docs)
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
