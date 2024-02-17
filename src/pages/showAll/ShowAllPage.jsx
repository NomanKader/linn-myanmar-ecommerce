import { Fragment, useState } from "react";
import { useEffect } from "react";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";
import ShowAllGridComponent from "../../components/Grid/ShowAllGridComponent";
import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
import CircularProgressComponent from "../../components/Progress/CircularProgressComponent";
import ProductListAPI from "../../api/product/ProductListController";
import FilterDrawerComponent from "../../components/Drawer/FilterDrawerComponent";
export default function ShowAllPage({ history }) {
  const [productList, setProductList] = useState(null);
  const [path,setPath]=useState('');
  useEffect(() => {
    //read the params
    const params = new URLSearchParams(window.location.search);
    let request = params.get("request");
    if(request=='FLASH'){
      request='FLASH_SALE'
      setPath(request);
    }
    else if(request=='အသစ်ရောက်သောပစ္စည်းများ'){
      request='NEW_ARRIVAL'
      setPath(request);
    }
    else if(request=='ရောင်းအားအကောင်းဆုံးပစ္စည်းများ'){
      request='BEST_SELLER'
      setPath(request);
    }
    else if(request=='ရနိုင်သောပစ္စည်းများ'){
      request='RECOMMENDED'
      setPath(request)
    }
    else{
      request='DEFAULT'
      setPath(request);
    }
    const gettingProductList = async () => {
      console.log("Path",path);
      await ProductListAPI(setProductList,request);
    };
    gettingProductList();
  }, []);
  return (
    <>
      <Fragment>
        <FilterDrawerComponent
          history={history}
          setProductList={setProductList}
        />
        {productList == null ? (
          <CircularProgressComponent />
        ) : (
          <>
            <ShowAllGridComponent productList={productList} path={path} history={history} />
            <BottomNavigationBarComponent history={history} />
          </>
        )}
      </Fragment>
    </>
  );
}
