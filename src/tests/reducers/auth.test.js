
import AuthReducer from '../../reducers/auth'
test('auth reducer login', ()=>{
    const val='111';
    const result =AuthReducer(undefined,{
        type:'LOGIN',
        uid:val
    });
    expect(result.uid).toBe(val);
  });

  test('auth reducer logout', ()=>{
    const result =AuthReducer(undefined,{
        type:'LOGOUT'
    });
    expect(result).toEqual({});
  });