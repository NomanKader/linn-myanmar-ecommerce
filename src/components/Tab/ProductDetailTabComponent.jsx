import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Check } from "@mui/icons-material";
import { Button, Rating, TextField } from "@mui/material";

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

export default function ProductDetailTabComponent({ productDetail }) {
  const [value, setValue] = React.useState(0);
  const productDescription = productDetail.description;
  const supplementFacts = productDetail.supplementFacts;
  const handleChange = (event, newValue) => {
    setValue(newValue);
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
      <CustomTabPanel value={value} index={2}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <Rating
            name="simple-controlled"
            value={value}
            size='large'
            onChange={(event, newValue) => {}}
          />
          <TextField
            sx={{ width: 300, mt: 3 }}
            id="outlined-basic"
            label="သုံးသပ်ချက်"
            variant="outlined"
          />
          <Button
            sx={{ width: 300, mt: 3 }}
            variant="contained"
            startIcon={<Check />}
          >
            သုံးသပ်ချက်ရေးရန်
          </Button>
        </div>
      </CustomTabPanel>
    </Box>
  );
}
