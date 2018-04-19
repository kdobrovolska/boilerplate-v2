import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from 'react-router-dom';
import Header from '../components/Header.js';

export const PrivateRoute=({isAuthenticated, component:Component1, ...rest1})=>(
    <Route {...rest1} component={(props)=>{
        console.log('rest1');
        console.log(rest1);
        console.log('Component1='+Component1);
        alert('ppp'+'isAuthenticated='+isAuthenticated);
      return  isAuthenticated?(
            <div>
            <Header />
            <Component1 {...props} />
            </div>
        ) :(
            <Redirect to="/"/>
        )
    }
}/>
);
    



const mapStateToProps=(state)=>({
    isAuthenticated: !! state.auth.uid
});
  

export default connect (mapStateToProps)(PrivateRoute); 