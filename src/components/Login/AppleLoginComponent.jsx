import React, { useEffect, useState } from 'react';
import AppleLogin from 'react-apple-login';

const AppleLoginComponent = () => {
  const [authorizationCode, setAuthorizationCode] = useState('');
  const [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    const initializeAppleSignIn = () => {
        window.AppleID.auth.init({
            clientId: '[CLIENT_ID]',
            scope: '[SCOPES]',
            redirectURI: '[REDIRECT_URI]',
            state: '[STATE]',
            nonce: '[NONCE]',
            usePopup: true
        });
    };

    // Initialize Apple Sign In when component mounts
    initializeAppleSignIn();

    // Cleanup function to remove event listeners or perform other cleanup
    return () => {
        // You can add cleanup code here if needed
    };
}, []); 
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const code = urlParams.get('code');
  //   console.log(code);
  //   if (code) {
  //     setAuthorizationCode(code);
  //     const fetchData = async () => {
  //       if (code) {
  //         try {
  //           const userInfo = await fetchUserInfo(code);
  //           setUserDetails(userInfo);
  //           sendToApi(userInfo);
  //         } catch (error) {
  //           console.error('Error fetching user details:', error);
  //         }
  //       }
  //     };
  //     if(code!=null){
  //       fetchData();
  //     }
  //   }
  // }, []);
  const fetchUserInfo = async (code) => {
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


  const sendToApi = async (userInfo) => {
    try {
      const response = await fetch('https://api.linnmyanmar.com.mm/dev/auth/customers/apple', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          authorizationCode: authorizationCode,
          fullName: userInfo.name,
          email: userInfo.email,
          user: userInfo.sub,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send data to API');
      }

      console.log('Data sent to API successfully');
    } catch (error) {
      console.error('Error sending data to API:', error);
    }
  };

  return (
    // <AppleLogin
    //   clientId="com.mm.chanlinnmyanmar"
    //   redirectURI="https://linn-myanmar-ecommerce.vercel.app/login"
    //   //callback={(response) => setAuthorizationCode(response.authorization.code)}
    //   scope='name'
    // />
    <div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
  );
};

export default AppleLoginComponent;
