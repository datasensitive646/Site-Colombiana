import React, {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import { Context } from '../context';

export default function Private({children}) {
   const {signed, loading} = useContext(Context);

   if(loading){
      return(
        <div></div>
      )
    }
  
    if(!signed){
      return  <Navigate to="/loginadm" />
    }

 return children;
}