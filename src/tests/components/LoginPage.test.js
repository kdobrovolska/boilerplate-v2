import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage.js'

test('should render LoginPage correctly', ()=>{
    const wrapper=shallow(<LoginPage startLogin={()=>{}}/>);
    expect(wrapper).toMatchSnapshot();
});
test('should check button click', ()=>{
    const startLogin=jest.fn();
    const wrapper= shallow(<LoginPage startLogin={startLogin}/>);
    wrapper.find('button').at(0).simulate('click');
    expect(startLogin).toHaveBeenCalled();
     
  });