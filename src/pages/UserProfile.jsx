import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/authContext';
import axios from 'axios';
import backgroundImage from '../img/userProfile.png';

const UserProfile = () => {
  const { currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);
  const userId = currentUser.id;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`/user/${userId}`); 
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setLoading(false); 
      }
    };

    fetchUserData();
  }, [userId]);

  return (
    <div className="profile" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {loading ? (
        <p>Loading...</p>
      ) : userData ? ( 
        <>
           <h2>Hello {userData.username}</h2>
          <div className="user-container">
            <div className="user-info">
              <p>Name: {userData.username}</p>
              <p>Email: {userData.email}</p>
            </div>
            <div className='img'>
              <img src={`../upload/${currentUser.img}`} alt=''/>
            </div>
          </div>
        </>
      ) : (
        <p>No user data available</p>
      )}
    </div>
  );
};

export default UserProfile;
