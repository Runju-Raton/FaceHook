import React from 'react';
import {useAuth} from "../hooks/useAuth.js";
import {Outlet,Navigate} from "react-router-dom";
import Header from "../components/Header.jsx";

const PrivateRoutes = () => {
    const {auth} = useAuth();
    return (
        <>
            {
                auth.user ? (
                    <main className="mx-auto max-w-[1020px] py-8">
                        <div className="container">
                            <Header></Header>
                            <Outlet></Outlet>
                        </div>
                    </main>
                ) : (
                    <Navigate to="/login"></Navigate>
                )
            }
        </>
    );
};

export default PrivateRoutes;
