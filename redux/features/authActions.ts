'use client';
import { handlecookieset, getcookie, handlecookiedel } from "/lib/actions";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { toggleAuthenticatedFalse, toggleAuthenticatedTrue } from "./authSlice";


interface InputTypes {
    email?: string;
    first_name?: string;
    last_name?: string;
    password?: string;
    re_password?: string;
  
}


const baseURL = 'http://localhost:8000/account/'

export const handleverify = createAsyncThunk(
    'auth/verify',
    async (token : String, thunkAPI) => {
        try {
            const body = {"token" : token}
            if (token !== undefined) {
                try {
                    const response = await fetch(`${baseURL}verify/`
                        , {
                            method: "POST", headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(body)
                        }
                    )
                    const { dispatch } = thunkAPI
                    if (response.status === 200) {
                        await dispatch(handleUserData());
                        dispatch(toggleAuthenticatedTrue());
                    } else {
                        dispatch(toggleAuthenticatedFalse());
                    }
                  
                } catch (error : any) {
                    return thunkAPI.rejectWithValue(error.response.data)
                }
            }
            
        }
         catch (error : any) {
                    return thunkAPI.rejectWithValue(error.response.data)
                }
    }
)



export const handleUserData = createAsyncThunk(
    'auth/userdata',
    async (_, thunkAPI) => {
        try {
            const access = await getcookie('access');
            if (access !== undefined) {
                try {
                    const response = await fetch(`${baseURL}users/me/`
                        , {
                            method: "GET", headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                                Authorization: 'JWT ' + access
                            }
                        }
                    );
                    const data = response.json();
                    return data
             
            
                } catch (error: any) {
                    return thunkAPI.rejectWithValue(error.response.data)
                }
            }
            } catch (error: any) {
             return thunkAPI.rejectWithValue(error.response.data)
        }
    })



export const handleLogin = createAsyncThunk(
    'auth/login',
    async ({ email, password }: InputTypes, thunkAPI) => {
      
        const body = JSON.stringify({ email, password });
        try {
            const loginResponse = await fetch(`${baseURL}login/`
                , {
                    method: "POST", headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                }, body}
            );
            const data = await loginResponse.json()
           if (loginResponse.status === 200) {
               handlecookieset(data.access, data.refresh)
               const { dispatch } = thunkAPI
               await dispatch(handleUserData())
               return data
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const handleRegister = createAsyncThunk(
    'auth/register',
    async ({ email, first_name, last_name, password, re_password }: InputTypes, thunkAPI) => {
        const body = JSON.stringify({ email, first_name, last_name, password, re_password });
        try {
            const registerResponse = await fetch(`${baseURL}users/`,
                {
                    method: 'POST',
                    headers: {
                             Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body,
                }
            )
            const data = registerResponse.json()
            if (registerResponse.status === 201) {
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);





