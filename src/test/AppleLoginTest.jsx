import React, { useEffect, useState } from 'react';

const AppleLoginTestPage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [authorizationCode, setAuthorizationCode] = useState('');

  useEffect(() => {
    // Parse authorization code from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    if (code) {
      setAuthorizationCode(code);
      fetchUserDetails(code);
    }
  }, []);

  const fetchUserDetails = async (code) => {
    try {
      const response = await fetchUserInfoFromApple(code);
      setUserDetails(response);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const fetchUserInfoFromApple = async (code) => {
    const userInfoEndpoint = 'https://appleid.apple.com/auth/user';
    const response = await fetch(userInfoEndpoint, {
      headers: {
        Authorization: `Bearer ${code}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user details from Apple');
    }

    return await response.json();
  };

  const sendToApi = async () => {
    try {
      const response = await fetch('https://api.linnmyanmar.com.mm/dev/auth/customers/apple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authorizationCode: authorizationCode,
          fullName: userDetails ? userDetails.name : '',
          email: userDetails ? userDetails.email : '',
          user: userDetails ? userDetails.sub : '',
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to API');
      }

      // Handle success
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  return (
    <div>
      {userDetails ? (
        <div>
          <p>Full Name: {userDetails.name}</p>
          <p>Email: {userDetails.email}</p>
          <p>User ID: {userDetails.sub}</p>
          <button onClick={sendToApi}>Send to API</button>
        </div>
      ) : (
        <p>Loading user details...</p>
      )}
    </div>
  );
};

export default AppleLoginTestPage;
