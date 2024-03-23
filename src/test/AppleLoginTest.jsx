import React, { useState } from 'react';
import AppleSignin from 'react-apple-signin-auth';
import axios from 'axios'; // Import axios for making HTTP requests
import {Typography} from '@mui/material'
//import .p8 file which is under src folder
const jwt = require('jsonwebtoken');

// Function to generate client_secret using id_token and private key
const generateClientSecret = async(idToken) => {
  return new Promise((resolve, reject) => {
  console.log("ID tokens",idToken);
  // Read the private key from the .p8 file
  const privateKeyResponse = `-----BEGIN PRIVATE KEY-----
  MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgegteDmkcoQGrDyy2
  18gZG34aqSSp6emCcFt/BXdckWqgCgYIKoZIzj0DAQehRANCAAQQC6iR6Oj6LBrz
  LgxeeyDLdc8KePt+/okcyFPDBeYZNqIHhAm84oqPpN7uiCvLGi6ikLUPiAPYK5d/
  beA5filA
  -----END PRIVATE KEY-----`
  console.log("Private key response"+ privateKeyResponse);  
  const privateKeyContent = privateKeyResponse;
  console.log("Private key content"+ privateKeyContent);
  // Decode the id_token to extract necessary information
  const decodedToken = jwt.decode(idToken);

  // Extract required information from the decoded token
  const clientId = 'com.mm.chanlinnmyanmar'; // Client ID
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
    keyid: 'Bh6H7rHVmb', // Replace with the key ID from your .p8 file
  });
  console.log(clientSecret)
  
  resolve(clientSecret);
})
};

const AppleLoginTest = ({ ...rest }) => {
  // Callback function to handle successful Apple Sign In
  const [clientSecret, setClientSecret] = useState(''); // State to hold the client secret

  const handleSuccess = async (response) => {
    try {
      // Generate client_secret using the id_token
      const generatedClientSecret = await generateClientSecret(response.authorization.id_token);
      setClientSecret(generatedClientSecret); // Set the client secret in state
      // Make the cURL request
      const curlResponse = await axios.post('https://appleid.apple.com/auth/token', {
        client_id: 'com.mm.chanlinnmyanmar',
        code: response.authorization.code,
        grant_type: 'authorization_code',
        client_secret: generatedClientSecret, // Pass the generated client secret
        redirect_uri: 'https://linn-myanmar-ecommerce.vercel.app/login',
      });

      console.log('cURL response:', curlResponse.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error);
    }
  };

  return (
    <>
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
      <Typography variant='body2'>Client Secret is : {clientSecret}</Typography>
    </>
  );
};


export default AppleLoginTest;
