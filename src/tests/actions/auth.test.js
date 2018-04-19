import thunk from 'redux-thunk';
import {login,logout} from '../../actions/auth'

test('should setup login action object', ()=>{
    const val='111';
    const action=login(val);
    expect(action).toEqual({
        type:'LOGIN',
        uid:val
    });
});

test('should setup logout action object', ()=>{
    const action=logout();
    expect(action).toEqual({
        type:'LOGOUT'
    });
});