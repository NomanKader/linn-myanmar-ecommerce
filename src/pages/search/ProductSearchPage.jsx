import { ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchBarComponent from "../../components/AppBar/SearchBarComponent";
import theme from "../../theme";
import ShowAllGridComponent from "../../components/Grid/ShowAllGridComponent";
import CircularProgressComponent from "../../components/Progress/CircularProgressComponent";
import NoItemFoundComponent from "../../components/Paper/NoItemFoundComponent";
export default function ProductSearchPage({ history }) {    
  const [productList, setProductList] = useState([]);
  const [showLoading, setShowLoading] = useState(false);
  const [firstLoad,setFirstLoad]=useState(true);  
  const titleStyle = {
    fontWeight:'bold',
    marginTop:20,
    marginLeft:20
  };
  return (
    <ThemeProvider theme={theme}>
      <SearchBarComponent
        setProductList={setProductList}
        setShowLoading={setShowLoading}
        setFirstLoad={setFirstLoad}
      />
      {productList != null
        && productList.map(
            (item, index) =>
              (item.title = "Products" ? (
                <>
                  <Typography variant="h6" sx={{fontWeight:'bold',marginTop:5,marginLeft:1}}>{item.title}</Typography>
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
          <p>
           <NoItemFoundComponent/>
          </p>  
          }  
    </ThemeProvider>
  );
}
