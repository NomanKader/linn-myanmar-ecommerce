import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Check } from "@mui/icons-material";
import { Grid, Button, Rating, TextField } from "@mui/material";
import ProductFeedbackAPI from "../../api/product/FeedbackController";
import GetReviewAPI from '../../api/product/GetReviewController';
import ProductReviewCardComponent from '../Card/ProductReviewCardComponent';
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ProductDetailTabComponent({ productDetail,history }) {
  const [value, setValue] = React.useState(0);
  const productDescription = productDetail.description;
  const supplementFacts = productDetail.supplementFacts;
  const [rating, setRating] = React.useState(0);
  const [feedback, setFeedBack] = React.useState("");
  const [productID, setProductID] = useState();
  const [authStatus,setAuthStatus]=useState(false);
  const [reviewList,setReviewList]=useState([]);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get("id");
    const token=sessionStorage.getItem('Token');
    if(token){
      setAuthStatus(true);
    }
    else{
      setAuthStatus(false);
    }
    setProductID(id);
    GetReviewAPI(id,setReviewList);
  }, []);
  const handleChange = (event, newValue) => {
    console.log("Active Tab",value);
    setValue(newValue);
  };
  const handleFeedback = () => {
    const accessToken = sessionStorage.getItem("AccessToken");
    if (accessToken) {
      const customerID = sessionStorage.getItem("CustomerID");
      const postBody = {
        customer: { id: customerID },
        product: { id: productID },
        review: feedback,
        stars: rating,
      };
      ProductFeedbackAPI(postBody);
    } else {
      alert("Please Login First To Feedback");
    }
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="ရည်ညွန်းချက်" {...a11yProps(0)} />
          <Tab label="ပါဝင်ပစ္စည်းများ" {...a11yProps(1)} />
          <Tab label="သုံးသပ်ချက်များ" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div dangerouslySetInnerHTML={{ __html: productDescription }} />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div dangerouslySetInnerHTML={{ __html: supplementFacts }} />
      </CustomTabPanel>
      {(authStatus==true) ?
      <>
      <CustomTabPanel value={value} index={2}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Rating
            name="simple-controlled"
            value={rating}
            size="large"
            onChange={(event, newValue) => [
              setRating(newValue != null ? newValue : 0),
            ]}
          />
          <TextField
            sx={{ width: 300, mt: 3 }}
            id="outlined-basic"
            label="သုံးသပ်ချက်"
            variant="outlined"
            onChange={(e, v) => setFeedBack(e.target.value)}
          />
          <Button
            sx={{ width: 300, mt: 3,mb:2 }}
            variant="contained"
            startIcon={<Check />}
            onClick={() => handleFeedback()}
          >
            သုံးသပ်ချက်ရေးရန်
          </Button>
          <Grid container spacing={2} sx={{overflowX:'auto'}} direction={'row'}>
           {reviewList?.data?.map((item,index)=>(
            <Grid item>
             <ProductReviewCardComponent data={item}/>
            </Grid>
           ))}   
            
          </Grid>
          
        </div>
      </CustomTabPanel>
      </>:
      value==2 &&
      <Button onClick={()=>history.push('/login')} sx={{m:3}} variant="contained">
      Please Login For Reviews
      </Button>  
      }
    </Box>
  );
}
