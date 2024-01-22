import React from 'react';
import { Avatar } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CauroselComponent = () => {
  const carouselSettings = {
    autoPlay: true,
    infiniteLoop: true,
    showStatus: false,
    showThumbs: false,
    showArrows: false,
    interval: 3000,
  };

  return (
    <Carousel {...carouselSettings}>
      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Avatar
          variant="square"
          sx={{ width: {lg:'50%',xs:'100%'}, height: '50%', objectFit: 'cover', margin: 'auto' }}
          src="https://api.linnmyanmar.com.mm/dev/public/files/c2e9b146-8a2b-4056-998a-796aec2f44b2/1.jpg"
          alt="Slide 1"
        />
      </div>
      <div style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Avatar
          variant="square"
          sx={{  width: {lg:'50%',xs:'100%'}, height: '50%', objectFit: 'cover', margin: 'auto' }}
          src="https://api.linnmyanmar.com.mm/dev/public/files/c2e9b146-8a2b-4056-998a-796aec2f44b2/2.jpg"
          alt="Slide 2"
        />
      </div>
    </Carousel>
  );
};

export default CauroselComponent;
