import { ThemeProvider } from "@emotion/react";
import {
  Apps,
  Article,
  CompareArrows,
  Discount,
  FavoriteOutlined,
  GTranslate,
  History,
  Info,
  LocalShipping,
  Login,
  Star,
  Start,
  TransferWithinAStation,
} from "@mui/icons-material";
import { Grid, Paper, Typography, Avatar } from "@mui/material";
import theme from "../../theme";
import { useEffect, useState } from "react";
export default function SettingPaprtComponent({ data, history }) {
  const [showProfile, setShowProfile] = useState(false);
  const [profileIcon, setProfileIcon] = useState("");
  const [profileName, setProfileName] = useState("");
  useEffect(() => {
    var token = sessionStorage.getItem("Token");
    if (token !== null && token !== "") {
      data.splice(0, 1);
      setShowProfile(true);
      var profileIcon = sessionStorage.getItem("ProfileIcon");
      var profileName = sessionStorage.getItem("ProfileUsername");
      console.log("Profile Icon", profileIcon);
      setProfileIcon(profileIcon);
      setProfileName(profileName);
    } else {
      setShowProfile(false);
    }
  }, []);
  const handleRedirect = (iconName) => {
    if(iconName=='Login'){
      sessionStorage.clear();
      history.push('/login')
    }
    else{
      console.log("Coming Soon...")
    }
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid container spacing={2}>
        {showProfile == true && (
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                ml: 1,
                mr: 1,
                mt: 3,
                borderRadius: 5,
                height: 100,
                flex: 1,
                flexDirection: "row",
                display: "flex",
              }}
              elevation={3}
              onClick={() => history.push("/login")}
            >
              <div
                style={{
                  marginRight: 30,
                  flex: 1,
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex",
                    marginLeft: 20,
                  }}
                >
                  <Avatar
                    sx={{ alignSelf: "center", width: 50, height: 50 }}
                    src={profileIcon}
                    alt="linnmyanmar user profile"
                  />
                </div>
                <div
                  style={{
                    flexDirection: "column",
                    marginTop: 13,
                    marginLeft: 20,
                  }}
                >
                  <Typography sx={{ mt: 1, fontSize: 18, fontWeight: "bold" }}>
                    {profileName}
                  </Typography>
                  <Typography sx={{ mt: 1, fontSize: 15 }}>
                    Level-1 (0 Points)
                  </Typography>
                </div>
              </div>
            </Paper>
          </Grid>
        )}
        {data.map((item) => (
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                ml: 1,
                mr: 1,
                mt: 3,
                borderRadius: 5,
                height: 50,
                flex: 1,
                flexDirection: "row",
                display: "flex",
              }}
              elevation={3}
              onClick={() => handleRedirect(item.icon)}
            >
              {/* show icon of login from material */}
              <div
                style={{
                  marginRight: 30,
                  flex: 1,
                  flexDirection: "row",
                  display: "flex",
                }}
              >
                {item.icon == "Login" ? (
                  <Login color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "History" ? (
                  <History color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "Favourite" ? (
                  <FavoriteOutlined
                    color="primary"
                    sx={{ mr: 3, ml: 3, mt: 1.5 }}
                  />
                ) : item.icon == "Transfer" ? (
                  <CompareArrows
                    color="primary"
                    sx={{ mr: 3, ml: 3, mt: 1.5 }}
                  />
                ) : item.icon == "Promotion" ? (
                  <Discount color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "Point" ? (
                  <Star color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "Shipping" ? (
                  <LocalShipping
                    color="primary"
                    sx={{ mr: 3, ml: 3, mt: 1.5 }}
                  />
                ) : item.icon == "Translate" ? (
                  <GTranslate color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "Info" ? (
                  <Info color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "Detail" ? (
                  <Article color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : item.icon == "Version" ? (
                  <Apps color="primary" sx={{ mr: 3, ml: 3, mt: 1.5 }} />
                ) : (
                  <></>
                )}

                <Typography variant="h6" sx={{ mt: 1 }}>
                  {item.title}
                </Typography>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </ThemeProvider>
  );
}
