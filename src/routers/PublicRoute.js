import React from 'react';
import {connect} from 'react-redux';
import {Route,Redirect} from 'react-router-dom';
import Header from '../components/Header'


export const PublicRoute =({isAuthenticated,component:Component2, ...rest2})=>( 
     <Route {...rest2} component={(props)=>{
          return (!isAuthenticated)? ( 
              <Component2 {...props}/>
         ):(
            <Redirect to='/dashboard'/>
        );
      }} />

    );


const mapStateToProps=(state)=>{
   return {
        isAuthenticated: !!state.auth.uid
    };
}

export default connect(mapStateToProps)(PublicRoute); 