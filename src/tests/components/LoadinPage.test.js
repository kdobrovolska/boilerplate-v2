import React from 'react'
import {shallow} from 'enzyme'
import LoadingPage from '../../components/LoadingPage';

test('LoadingPage should be rendred properly',()=>{
    const wrapper= shallow(<LoadingPage/>);
    expect(wrapper).toMatchSnapshot();  
});