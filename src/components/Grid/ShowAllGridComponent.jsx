import React, { useEffect, useState } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import {Paper,Rating} from "@mui/material";
import theme from "../../theme";

export default function ShowAllGridComponent({ productList }) {
  const [isFilter,setIsFilter]=useState(false);
  useEffect(()=>{
    var isFilter=sessionStorage.getItem('isFilter');    
    console.log("IsFilter",isFilter);
    if(isFilter==true){
      setIsFilter(true)      
    }
    else{
      setIsFilter(false);
    }
  },[])
  // console.log("Rating",JSON.stringify(productList.data.avgStars));
  return (
    <Grid container spacing={2} style={{ marginTop: "3px"}} direction='row'>
      {productList?.map((item,index) => (
        <Grid item xs={6} lg={4} key={productList.id}>
             <Paper elevation={3} sx={{position:'relative',borderRadius:3,height:'400px'}}>
             <Typography
              variant="subtitle2"
              style={{                
                position: "absolute",
                top: 0,
                right: 0,
                backgroundColor: theme.palette.text.main,
                color: "#fff",
                padding: "4px",
                borderRadius: "0 0 0 3px",                
              }}
            >
              20% OFF
            </Typography>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Avatar sx={{height:{xs:150,lg:200},width:{xs:100,lg:200},alignSelf:'center',borderRadius:0,mt:5}} src={isFilter?item.image.urls.public:item.images[0].image.urls.public}/>  
                </div>
                <div style={{marginLeft:10}}>
                <Typography variant="subtitle2" style={{textAlign:'start',justifyContent:'flex-start' }}>
                  {productList.name}
                </Typography>
                <Typography variant="subtitle1" style={{textAlign:'start',justifyContent:'flex-start' }}>
                  {item.name}
                </Typography>
                <div style={{display:'flex',flexDirection:'row',marginTop:10}}>
                <Typography variant="body2">Rating:</Typography>
                <Rating name="read-only" size="small" value={productList.avgStars} readOnly />
                </div>
                
                  <Typography variant="body1" sx={{fontWeight:'bold'}}>{item?.productPricings[0]?.customerType=='RETAIL_SALE'?item?.productPricings[0]?.pricePerUnit+' Ks':item?.productPricings[1]?.pricePerUnit+" Ks"}</Typography>                
                

                
                
                </div>
             </Paper>
        </Grid>
        
      ))}
    </Grid>
  );
}