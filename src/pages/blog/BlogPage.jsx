import { useEffect, useState } from "react";
import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
import GetBlogAPI from '../../api/blog/GetBlogController';
import { Button, Typography } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../theme";
import BlogGridComponent from '../../components/Grid/BlogGridComponent';
import SearchBarComponent from "../../components/AppBar/SearchBarComponent";
import NoItemFoundComponent from "../../components/Paper/NoItemFoundComponent";
import CircularProgressComponent from "../../components/Progress/CircularProgressComponent";
export default function BlogPage({history}) {
  const [blogList,setBlogList]=useState([]);
  const [showLoading,setShowLoading]=useState(false);
  const [firstLoad,setFirstLoad]=useState(false);
  useEffect(()=>{
    GetBlogAPI(setBlogList,setShowLoading);
  },[])
  return (
    <ThemeProvider theme={theme}>
    <SearchBarComponent setProductList={setBlogList} setShowLoading={setShowLoading} setFirstLoad={setFirstLoad}/>

    <div style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center'}}>
      {(!showLoading && blogList!==undefined) ?
    <BlogGridComponent blogList={blogList}/>:
   (!showLoading && blogList===undefined) ?
    <NoItemFoundComponent/>:
    <CircularProgressComponent/>
      }

      <BottomNavigationBarComponent history={history}/>
    </div>    
    </ThemeProvider>
  );
}