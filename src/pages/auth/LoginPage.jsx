import React, { useEffect, useState } from "react";
import {
  Avatar,
  Paper,
  Box,
  TextField,
  InputAdornment,
  Button,
  ThemeProvider,
  IconButton,
  Typography,
  Grid,
} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { Phone, Visibility, VisibilityOff } from "@mui/icons-material";
import logoIcon from "../../assets/linnmyanmar-logo.png";
import theme from "../../theme";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";
import AppleLoginComponent from '../../components/Login/AppleLoginComponent';
import GetTokenAPI from '../../api/token/GetTokenController';
import _GetDeviceID from '../../service/GetDeviceID';
import _GetDeviceOS from '../../service/GetDeviceOS';

export default function LoginPage({history}) {
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [profileData, setProfileData] = useState();
  useEffect(() => {
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "332664396318-09ie334fp6knohcelab5duiufnela5g8.apps.googleusercontent.com", // Replace with your Google API client ID
      });
    });
  }, []);
  useEffect(() => {
    // Load Apple Sign In script
    const script = document.createElement('script');
    script.src = 'https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  const handleGoogleLogin=()=>{
    window.gapi.load("auth2", () => {
      window.gapi.auth2.init({
        client_id:
          "332664396318-09ie334fp6knohcelab5duiufnela5g8.apps.googleusercontent.com", // Replace with your Google API client ID
      });
    });
  }
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const responseGoogle = (response) => {    
    console.log("Response",response);
    console.log("Profile Obj",response.profileObj);
    setProfileData(response.profileObj);
    setIsLogin(true);
    sessionStorage.setItem('Token',response?.Tc?.id_token);    
    sessionStorage.setItem('ProfileIcon',response?.profileObj?.imageUrl)
    sessionStorage.setItem('ProfileUsername',response?.profileObj?.name)
    sessionStorage.setItem('ProfileUsername',response?.profileObj?.name)
    //Get Token 
    const deviceID=_GetDeviceID();
    const deviceOS=_GetDeviceOS();
    const postBody={
      "deviceId":deviceID,
      "deviceOS":deviceOS,
      "accessToken":sessionStorage.getItem('Token')
    }
    GetTokenAPI(postBody); 
  };

  return (
    <ThemeProvider theme={theme}>
      <ShowAllAppBarComponent history={history}/>
      <div
        style={{
          display: "flex",
          flex: 1,
          height: "100vh",
          justifyContent: "center",
          backgroundImage:
            "url('https://img.freepik.com/free-vector/paper-style-wavy-red-background_52683-74121.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703894400&semt=ais')",
          backgroundSize: "cover",
        }}
      >
        <Paper
          elevation={3}
          style={{
            width: "80%",
            height: "80%",
            padding: "20px",
            display: "flex",
            marginTop: 40,
            flexDirection: "column",
            justifyContent: "center",
            borderRadius: 10,
          }}
        >
          {isLogin == false ? (
            <>
              <Avatar
                sizes="large"
                sx={{
                  width: { lg: "180px", xs: "130px" },
                  height: { lg: "150px", xs: "130px" },
                  alignSelf: "center",
                }}
                src={logoIcon}
                alt="linmyanmarlogo"
              />

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Box sx={{ display: "flex", flex: 1, mb:3 }}>
                  <TextField
                    id="phoneNumber"
                    label="Enter Phone Number"
                    type="number"
                    required
                    fullWidth
                    sx={{ width: { lg: 400, xs: 200 } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ display: "flex" }}>
                  <TextField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    label="Enter Password"
                    required
                    sx={{ width: { lg: 400, xs: 200 } }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            size="small"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{ width: { lg: 400, xs: 200 }, mt: 3 }}
                >
                  Login
                </Button>

                {/* "Or" Text */}
                <Typography variant="body2" sx={{ mt: 2 }}>
                  Or
                </Typography>

                {/* Social Media Icons */}
                
                <center>
                <Box sx={{ mb: { lg: 3 } }}>
                  {/* <IconButton color="secondary">
                    <FacebookLoginComponent/>
                  </IconButton> */}
                  <Grid container spacing={2} >
                  <Grid item xs={12} lg={6} >
                  <IconButton color="success" onClick={()=>handleGoogleLogin()}>
                    <GoogleLogin                      
                      clientId="332664396318-09ie334fp6knohcelab5duiufnela5g8.apps.googleusercontent.com"                      
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}                                              
                    />
                  </IconButton> 
                  </Grid>
                  <Grid item xs={12} lg={6}>
                  <IconButton color="success" onClick={()=>handleGoogleLogin()}>
                  <AppleLoginComponent/>
                  {/* <div id="appleid-signin" class="signin-button" data-color="black" data-border="true" data-type="sign-in"></div>
                  <script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script> */}
                  {/* <AppleLoginComponent/> */}
                  {/* <AppleLoginComponent/> */}
                  </IconButton>         
                  </Grid>  
                  </Grid>      
                  {/* <IconButton color="dark">
                    <AppleLoginComponent/>
                  </IconButton> */}
                </Box>    
                </center>            
                <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Typography sx={{alignSelf:'flex-start',mb:3,mt:1,cursor:'pointer'}}>Don't have an account yet?Please <span onClick={()=>history.push('/register?request=Account Register')} style={{fontWeight:'bold',color:theme.palette.primary.main,textDecorationLine:'underline'}}>SignUp</span></Typography>
                </div>
              </div>
            </>
          ) : (
            <>
            <div style={{flex:1,display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Avatar src={profileData?.imageUrl} alt="linnmyanmar user profile"  />
              <Typography variant="h4" sx={{mt:3}}>{profileData?.name}</Typography>  
              <Typography variant="body1" sx={{mt:3}}>{profileData?.email}</Typography>  
              <Button variant="contained" color="primary" sx={{width:200,mt:3}} onClick={()=>history.push('/setting')}>
                Go Back
              </Button>
            </div>
            </>
          )}
        </Paper>
      </div>
    </ThemeProvider>

  );
}
