import { Fragment, useState } from 'react';
import { useEffect } from "react";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";
import ShowAllGridComponent from '../../components/Grid/ShowAllGridComponent';
import BottomNavigationBarComponent from '../../components/NavigationBar/BottomNavigationBarComponent'
import CircularProgressComponent from '../../components/Progress/CircularProgressComponent';
import ProductListAPI from '../../api/product/ProductListController';
import FilterDrawerComponent from '../../components/Drawer/FilterDrawerComponent';
export default function ShowAllPage({history}) {
    const [request, setRequest] = useState(null);
    const [productList, setProductList] = useState(null);
    useEffect(() => {
        //read the params
        const params = new URLSearchParams(window.location.search);
        const request = params.get("request");
        setRequest(request);
        const gettingProductList=async()=>{
          await ProductListAPI(setProductList);
        }
        gettingProductList();
    },[])
  return (
    <>
      {productList == null ? <CircularProgressComponent/> : 
      <Fragment>
      <FilterDrawerComponent history={history}/>  
      <ShowAllGridComponent productList={productList} />
      <BottomNavigationBarComponent history={history}/>
      </Fragment>      
      }
    </>
  );
}   