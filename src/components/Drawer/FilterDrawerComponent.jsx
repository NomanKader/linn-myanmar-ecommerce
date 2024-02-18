import * as React from "react";
import { Fragment } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ShowAllAppBarComponent from "../AppBar/ShowAllAppBarComponent";
import {
  Paper,
  RadioGroup,
  Typography,
  FormControlLabel,
  Radio,
  FormControl,
  Rating,
  Button,
} from "@mui/material";
import { FilterAlt } from "@mui/icons-material";
import FilterProductListAPI from "../../api/product/FilterProductListController";
export default function FilterDrawerComponent({ history, setProductList }) {
  const [state, setState] = React.useState({
    right: false,
  });
  const [fromPrice,setFromPrice]=React.useState(null);
  const [toPrice,setToPrice]=React.useState(null);
  const [minRate,setMinRate]=React.useState();
  const [maxRate,setMaxRate]=React.useState();
  const [fromPotency,setFromPotency]=React.useState(null);
  const [toPotency,setToPotency]=React.useState(null);
  const [fromWeight,setFromWeight]=React.useState(null);
  const [toWeight,setToWeight]=React.useState(null);
  const [fromQty,setFromQty]=React.useState(null);
  const [toQty,setToQty]=React.useState(null);
  const [isAttachment,setIsAttachment]=React.useState(null);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return ;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (    
    <Fragment>
      <Paper
        sx={{ width: { xs: 230, lg: 300 }, mb: 1, borderRadius: 0 }}
        role="presentation"
      >
        <List sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ဈေးနှုန်း
          </Typography>
          <FormControl>
            <RadioGroup sx={{ mt: 1 }}>
              {[
                "ဈေးအလုံးစုံ",
                "1Ks - 10,000 Ks",
                "10,000 Ks - 30,000 Ks",
                "30,000 Ks - 60,000 Ks",
                "60,000 Ks - 80,000 Ks",
                "100,000 Ks +",
              ].map((text, index) => (
                <ListItem key={index} disablePadding>
                  <FormControlLabel 
                    onClick={() => handlePrice(text)}
                    key={index}
                    value={text}
                    control={<Radio />}
                    label={text}
                    checked={
                      (fromPrice==null && toPrice==null && text=='ဈေးအလုံးစုံ')?true:
                      (fromPrice==1 && toPrice==10000 && text==='1Ks - 10,000 Ks')?true:
                      (fromPrice==10000 && toPrice==30000 && text=='10,000 Ks - 30,000 Ks')?true:
                      (fromPrice==30000 && toPrice==60000 && text=='30,000 Ks - 60,000 Ks')?true:
                      (fromPrice==60000 && toPrice==80000 && text=='60,000 Ks - 80,000 Ks')?true:
                      (fromPrice==100000 && toPrice==null && text=='100,000 Ks +')?true:
                      false                                      
                    }
                  />
                </ListItem>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Paper>
      <Divider />
      {/* Rating */}
      <Paper
        sx={{ width: { xs: 230, lg: 300 }, mb: 1, borderRadius: 0 }}
        role="presentation"
      >
        <List sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            အဆင့်
          </Typography>
          <FormControl sx={{ mt: 1 }}>
            {["Min", "Max"].map((text, index) => (
              <ListItem key={text} disablePadding sx={{ mb: 1 }}>
                <ListItemText>{text}</ListItemText>
                <Rating onChange={(e,value)=>handleRate(text,value)} 
                value={text=='Min'?minRate:maxRate}                
                />
              </ListItem>
            ))}
          </FormControl>
        </List>
      </Paper>
      {/* Arr Ni Tin */}
      <Paper
        sx={{ width: { xs: 230, lg: 300 }, mb: 1, borderRadius: 0 }}
        role="presentation"
      >
        <List sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            အာနိသင်
          </Typography>
          <FormControl>
            <RadioGroup sx={{ mt: 1 }}>
              {[
                "အာနိသင်အလုံးစုံ",
                "0-100 (mg/iu)",
                "100-300 (mg/iu)",
                "300-500 (mg/iu)",
                "500-1000 (mg/iu)",
                "1000+ (mg/iu)",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <FormControlLabel
                    onClick={()=>handlePotency(text)}
                    key={index}
                    value={text}
                    control={<Radio />}
                    label={text}
                    checked={
                      (fromPotency==null && toPotency==null && text==='အာနိသင်အလုံးစုံ')?true:
                      (fromPotency==null && toPotency==100 && text==='0-100 (mg/iu)')?true:
                      (fromPotency==100 && text=='100-300 (mg/iu)')?true:
                      (fromPotency==300 && text=='300-500 (mg/iu)')?true:
                      (fromPotency==500 && text=='500-1000 (mg/iu)')?true:
                      (fromPotency==1000 && text=='1000+ (mg/iu)')?true:                      
                      false
                    }
                  />
                </ListItem>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Paper>
      {/* A Lay Chain */}
      <Paper
        sx={{ width: { xs: 230, lg: 300 }, mb: 1, borderRadius: 0 }}
        role="presentation"
      >
        <List sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            အလေးချိန်
          </Typography>
          <FormControl>
            <RadioGroup sx={{ mt: 1 }}>
              {[
                "အလေးချိန်အလုံးစုံ",
                "0.0 - 0.05",
                "0.05 - 0.1",
                "0.1 - 0.2",
                "0.2 - 0.3",
                "0.3 +",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <FormControlLabel
                    onClick={()=>handleWeight(text)}
                    key={index}
                    value={text}
                    control={<Radio />}
                    label={text}
                    checked={
                      (fromWeight==null && toWeight==null && text==='အလေးချိန်အလုံးစုံ')?true:
                      (fromWeight==0.0 && text==='0.0 - 0.05')?true:
                      (fromWeight==0.05 && text=='0.05 - 0.1')?true:
                      (fromWeight==0.1 && text=='0.1 - 0.2')?true:
                      (fromWeight==0.2 && text=='0.2 - 0.3')?true:
                      (fromWeight==0.3 && text=='0.3 +')?true:                      
                      false
                    }
                  />
                </ListItem>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Paper>
      {/* Say Lone Ayay Atwat */}
      <Paper
        sx={{ width: { xs: 230, lg: 300 }, mb: 1, borderRadius: 0 }}
        role="presentation"
      >
        <List sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ဆေးလုံးအရေအတွက်
          </Typography>
          <FormControl>
            <RadioGroup sx={{ mt: 1 }}>
              {[
                "အရေအတွက်အားလုံး",
                "0 - 50",
                "50 - 100",
                "100 - 300",
                "300 - 500",
                "500 - 1000",
                "1000 +",
              ].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <FormControlLabel
                    onClick={()=>handleQty(text)}
                    key={index}
                    value={text}
                    control={<Radio />}
                    label={text}
                    checked={
                      (fromQty==null && toQty==null && text==='အရေအတွက်အားလုံး')?true:
                      (fromQty===null && toQty==50 && text==='0 - 50')?true:
                      (fromQty==50 && text=='50 - 100')?true:
                      (fromQty==100 && text=='100 - 300')?true:
                      (fromQty==300 && text=='300 - 500')?true:
                      (fromQty==500 && text=='500 - 1000')?true:
                      (fromQty==1000 && text=='1000 +')?true:                      
                      false
                    }   
                  />
                </ListItem>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Paper>
      {/* Say Anyun */}
      <Paper
        sx={{ width: { xs: 230, lg: 300 }, mb: 1, borderRadius: 0 }}
        role="presentation"
      >
        <List sx={{ ml: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            ဆေးအညွှန်း
          </Typography>
          <FormControl>
            <RadioGroup sx={{ mt: 1 }}>
              {["နှစ်ခုလုံး", "လိုအပ်သည်", "မလိုအပ်ပါ"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <FormControlLabel
                    onClick={()=>handleAttachment(text)}
                    key={index}
                    value={text}
                    control={<Radio />}
                    label={text}    
                    checked={
                      (isAttachment==null && text=='နှစ်ခုလုံး')?true:
                      (isAttachment==true && text=='လိုအပ်သည်')?true:
                      (isAttachment==false && text=='မလိုအပ်ပါ')?true:false
                    }                
                  />
                </ListItem>
              ))}
            </RadioGroup>
          </FormControl>
        </List>
      </Paper>

      <Button
        onClick={() => handleFilter()}
        variant="contained"
        sx={{ borderRadius: 0 }}
        startIcon={<FilterAlt />}
      >
        စစ်ထုတ်ရန်  
      </Button>
    </Fragment>
  );
  const handleFilter = async() => {    
    sessionStorage.setItem('isFilter','true')
    setState({
      right:false
    })
    setProductList([]);    
    let category='DEFAULT';
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    const params = new URLSearchParams(url.search);
    const requestParam = params.get("request");
    if(requestParam=='ရောင်းအားအကောင်းဆုံးပစ္စည်းများ'){
      category='BEST_SELLER'
    }
    const filterBody={
      pricePerUnit: {
        from: fromPrice,
        to: toPrice,
      },
      avgStars: {
        from: minRate,
        to: maxRate,
      },
      potency: {
        from: fromPotency,
        to: toPotency,
      },
      shippingWeight: {
        from:fromWeight,
        to:toWeight
      },
      packageQty: {
        from:fromQty,
        to:toQty
      },      
      needAttachment: isAttachment,
    };
    await FilterProductListAPI(category,filterBody,setProductList);
    console.log("Request parameter:", requestParam);
    // await FilterProductList()
  };
  const handlePrice = (value) => {
    console.log("Select Price", value);
    if (value == "ဈေးအလုံးစုံ") {
      setFromPrice(null);
      setToPrice(null);
    } else if (value == "1Ks - 10,000 Ks") {
      setFromPrice(1);
      setToPrice(10000);
    } else if (value == "10,000 Ks - 30,000 Ks") {
      setFromPrice(10000);
      setToPrice(30000);
    } else if (value == "30,000 Ks - 60,000 Ks") {
      setFromPrice(30000);
      setToPrice(60000);
    } else if (value == "60,000 Ks - 80,000 Ks") {
      setFromPrice(60000);
      setToPrice(80000);
    } else if (value == "100,000 Ks +") {
      setFromPrice(100000);
      setToPrice(null);
    } else {
      setFromPrice(null);
      setToPrice(null);
    }
  };
  const handleRate=(type,value)=>{
    if(type=='Min'){
      setMinRate(value)
    }
    else{
      setMaxRate(value)
    }
  }
  const handlePotency=(value)=>{
    if(value=='0-100 (mg/iu)'){
      setFromPotency(null);
      setToPotency(100)
    }
    else if(value=='100-300 (mg/iu)'){
      setFromPotency(100);
      setToPotency(300)
    }
    else if(value=='300-500 (mg/iu)'){
      setFromPotency(300);
      setToPotency(500)
    }
    else if(value=='500-1000 (mg/iu)'){
      setFromPotency(500);
      setToPotency(1000)
    }
    else if(value=='1000+ (mg/iu)'){
      setFromPotency(1000);
      setToPotency(null)
    }
    else{
      setFromPotency(null);
      setToPotency(null)
    }
  }
  const handleWeight=(value)=>{
    if(value=='0.0 - 0.05'){
      setFromWeight(0.0);
      setToWeight(0.05)
    }
    else if(value=='0.05 - 0.1'){
      setFromWeight(0.05);
      setToWeight(0.1)
    }
    else if(value=='0.1 - 0.2'){
      setFromWeight(0.1);
      setToWeight(0.2)
    }
    else if(value=='0.2 - 0.3'){
      setFromWeight(0.2);
      setToWeight(0.3)
    }
    else if(value=='0.3 +'){
      setFromWeight(0.3);
      setToWeight(null)
    }
    else{
      setFromWeight(null);
      setToWeight(null)
    }
  }
  const handleQty=(value)=>{
    if(value=='0 - 50'){
      setFromQty(null);
      setToQty(50)
    }
    else if(value=='50 - 100'){
      setFromQty(50);
      setToQty(100)
    }
    else if(value=='100 - 300'){
      setFromQty(100);
      setToQty(300)
    }
    else if(value=='300 - 500'){
      setFromQty(300);
      setToQty(500)
    }
    else if(value=='500 - 1000'){
      setFromQty(500);
      setToQty(1000);
    }
    else if(value=='1000 +'){
      setFromQty(1000);
      setToQty(null)
    }
    else{
      setFromQty(null);
      setToQty(null);
    }
  }
  const handleAttachment=(value)=>{    
    if(value=='လိုအပ်သည်'){
      setIsAttachment(true)
    }
    else if(value=='မလိုအပ်ပါ'){
      setIsAttachment(false)
    }
    else{
      setIsAttachment(null)
    }
  }
  return (
    <div>
      <React.Fragment key="right">
        <ShowAllAppBarComponent
          history={history}
          filterAction={toggleDrawer("right", true)}
        />
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
