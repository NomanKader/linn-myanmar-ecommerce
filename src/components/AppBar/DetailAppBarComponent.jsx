import React,{useEffect,useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { ArrowLeft, ArrowLeftSharp, Filter, FilterAlt, ShoppingBagOutlined, ShoppingCart, West } from '@mui/icons-material';
import { ThemeProvider } from '@emotion/react';
import theme from '../../theme';

export default function DetailAppBarComponent({history,cartAction,title}) {
    const [header,setHeader]=React.useState("");
    const [showFilter,setShowFilter]=useState(false);
    //setHeader from reading url params ?request=Flash
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search);
        setHeader(urlParams.get('id'));               
        
    },[])
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>window.history.back()}
          >
            <West/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {title}
          </Typography>
          {header!==null &&
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={cartAction}
          >
            <ShoppingCart/>
          </IconButton>}
        </Toolbar>
      </AppBar>
    </Box>
    </ThemeProvider>
  );
}
