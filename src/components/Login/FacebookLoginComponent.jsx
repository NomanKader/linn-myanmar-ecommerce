import React, { useRef } from 'react';
import FacebookLogin from 'react-facebook-login';

export default function CustomFacebookLoginButton() {
  const facebookLoginButtonRef = useRef();

  const responseFacebook = (response) => {
    console.log(response);
    // Handle the Facebook login response as needed
  };

  return (
    <div>
      {/* Your custom button */}

      {/* The actual Facebook login button (hidden using inline style) */}
      <FacebookLogin
        ref={facebookLoginButtonRef}
        appId="1088597931155576"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook}
        containerStyle={{display:'flex',alignItems:'center'}} // Container style for the outer div
        buttonStyle={{
          width: '300px', // Set the desired width
          height: '50px', // Set the desired height
          fontSize: '15px', // Set the desired font size
          backgroundColor: '#1877F2', // Set any other styles you want to override
        }}
        icon="fa-facebook"
        textButton='Sign With Facebook'
      />
    </div>
  );
}
