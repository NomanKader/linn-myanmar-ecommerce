import React,{useEffect, useState} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { ArrowBack, Send, WindowOutlined } from '@mui/icons-material';
import ProductSearchAPI from '../../api/product/SearchProductController';
import { Typography } from '@mui/material';
import SearchBlogAPI from '../../api/blog/SearchBlogController';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function SearchBarComponent({setProductList,setShowLoading,setFirstLoad}) {
  const [keyword,setKeyword]=useState('');  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const [title,setTitle]=useState('');
  useEffect(()=>{
    const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Get a specific parameter
const param1Value = urlParams.get('request');
setTitle(param1Value);
// param1Value=='Product' &&
// ProductSearchAPI('',setProductList,setShowLoading,setFirstLoad);
  },[])
  const handleSearch=()=>{
    console.log("Keyword",keyword);
    const existingSearchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
    existingSearchHistory.push(keyword);
    const updatedSearchHistoryString = JSON.stringify(existingSearchHistory);
    if(window.location.pathname=='/search'){
      localStorage.setItem('searchHistory', updatedSearchHistoryString);    
    }
    
    const request=window.location.pathname;
    if(request=='/search'){
      ProductSearchAPI(keyword,setProductList,setShowLoading,setFirstLoad);
    }
    else{
      SearchBlogAPI(keyword,setProductList,setShowLoading);
    }
    
  }
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };  
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
    onClick={()=>handleSearch()}
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit" >
          <Badge  color="error">
            <Send />
          </Badge>
        </IconButton>
        <p>Search</p>
      </MenuItem>    
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
            onClick={()=>window.history.back()}
          >
            <ArrowBack />
          </IconButton>
          <Typography variant='h6' sx={{mr:1}}>{title}</Typography>
          <Search          
          onChange={(e,v)=>setKeyword(e.target.value)}          
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase            
             sx={{width:{lg:1200,xs:120}}}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}              
              onKeyDown={(e,v)=>e.keyCode==13&&handleSearch()}
              autoFocus={true}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {window.location.pathname!='/blog' &&
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Send />
            </IconButton>
          </Box>}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}