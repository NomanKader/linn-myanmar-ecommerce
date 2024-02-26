import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import moment from "moment";
import axios from "axios";
const ProductReviewCardComponent = ({ data }) => {
  const [profile,setProfile]=useState();
  const ProfileAvatar = async() => {
    const config = {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem('AccessToken')}`,
        'Content-Type':'image/jpeg'
      },
      responseType: 'image',
    };
   await axios.get('https://api.linnmyanmar.com.mm/dev/files/download/be6d044f-951c-4048-82f0-c6e5dbd48e52/Profile.jpg', config)
      .then(response => {
        console.log("Image",response.data);
        
        return(
          <img src={response.config.data}/>
        )
      })
      .catch(error => {
        console.error(error);
      });
    }
  
  return (
    <Card sx={{ width: 300,mb:3 }}>
      <CardContent>
        <Box display="flex" alignItems="center">
          <Box ml={2}>
            <Typography variant="body1" fontWeight="bold">
              {data.customer.user.displayName}
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {moment(data.customer.user.modifiedAt).format("YYYY-MM-DD")}
            </Typography>
          </Box>
        </Box>

        <Box mt={2}>
          <Rating name="read-only" value={data.stars} readOnly />
        </Box>

        <Typography variant="body2" mt={2}>
          {data.review}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductReviewCardComponent;
