import * as fs from 'fs';
import React from 'react';
import jwt from 'jsonwebtoken';
import { Button } from '@mui/material';



export default function AppleLoginTestPage() {


  const generateClientSecret = () => {
    try {
      //reaed private key from file 
      // const privateKey = fs.readFileSync('./AuthKey_32C9B8T2BV.p8', 'utf8');
      const privateKey='-----BEGIN PRIVATE KEY----- MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgegteDmkcoQGrDyy2 18gZG34aqSSp6emCcFt/BXdckWqgCgYIKoZIzj0DAQehRANCAAQQC6iR6Oj6LBrz LgxeeyDLdc8KePt+/okcyFPDBeYZNqIHhAm84oqPpN7uiCvLGi6ikLUPiAPYK5d/ beA5filA -----END PRIVATE KEY-----'
      //const privateKey = `-----BEGIN PRIVATE KEY-----MIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgegteDmkcoQGrDyy218gZG34aqSSp6emCcFt/BXdckWqgCgYIKoZIzj0DAQehRANCAAQQC6iR6Oj6LBrzLgxeeyDLdc8KePt+/okcyFPDBeYZNqIHhAm84oqPpN7uiCvLGi6ikLUPiAPYK5d/beA5filA-----END PRIVATE KEY-----`;
      console.log('Private Key:', privateKey); // Log the private key
      const payload = { data: 'client secret data' };
      const token = jwt.sign(payload, privateKey, { algorithm: 'RS256' });
      console.log('Token:', token); // Log the generated token
      return token;
    } catch (error) {
      console.error('Error generating client secret:', error);
      return null;
    }
  };

  return (
    <Button onClick={() => generateClientSecret()} variant="contained">
      AppleLoginTestPage
    </Button>
  );
}
