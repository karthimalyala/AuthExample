
import React from 'react';
import { useMsal } from "@azure/msal-react";
import { loginRequest } from './authConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { instance } = useMsal();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await instance.loginPopup(loginRequest);
            navigate('/');
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
