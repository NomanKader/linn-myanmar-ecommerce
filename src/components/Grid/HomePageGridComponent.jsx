import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import {Paper,Rating,Avatar} from "@mui/material";
import theme from "../../theme";

export default function HomePageGridComponent({ productList,history }) {
  // console.log("Product",JSON.stringify(productList.productPricings[0].pricePerUnit));
  return (
    <Grid container spacing={2} style={{ marginTop: "3px"}} direction='row'>
    {productList?.map((item,index) => (
      index<3 &&(
      <Grid item xs={6} lg={4} key={item.id} onClick={()=>history.push('/detail?id='+item.id)}>
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
              <Avatar sx={{height:{xs:150,lg:200},width:{xs:100,lg:200},alignSelf:'center',borderRadius:0,mt:5}} src={item.images[0]?.image?.urls?.public}/>  
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
              
                <Typography variant="body1" sx={{fontWeight:'bold'}}>{item?.productPricings[0]?.customerType=='RETAIL_SALE'?parseInt(item?.productPricings[0]?.pricePerUnit).toLocaleString()+' Ks':parseInt(item?.productPricings[1]?.pricePerUnit).toLocaleString()+" Ks"}</Typography>                
              </div>
           </Paper>
      </Grid>
      )
    ))}
  </Grid>
  );
}