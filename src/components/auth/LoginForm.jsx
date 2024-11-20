import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Field from "../common/Field.jsx";
import {useForm} from "react-hook-form";
import {useAuth} from "../../hooks/useAuth.js";
import axios from "axios";
import error from "eslint-plugin-react/lib/util/error.js";

const LoginForm = () => {
    const navigate = useNavigate();
    const {setAuth} = useAuth();
    const {register, handleSubmit, formState: {errors}, setError} = useForm();
    const submitForm = async (formData) => {
        const user = {...formData}
        // Make an API call
        try{
            const response = await axios.post(`${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`, formData);
            if(response.status===200){
                const {token, user} = response.data;
                if(token){
                    const authToken = token.token;
                    const refreshToken = token.refreshToken;

                    console.log(`Login time auth token: ${authToken}`);

                    setAuth({user, authToken, refreshToken})
                    navigate('/');
                }
            }
        } catch (error) {
            console.error(error);
            setError("root.random",{
                type: "random",
                message: `User with email ${formData.email} is not found.`
            })
        }
        // will return token and logged in user information
    }
    return (
        <div className="card">
            <form onSubmit={handleSubmit(submitForm)} className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
                {/*  email */}
                {/*<div className="form-control">*/}
                {/*    <label className="auth-label" htmlFor="email">Email</label>*/}
                {/*    <input*/}
                {/*        className="auth-input"*/}
                {/*        name="email"*/}
                {/*        type="email"*/}
                {/*        id="email"*/}
                {/*    />*/}
                {/*</div>*/}

                <Field label="Email" error={errors.email}>
                    <input type="email" name="email" id="email" {...register("email",{
                        required: "Email is required."
                    })} className={`auth-input ${errors.email ? "border-red-500" : "border-gray-200"}`}/>
                </Field>

                {/*  password */}
                {/*<div className="form-control">*/}
                {/*    <label className="auth-label" htmlFor="email">Password</label>*/}
                {/*    <input*/}
                {/*        className="auth-input"*/}
                {/*        name="password"*/}
                {/*        type="password"*/}
                {/*        id="password"*/}
                {/*    />*/}
                {/*</div>*/}

                <Field label="Password" error={errors.password}>
                    <input type="password" name="password" id="password" {...register("password",{
                        required: "Password is required.",
                        minLength : {
                            value: 8,
                            message: "Your password must be at least 8 characters."
                        }
                    })} className={`auth-input ${errors.password ? "border-red-500" : "border-gray-200"}`}/>
                </Field>
                {/* global error message */}
                <p>{error?.root?.random?.message}</p>
                {/*  Submit */}
                <Field>
                    <button
                        className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                        type="submit"
                    >
                        Login
                    </button>
                </Field>
            </form>
            <div className="py-4 lg:py-6">
                <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                    Don’t have account?
                    <Link
                        className="text-white transition-all hover:text-lwsGreen hover:underline mx-2"
                        to="/registration"
                    > Create New</Link
                    >
                </p>
            </div>
        </div>
    );
};

export default LoginForm;
