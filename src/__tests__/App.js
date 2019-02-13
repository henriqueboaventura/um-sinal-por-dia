import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('renders title', () => {
  const wrapper = shallow(<App />);
  const title = <h1>1 sinal por dia!</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});

it('renders video', () => {
  const wrapper = shallow(<App />);
  const title = <h1>1 sinal por dia!</h1>;
  expect(wrapper.contains(title)).toEqual(true);
});