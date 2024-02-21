import { ThemeProvider } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { Avatar, Paper, Typography } from "@mui/material";
import theme from "../../theme";
import DetailAppBarComponent from "../../components/AppBar/DetailAppBarComponent";
import GetBlogAPI from "../../api/blog/GetBlogController";
import CircularProgressComponent from "../../components/Progress/CircularProgressComponent";
export default function BlogDetailPage({ history }) {
  const [blogList, setBlogList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    GetBlogAPI(setBlogList, setShowLoading, id);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <DetailAppBarComponent history={history} title={blogList.title} />
      {showLoading == false && blogList.length != 0 ? (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
          <Avatar
            sx={{
              height: { xs: '100%',lg:'50%' },
              width: { xs: '100%', lg: "40%" },
              alignSelf: "center",
              borderRadius: 0,
            }}
            src={blogList?.image?.urls.public}
          />
          <Paper elevation={3} sx={{padding:3,m:3}}>
          <div dangerouslySetInnerHTML={{ __html: blogList.content }} />
          </Paper>
        </div>
      ) : (
        <CircularProgressComponent />
      )}
    </ThemeProvider>
  );
}
