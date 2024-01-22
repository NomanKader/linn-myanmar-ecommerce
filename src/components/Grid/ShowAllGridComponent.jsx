import React from "react";
import { Grid, Typography } from "@mui/material";
import {Paper,Rating} from "@mui/material";
import theme from "../../theme";

export default function ShowAllGridComponent({ productList }) {

  // console.log("Product",JSON.stringify(productList.productPricings[0].pricePerUnit));
  return (
    <Grid container spacing={2} style={{ marginTop: "3px"}} direction='row'>
      {productList?.images.map((image,index) => (
        <Grid item xs={6} lg={4} key={productList.id}>
             <Paper elevation={3} sx={{position:'relative',borderRadius:3}}>
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
                <img style={{height:200,alignSelf:'center'}} src={image.image.urls.public}/>  
                </div>
                <div style={{marginLeft:10}}>
                <Typography variant="subtitle2" style={{textAlign:'start',justifyContent:'flex-start' }}>
                  {productList.name}
                </Typography>
                <Typography variant="body2">Rating: {productList.rating}</Typography>
                <Rating name="read-only" size="small" value={3} readOnly />
                {JSON.stringify(productList?.productPricings[index]?.pricePerUnit)!==undefined?(
                  <Typography variant="body1" sx={{fontWeight:'bold'}}>{JSON.stringify(productList?.productPricings[index]?.pricePerUnit)+" Ks"}</Typography>                
                ):(
<Typography variant="body1" sx={{fontWeight:'bold'}}>0 Ks</Typography>                
                )}
                
                </div>
             </Paper>
        </Grid>
        
      ))}
    </Grid>
  );
}