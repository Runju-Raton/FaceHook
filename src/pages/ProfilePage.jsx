import React, {useEffect, useState} from 'react';
import {useAuth} from "../hooks/useAuth.js";
import useAxios from "../hooks/useAxios.js";

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loading,setLoading] = useState();
    const [error, setError] = useState();
    const {api} = useAxios();
    const {auth} = useAuth();
    useAxios();

    useEffect(()=>{
        const fetchProfile = async ()=> {
            try{
                setLoading(true);
                const response = await api.get(`${import.meta.env.VITE_SERVER_BASE_URL}/profile/${auth?.user?.id}`)
                setUser(response.data.user);
                setPosts(response.data.posts);
            }catch (error){
                console.error(error)
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        fetchProfile();

    },[]);

    if(loading){
        return <div> Fetching your profile data...</div>
    }

    return (
        <>
            <h2>Welcome,  {user.firstName}</h2>
            <p>You have {posts.length} posts.</p>
        </>
    );
};

export default ProfilePage;
