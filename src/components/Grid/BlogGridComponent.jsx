import React, { useEffect, useState } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import {Paper,Rating} from "@mui/material";
import moment from 'moment';

export default function BlogGridComponent({ blogList,history }) {
  // console.log("Rating",JSON.stringify(blogList.data.avgStars));
  return (
    <Grid container spacing={2} sx={{ mt: 3,mb:7}} >
      {blogList?.map((item,index) => (
        <Grid item xs={12} lg={4} key={blogList.id}>
             <Paper elevation={3} onClick={()=>window.location.href='/blog/detail?id='+item.id} sx={{position:'relative',borderRadius:3,height:400,cursor:'pointer',m:1}}>          
            <div style={{display:'flex',justifyContent:'center'}}>
                <Avatar sx={{height:{xs:'50%',lg:200},width:{xs:'100%',lg:'100%'},alignSelf:'center',borderRadius:0}} src={item?.image?.urls?.public}/>  
                </div>
                <div style={{marginLeft:10}}>
                {/* <Typography variant="subtitle2" style={{textAlign:'start',justifyContent:'flex-start' }}>
                  {blogList.name}
                </Typography> */}
                <div style={{display:'flex',flexDirection:'row',marginTop:20}}>
                <Typography sx={{fontWeight:'bold',color:'green'}} variant="subtitle1" style={{textAlign:'start',justifyContent:'flex-start' }}>
                  {item.author}
                </Typography>
                <Typography sx={{ml:3}} variant="subtitle1" style={{textAlign:'start',justifyContent:'flex-start' }}>
                  {moment(item.blogDate).format('YYYY-MM-DD')}
                </Typography>
                </div>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                <Typography variant="subtitle1">{item.description}</Typography>                
                </div>                
                </div>
             </Paper>
        </Grid>
        
      ))}
    </Grid>
  );
}