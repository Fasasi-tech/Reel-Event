import {createSlice} from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState= {
    // userInfo: typeof localStorage !=='undefined' && localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')): null
    userInfo: Cookies.get('userInfo') ? JSON.parse(Cookies.get('userInfo')) : null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setCredentials: (state, action)=> {
            // state.userInfo = action.payload;
            // if (typeof localStorage !== 'undefined'){
            //     localStorage.setItem('userInfo', JSON.stringify(action.payload))
            // }
            state.userInfo = action.payload;
            Cookies.set('userInfo', JSON.stringify(action.payload));
            
        },
        logout: (state, action) => {
            // state.userInfo = null;
            // if (typeof localStorage !== 'undefined'){
            //     localStorage.removeItem('userInfo')
            // }
            state.userInfo = null;
      Cookies.remove('userInfo');
          
        }
    }
})

export const {setCredentials, logout} = authSlice.actions;

export default authSlice.reducer;