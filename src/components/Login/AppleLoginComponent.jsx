import React from 'react';
import AppleLogin from 'react-apple-login';

const AppleLoginComponent = () => {
  return (
    <AppleLogin clientId="com.linnmyanmar.mobile.CustomerApp" redirectURI='https://linn-myanmar-ecommerce.vercel.app/login' />
  );
};

export default AppleLoginComponent;
