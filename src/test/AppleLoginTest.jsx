import React from 'react';
import AppleSignin from 'react-apple-signin-auth';
import axios from 'axios'; // Import axios for making HTTP requests
//import .p8 file which is under src folder
const jwt = require('jsonwebtoken');

// Function to generate client_secret using id_token and private key
const generateClientSecret = async(idToken) => {
  console.log("ID tokens",idToken);
  // Read the private key from the .p8 file
  const privateKeyResponse = await axios.get('https://api.jsonstorage.net/v1/json/1e9acf2e-bc83-4a44-adb1-3650c7100599/de614472-ca2d-4886-ba43-3196c828bfda'); // Adjust the endpoint URL as per your server setup
  console.log("Private key response"+ privateKeyResponse);  
  const privateKeyContent = privateKeyResponse.data;
  console.log("Private key content"+ privateKeyContent);
  // Decode the id_token to extract necessary information
  const decodedToken = jwt.decode(idToken);

  // Extract required information from the decoded token
  const clientId = decodedToken.aud; // Client ID
  const teamId = 'PXW93DGJ6Z'; // Your team ID

  // Create a JWT payload
  const currentTime = Math.floor(Date.now() / 1000);
  const jwtPayload = {
    iss: teamId,
    iat: currentTime,
    exp: currentTime + (60 * 5), // Expires in 5 minutes
    aud: 'https://appleid.apple.com',
    sub: clientId,
    nonce: decodedToken.nonce,
  };

  // Sign the JWT using the private key
  const clientSecret = jwt.sign(jwtPayload, privateKeyContent, {
    algorithm: 'ES256',
    header: {
      kid: 'Bh6H7rHVmb', // Replace with the key ID from your .p8 file
    },
  });

  return clientSecret;
};

const AppleLoginTest = ({ ...rest }) => {
  // Callback function to handle successful Apple Sign In
  const handleSuccess = async (response) => {
    try {
      // Generate client_secret using the id_token
      const clientSecret = generateClientSecret(response.authorization.id_token);
      console.log("Client secret"+clientSecret);
      // Make the cURL request
      const curlResponse = await axios.post('https://appleid.apple.com/auth/token', {
        client_id: 'com.mm.chanlinnmyanmar',
        code: response.authorization.code,
        grant_type: 'authorization_code',
        client_secret: clientSecret,
        redirect_uri: 'https://linn-myanmar-ecommerce.vercel.app/login',
      });

      console.log('cURL response:', curlResponse.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error);
    }
  };

  return (
    <AppleSignin
      authOptions={{
        clientId: 'com.mm.chanlinnmyanmar',
        scope: 'email name',
        redirectURI: 'https://linn-myanmar-ecommerce.vercel.app/login',
        state: '',
        nonce: 'nonce',
        usePopup: true,
      }}
      uiType="dark"
      className="apple-auth-btn"
      buttonExtraChildren="Continue with Apple"
      {...rest}
      onSuccess={handleSuccess} // Pass the custom success handler
      onFailure={(error) => console.log(error)}
      onError={(error) => console.error(error)}
    />
  );
};

export default AppleLoginTest;
