import * as React from 'react';
import { Fragment } from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import ShowAllAppBarComponent from '../AppBar/ShowAllAppBarComponent';
import { Paper, RadioGroup, Typography,FormControlLabel,Radio, FormControl, Rating, Button } from '@mui/material';
import { FactCheck, FilterAlt } from '@mui/icons-material';
export default function FilterDrawerComponent({history}) {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Fragment>
    <Paper        
      sx={{ width: {xs:230,lg:300},mb:1,borderRadius:0 }}
      role="presentation"
      >
      <List sx={{ml:2}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>ဈေးနှုန်း</Typography>
        <FormControl>
        <RadioGroup sx={{mt:1}}>
        {['ဈေးအလုံးစုံ', '1Ks - 10,000 Ks', '10,000 Ks - 30,000 Ks', '30,000 Ks - 60,000 Ks','60,000 Ks - 80,000 Ks','100,000 Ks +'].map((text, index) => (          
          <ListItem key={text} disablePadding>
            <FormControlLabel key={index} value={text} control={<Radio />} label={text} />            
          </ListItem>          
        ))}
        </RadioGroup>
        </FormControl>
      </List>
    </Paper>  
      <Divider />
      {/* Rating */}
      <Paper        
      sx={{ width: {xs:230,lg:300},mb:1,borderRadius:0 }}
      role="presentation"
      >
      <List sx={{ml:2}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>အဆင့်</Typography>
        <FormControl sx={{mt:1}}>
        {['Min', 'Max'].map((text, index) => (          
          <ListItem key={text} disablePadding sx={{mb:1}}>
            <ListItemText>{text}</ListItemText>
            <Rating/>
          </ListItem>          
        ))}
        </FormControl>
      </List>
    </Paper>      
    {/* Arr Ni Tin */}
    <Paper        
      sx={{ width: {xs:230,lg:300},mb:1,borderRadius:0 }}
      role="presentation"
      >
      <List sx={{ml:2}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>အာနိသင်</Typography>
        <FormControl>
        <RadioGroup sx={{mt:1}}>
        {['အာနိသင်အလုံးစုံ', '0-100 (mg/iu)', '100-300 (mg/iu)', '300-500 (mg/iu)','500-1000 (mg/iu)','1000+ (mg/iu)'].map((text, index) => (          
          <ListItem key={text} disablePadding>
            <FormControlLabel key={index} value={text} control={<Radio />} label={text} />            
          </ListItem>          
        ))}
        </RadioGroup>
        </FormControl>
      </List>
    </Paper>  
    {/* A Lay Chain */}
    <Paper        
      sx={{ width: {xs:230,lg:300},mb:1,borderRadius:0 }}
      role="presentation"
      >
      <List sx={{ml:2}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>အလေးချိန်</Typography>
        <FormControl>
        <RadioGroup sx={{mt:1}}>
        {['အလေးချိန်အလုံးစုံ', '0.0-0.05', '0.05 - 0.1', '0.1 - 0.2','0.2 - 0.3','0.3 +'].map((text, index) => (          
          <ListItem key={text} disablePadding>
            <FormControlLabel key={index} value={text} control={<Radio />} label={text} />            
          </ListItem>          
        ))}
        </RadioGroup>
        </FormControl>
      </List>
    </Paper>  
    {/* Say Lone Ayay Atwat */}
    <Paper        
      sx={{ width: {xs:230,lg:300},mb:1,borderRadius:0 }}
      role="presentation"
      >
      <List sx={{ml:2}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>ဆေးလုံးအရေအတွက်</Typography>
        <FormControl>
        <RadioGroup sx={{mt:1}}>
        {['အရေအတွက်အားလုံး', '0 - 50', '50 - 100', '100 - 300','300 - 500','500 - 1000','1000+'].map((text, index) => (          
          <ListItem key={text} disablePadding>
            <FormControlLabel key={index} value={text} control={<Radio />} label={text} />            
          </ListItem>          
        ))}
        </RadioGroup>
        </FormControl>
      </List>
    </Paper>  
    {/* Say Anyun */}
    <Paper        
      sx={{ width: {xs:230,lg:300},mb:1,borderRadius:0 }}
      role="presentation"
      >
      <List sx={{ml:2}}>
        <Typography variant='h6' sx={{fontWeight:'bold'}}>ဆေးအညွှန်း</Typography>
        <FormControl>
        <RadioGroup sx={{mt:1}}>
        {['နှစ်ခုလုံး', 'လိုအပ်သည်', 'မလိုအပ်ပါ'].map((text, index) => (          
          <ListItem key={text} disablePadding>
            <FormControlLabel key={index} value={text} control={<Radio />} label={text} />            
          </ListItem>          
        ))}
        </RadioGroup>
        </FormControl>
      </List>
    </Paper>
    
    <Button variant='contained' sx={{borderRadius:0}}  startIcon={<FilterAlt/>}>
    စစ်ထုတ်ရန်
</Button>
    </Fragment>
  );

  return (
    <div>
        <React.Fragment key='right'>              
        <ShowAllAppBarComponent history={history} filterAction={toggleDrawer('right',true)}/>      
          <Drawer
            anchor='right'
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
          {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}