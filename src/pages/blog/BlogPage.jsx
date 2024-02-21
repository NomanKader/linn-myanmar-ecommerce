import { useEffect, useState } from "react";
import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
import GetBlogAPI from '../../api/blog/GetBlogController';
import { Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import BlogGridComponent from '../../components/Grid/BlogGridComponent';
import SearchBarComponent from "../../components/AppBar/SearchBarComponent";
export default function BlogPage({history}) {
  const [blogList,setBlogList]=useState([]);
  const [showLoading,setShowLoading]=useState(false);
  useEffect(()=>{
    GetBlogAPI(setBlogList,setShowLoading);
  },[])
  return (
    <ThemeProvider theme={theme}>
    <SearchBarComponent/>

    <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
    <BlogGridComponent blogList={blogList}/>

      <BottomNavigationBarComponent history={history}/>
    </div>
    </ThemeProvider>
  );
}