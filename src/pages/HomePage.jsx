import React from 'react';
import {useAuth} from "../hooks/useAuth.js";
import {Link} from "react-router-dom";

const HomePage = () => {
    const {auth} = useAuth();
    console.log(auth);
    return (
        <>
            <h2>Home Page</h2>
            <Link to="/me">Go to profile</Link>
        </>
    );
};

export default HomePage;
