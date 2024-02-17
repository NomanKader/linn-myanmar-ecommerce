import React from "react";
import { Avatar } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetailCauroselComponent = ({ productImages }) => {
  console.log("Product Images",productImages);
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
      {productImages !== null &&
        productImages.map((image) => (
          <div
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Avatar
              variant="square"
              sx={{
                width: { lg: "20%", xs: "50%" },
                height: "50%",
                objectFit: "cover",
                margin: "auto",
              }}
              src={image}
              alt="Slide 1"
            />
          </div>
        ))}      
    </Carousel>
  );
};

export default ProductDetailCauroselComponent;
