import React from 'react';
import { Outlet} from 'react-router';


import Login from '../pages/auth/Login';
import Registration from '../pages/auth/Regstration';

const Authlayout = () => {
    
    return (
        <div className='bg-base-200 min-h-screen'>
          
       <Outlet>
    
      </Outlet>

           
        </div>
    );
};

export default Authlayout;