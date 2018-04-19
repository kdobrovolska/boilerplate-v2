import React from 'react';
import { shallow } from 'enzyme';
//import toJSON from 'enzyme-to-json';
//import ReactShallowRenderer from 'react-test-renderer/shallow';
import {Header} from '../../components/Header';

test('should render Header correctly', ()=>{
   const wrapper= shallow(<Header startLogout={()=>{}}/>);
   expect(wrapper).toMatchSnapshot();
    
});


test('should check button click', ()=>{
  const startLogout=jest.fn();
  const wrapper= shallow(<Header startLogout={startLogout}/>);
  wrapper.find('button').at(0).simulate('click');
  expect(startLogout).toHaveBeenCalled();
   
});