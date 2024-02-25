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
import { Email, FactCheck, Phone, Visibility, VisibilityOff } from "@mui/icons-material";
import { Facebook, Google, Apple } from "@mui/icons-material";
import logoIcon from "../../assets/linnmyanmar-logo.png";
import theme from "../../theme";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";
import AppleLoginComponent from '../../components/Login/AppleLoginComponent';
import FacebookLoginComponent from "../../components/Login/FacebookLoginComponent";
import BackDropComponent from '../../components/Progress/BackDropComponent';
import _GetDeviceID from "../../service/GetDeviceID";
import _GetDeviceOS from "../../service/GetDeviceOS";
import RegisterAPI from "../../api/auth/RegisterController";
export default function RegisterPage({history}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [profileData, setProfileData] = useState();
  const [deviceID,setDeviceID]=useState('');
  const [deviceOS,setDeviceOS]=useState('');
  const [showBackDrop,setShowBackDrop]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const [phoneError,setPhoneError]=useState(false);
  const [passwordError,setPasswordError]=useState(false);
  const [nameError,setNameError]=useState(true);
  useEffect(()=>{
    setDeviceID(_GetDeviceID());
    setDeviceOS(_GetDeviceOS());
  },[])
  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };
  const handleToggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };
  const handleRegister=()=>{
    console.log("Device ID ",deviceID);
    console.log("Device OS",deviceOS);
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const testEmail = (email) => {
      return emailRegex.test(email);
    };
    const isEmailFormat=testEmail(email);
    if(!isEmailFormat){
      setEmailError(true);
      alert('Eamil format is incorrect');
    }
    else{
      setEmailError(false);
    }
   if(password!==confirmPassword){
    alert('Password and Confirm Password not same')
    setPasswordError(true);
   }
   else{
    setPasswordError(false);
   }
   const phoneNumberRegex = /^09\d/;
   const testPhoneNumber = (phoneNumber) => {
    return phoneNumberRegex.test(phoneNumber);
  };
  const isPhoneFormat=testPhoneNumber(phone);
  if(!isPhoneFormat){
    setPhoneError(true);
    alert('Phone Number is not correct');
  }
  else{
    if(phone.length>=9){
      setPhoneError(false);
    }
    else{
      setPhoneError(true);
      alert('Phone Number is not correct');
    }    
  }
  if(name==''){
    setNameError(true)
    alert('Name cannot be empty')
  }
  else{
    setNameError(false);
  }
  if(password=='' || confirmPassword==''){
    alert('Password cannot be empty')
    setPasswordError(true);
  }
  else if(password==confirmPassword){
    setPasswordError(false);
  }
  if(isEmailFormat==true && isPhoneFormat==true && password==confirmPassword){
    const postBody={
      "deviceId":deviceID,
      "deviceOS": deviceOS,
      "displayName": name,
      "email": email,
      "firebaseMessagingToken": "string",
      "password": password,
      "phoneNumber": phone
    }
    RegisterAPI(postBody,setShowBackDrop,history);
  }
  }
  return (
    <>
      <ShowAllAppBarComponent history={history}/>
      {showBackDrop && <BackDropComponent/>}
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
          sx={{
            width: "80%",
            height: {lg:'85%',xs:'93%'},
            padding: "3px",
            display: "flex",
            marginTop:3,
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
                  <TextField
                    type={'text'}
                    id="name"
                    error={nameError}
                    label="Enter Name"
                    required
                    sx={{ width: { lg: 400, xs:250 },mb:2 }}
                    variant="outlined"
                    onChange={(e,v)=>[setName(e.target.value),setNameError(false)]}
                  />                              
                  <TextField
                    id="phoneNumber"
                    error={phoneError}
                    label="Enter Phone Number"
                    type="number"
                    required
                    fullWidth
                    onChange={(e,v)=>[setPhone(e.target.value),setPhoneError(false)]}
                    sx={{ width: { lg: 400, xs:250 },mb:2 }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
               
                  <TextField
                    error={emailError}
                    id="email"
                    label="Enter Email"
                    type='email'
                    required
                    fullWidth
                    onChange={(e,v)=>[setEmail(e.target.value),setEmailError(false)]}
                    sx={{ width: { lg: 400, xs:250 },mb:2}}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email />
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />                  
               
                  <TextField
                    type={showPassword ? "text" : "password"}
                    id="password"
                    error={passwordError}
                    label="Enter Password"
                    required
                    sx={{ width: { lg: 400, xs:250 },mb:2 }}
                    onChange={(e,v)=>[setPassword(e.target.value),setPasswordError(false)]}
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
               
                  <TextField
                    type={showConfirmPassword ? "text" : "password"}
                    id="password"
                    error={passwordError}
                    label="Confirm Password"
                    required
                    sx={{ width: { lg: 400, xs:250 },mb:2 }}
                    onChange={(e,v)=>[setConfirmPassword(e.target.value),setPasswordError(false)]}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <IconButton
                            onClick={handleToggleConfirmPasswordVisibility}
                            size="small"
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    variant="outlined"
                  />
               
                <Button
                size="large"
                  variant="contained"
                  sx={{ width: { lg: 400, xs:250 }, mt: 1 }}
                  startIcon={<FactCheck/>}
                  onClick={()=>handleRegister()}                  
                  color="error"
                >
                  Register
                </Button>                
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
    </>

  );
}
