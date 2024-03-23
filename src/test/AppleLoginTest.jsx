import AppleSignin from 'react-apple-signin-auth';

/** Apple Signin button */
const AppleLoginTest = ({ ...rest }) => (
  <AppleSignin
    /** Auth options passed to AppleID.auth.init() */
    authOptions={{
      clientId: 'com.mm.chanlinnmyanmar',
      scope: 'email name',
      redirectURI: 'https://linn-myanmar-ecommerce.vercel.app/login',
      state: '',
      nonce: 'nonce',
      usePopup: true,
    }}
    /** General props */
    uiType="dark"
    /** className */
    className="apple-auth-btn"
    /** Allows to change the button's children, eg: for changing the button text */
    buttonExtraChildren="Continue with Apple"
    /** Checkout README.md for further customization props. */
    /** Spread rest props if needed */
    {...rest}
    /** Callbacks */
    onSuccess={async (response) => {
      const authorizationCode = response.authorization.code;
      // Now make a request to your server to exchange authorizationCode for user info
      try {
        const userInfoResponse = await fetch('/fetch-user-info', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ authorizationCode }),
        });
        const userInfo = await userInfoResponse.json();
        console.log('User Info:', userInfo);
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    }}
    onFailure={(error) => console.log(error)}
    onError={(error) => console.error(error)}
  />
);

export default AppleLoginTest;
