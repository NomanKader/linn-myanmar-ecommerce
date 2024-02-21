import React,{useEffect} from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import { Article, Settings, ShoppingCart } from '@mui/icons-material';
import Paper from '@mui/material/Paper';


export default function BottomNavigationBarComponent({history}) {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  //check the path if it is / then setValue to Home 
  //if it is /blog then setValue to Blog
  //if it is /cart then setValue to Cart
  //if it is /setting then setValue to Setting
  useEffect(() => {
    const path = window.location.pathname;
    if (path === '/') {
      setValue(0);
    } else if (path === '/blog') {
      setValue(1);
    } else if (path === '/cart') {
      setValue(2);
    } else if (path === '/setting') {
      setValue(3);
    }
  },[])

  return (
    <Box sx={{ pb: 7 }} ref={ref}>
      <CssBaseline />

      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction onClick={()=>history.push('/')} label="Home" icon={<RestoreIcon />} />
          <BottomNavigationAction onClick={()=>history.push('/blog?request=Blog')} label="Blog" icon={<Article />} />
          <BottomNavigationAction onClick={()=>history.push('/cart')} label="Cart" icon={<ShoppingCart />} />
          <BottomNavigationAction onClick={()=>history.push('/setting')} label="Setting" icon={<Settings/>} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

