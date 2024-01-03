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
  import { Phone, Visibility } from "@mui/icons-material";
  import { Facebook, Google, Apple } from "@mui/icons-material";
  import logoIcon from "../../assets/linnmyanmar-logo.png";
  import theme from "../../theme";
  
  export default function LoginPage() {
    return (
      <ThemeProvider theme={theme}>
        <div
          style={{
            display: "flex",
            flex: 1,
            height: "100vh",
            justifyContent: "center",
            backgroundImage: "url('https://img.freepik.com/free-vector/paper-style-wavy-red-background_52683-74121.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703894400&semt=ais')",
            backgroundSize: "cover", // Ensure the image covers the entire container
          }}
        >
          <Paper
            elevation={3}
            style={{
              width: "80%",
              height: "65%",
              padding: "20px",
              display: "flex",
              marginTop: 120,
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: 10,
            }}
          >
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
              <Box sx={{ display: "flex", flex: 1, mb: 3 }}>
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
                  type="password"
                  id="password"
                  label="Enter Password"
                  required
                  sx={{ width: { lg: 400, xs: 200 } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Visibility />
                      </InputAdornment>
                    ),
                  }}
                  variant="outlined"
                />
              </Box>
              <Button variant="contained" sx={{ width: { lg: 400, xs: 200 }, mt: 3 }}>
                Login
              </Button>
  
              {/* "Or" Text */}
              <Typography variant="body2" sx={{ mt: 2, mb: 2 }}>
                Or
              </Typography>
  
              {/* Social Media Icons */}
              <Box sx={{ display: "flex",mb:{lg:3} }}>
                <IconButton color="secondary">
                  <Facebook />
                </IconButton>
                <IconButton color="success">
                  <Google />
                </IconButton>
                <IconButton color="dark">
                  <Apple />
                </IconButton>
              </Box>
            </div>
          </Paper>
        </div>
      </ThemeProvider>
    );
  }
  