import React from 'react';
import { shallow } from 'enzyme';
import Spinner from './Spinner.jsx';

it('expect to render Spinner component', () => {
  expect(shallow(<Spinner />)).toMatchSnapshot();
});
