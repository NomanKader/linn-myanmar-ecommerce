import { Chip, Divider, Grid, List, ListItem, Paper, Stack, ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBarComponent from "../../components/AppBar/SearchBarComponent";
import theme from "../../theme";
import ShowAllGridComponent from "../../components/Grid/ShowAllGridComponent";
import CircularProgressComponent from "../../components/Progress/CircularProgressComponent";
import NoItemFoundComponent from "../../components/Paper/NoItemFoundComponent";
import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
import GetPopularProductAPI from '../../api/product/PopularProductListController';
import ProductSearchAPI from "../../api/product/SearchProductController";
export default function ProductSearchPage({ history }) {    
  const [productList, setProductList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [firstLoad,setFirstLoad]=useState(true);  
  const [popularList,setPopularList]=useState([]);
  const [historyList,setHistoryList]=useState([]);
  
  useEffect(()=>{
    GetPopularProductAPI(setPopularList);
    setHistoryList(localStorage.getItem('searchHistory'));
  },[])
  const handlePopularSearch=(keyword)=>{
    ProductSearchAPI(keyword,setProductList,setShowLoading,setFirstLoad);
  }
  return (
    <ThemeProvider theme={theme}>
      <SearchBarComponent
        setProductList={setProductList}
        setShowLoading={setShowLoading}
        setFirstLoad={setFirstLoad}
      />
      <Paper elevation={3} sx={{ padding: 3 }}>
      <Typography variant="h5">Popular Searches</Typography>
      <Stack
        direction="row"
        spacing={1}
        sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}
      >
        {popularList.map((item,index) => (
          <Chip
            key={index}
            color="primary"
            size="medium"
            style={{ fontSize: 15, width: 'auto', marginTop: 30, marginLeft: 10 }}
            label={item}
            onClick={()=>handlePopularSearch(item)}
          />
        ))}
      </Stack>
    </Paper>
    {/* History */}
    {productList.length==0 &&
      <Paper sx={{mt:3,p:3,alignItems:'center',justifyContent:'center'}}>
        <Grid container direction='row' spacing={2} sx={{display:'flex',flex:1}}>
          <Grid item xs={6} lg={6}>
          <Typography variant="body1" sx={{textAlign:'start',ml:3,fontWeight:'bold'}}>ရှာဖွေမှတ်တမ်း</Typography>
          </Grid>
          <Grid item xs={6} lg={6}>
          <Typography variant="body2" sx={{textAlign:'end',mr:3,color:theme.palette.primary.main,fontWeight:'bold',cursor:'pointer'}} onClick={()=>[localStorage.clear(),window.location.reload()]}>ဖျက်ရန်</Typography>
          </Grid>
          <Divider sx={{width:'100%',mt:3}}/>
          <Stack
        direction="row"
        spacing={1}
        sx={{ overflowX: 'auto', whiteSpace: 'nowrap',ml:2 }}
      > 
      {localStorage.getItem('searchHistory')!=null &&
        JSON.parse(localStorage.getItem('searchHistory') || [])
        .filter((item) => item.trim() !== '')
        .map((item,index)=>(
          <Chip            
          key={index}
          color="primary"
          size="medium"
          style={{ fontSize: 15, width: 'auto', marginTop: 30, marginLeft: 10 }}
          label={item}
          onClick={()=>handlePopularSearch(item)}
        />
    
        ))}        
        
          </Stack>
        </Grid>        
      </Paper>
    }
      {productList != null
        && productList.map(
            (item, index) =>
              (item.title = "Products" ? (
                <>
                  <Typography variant="h6" sx={{fontWeight:'bold',marginTop:3,marginLeft:1}}>{item.title}</Typography>
                  <ShowAllGridComponent
                    productList={item.data}
                    key={index}
                    history={history}
                  />
                </>
              ) : (
                (item.title = "News" ? (
                  <>
                    <Typography variant="h6"  sx={{fontWeight:'bold',marginTop:5,marginLeft:1}} >{item.title}</Typography>
                    <ShowAllGridComponent
                      productList={item.data}
                      key={index}
                      history={history}
                    />
                  </>
                ) : (
                  (item.title = "Brands" ? (
                    <>
                      <Typography variant="h6"  sx={{fontWeight:'bold',marginTop:5,marginLeft:1}}>{item.title}</Typography>
                      <ShowAllGridComponent
                        productList={item.data}
                        key={index}
                        history={history}
                      />
                    </>
                  ) : (
                    (item.title = "Categories" ? (
                      <>
                        <Typography variant="h6"  sx={{fontWeight:'bold',marginTop:5,marginLeft:1}}>{item.title}</Typography>
                        <ShowAllGridComponent
                          productList={item.data}
                          key={index}
                          history={history}
                        />
                      </>
                    ) : (
                       <></>
                    ))
                  ))
                ))
              ))
          )}
          {showLoading==true &&
          <CircularProgressComponent/>
          }
          {(showLoading==false && productList.length==0 && firstLoad==false) &&
          
           <NoItemFoundComponent/>
          
          }                  
      <BottomNavigationBarComponent history={history}/>
    </ThemeProvider>
  );
}
