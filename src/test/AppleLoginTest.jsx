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
   onSuccess={(response) => console.log(response)}
    onFailure={(error) => console.log(error)}
    onError={(error) => console.error(error)}
  />
);

export default AppleLoginTest;
