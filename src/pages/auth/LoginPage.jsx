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
} from "@mui/material";
import { GoogleLogin } from "react-google-login";
import { Phone, Visibility, VisibilityOff } from "@mui/icons-material";
import { Facebook, Google, Apple } from "@mui/icons-material";
import logoIcon from "../../assets/linnmyanmar-logo.png";
import theme from "../../theme";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";

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
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const responseGoogle = (response) => {    
    console.log(response.profileObj);
    setProfileData(response.profileObj);
    setIsLogin(true);
    sessionStorage.setItem('Token',response.Sc.id_token);    
    sessionStorage.setItem('ProfileIcon',response.profileObj.imageUrl)
    sessionStorage.setItem('ProfileUsername',response.profileObj.name)
    sessionStorage.setItem('ProfileUsername',response.profileObj.name)

    // Handle the Google login response here
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
                  width: { lg: "250px", xs: "200px" },
                  height: { lg: "250px", xs: "200px" },
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
                <Box sx={{ display: "flex", mb: { lg: 3 } }}>
                  <IconButton color="secondary">
                    <Facebook />
                  </IconButton>
                  <IconButton color="success">
                    <GoogleLogin
                      buttonText=""
                      clientId="332664396318-09ie334fp6knohcelab5duiufnela5g8.apps.googleusercontent.com"                      
                      onSuccess={responseGoogle}
                      onFailure={responseGoogle}
                      cookiePolicy={"single_host_origin"}                                              
                    />
                  </IconButton>
                  <IconButton color="dark">
                    <Apple />
                  </IconButton>
                </Box>
              </div>
            </>
          ) : (
            <>
            <div style={{flex:1,display:'flex',flexDirection:'column',width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
              <Avatar src={profileData.imageUrl} alt="linnmyanmar user profile"  />
              <Typography variant="h4" sx={{mt:3}}>{profileData.name}</Typography>  
              <Typography variant="body1" sx={{mt:3}}>{profileData.email}</Typography>  
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
