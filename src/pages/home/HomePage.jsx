import React, { Fragment, useEffect, useState } from "react";
import { Typography, Grid, Card, CardMedia, CardContent, CircularProgress } from "@mui/material";
import { ArrowBack, ArrowForward, DoubleArrow } from "@mui/icons-material";
import AppBarComponent from "../../components/AppBar/AppBarComponent";
import CauroselComponent from "../../components/Caurosel/CauroselComponent";
import GetAnnouncementAPI from "../../api/announcement/AnnouncementGetController";
import theme from "../../theme";
import SubHeaderComponent from "../../components/Typography/SubHeaderComponent";
import SeeMoreComponent from "../../components/Icon/SeeMoreComponent";
import HomePageGridComponent from "../../components/Grid/HomePageGridComponent";
import CircularProgressComponent from '../../components/Progress/CircularProgressComponent';
import ProductListAPI from "../../api/product/ProductListController";
import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
export default function HomePage({history}) {
  const [productList, setProductList] = useState(null);  
  const [flashList,setFlashList]=useState(null);
  const [newList,setNewList]=useState(null);
  const [bestSellerList,setBestSellerList]=useState(null);
  const [availableList,setAvailableList]=useState(null);
  const [blogList,setBlogList]=useState(null);
  useEffect(() => {
    //GetAnnouncementAPI();
    sessionStorage.removeItem('isFilter');
    const gettingProductList = async () => {
      await ProductListAPI(setProductList,'BEST_SELLER');
      await ProductListAPI(setFlashList,'FLASH_SALE');
      await ProductListAPI(setNewList,'NEW_ARRIVAL');
      await ProductListAPI(setBestSellerList,'BEST_SELLER');
      await ProductListAPI(setAvailableList,'RECOMMENDED');
      await ProductListAPI(setBlogList,'DEFAULT');
    };
    gettingProductList();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.main,
        height: "100%",
      }}
    >
      <AppBarComponent />
      {productList!==null ?
      <div style={{cursor:'pointer'}}>
      <CauroselComponent />
      {/* Flash Sales Section */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            marginLeft: "10px",
          }}
        >
          <SubHeaderComponent subheader="Flash Sales" request="Flash" history={history} />
          <div style={{ display: "flex", alignItems: "center" }}>
            <SeeMoreComponent iconText="အားလုံးပြရန်" request="Flash" history={history} />
          </div>
        </div>
        <HomePageGridComponent productList={flashList} history={history} />
      </div>
      {/* အသစ်ရောက်သောပစ္စည်းများ */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            marginLeft: "10px",
          }}
        >
          <SubHeaderComponent subheader="အသစ်ရောက်သောပစ္စည်းများ" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <SeeMoreComponent iconText="အားလုံးပြရန်" request="အသစ်ရောက်သောပစ္စည်းများ" history={history} />
          </div>
        </div>
        {/* Product Grid */}
        {productList !== null && (
          <HomePageGridComponent productList={newList} history={history} />
        )}
      </div>
      {/* ရောင်းအားအကောင်းဆုံးပစ္စည်းများ */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            marginLeft: "10px",
          }}
        >
          <SubHeaderComponent subheader="ရောင်းအားအကောင်းဆုံးပစ္စည်းများ" />
          <div style={{ display: "flex", alignItems: "center" }}>
          <SeeMoreComponent iconText="အားလုံးပြရန်" request="ရောင်းအားအကောင်းဆုံးပစ္စည်းများ" history={history} />
          </div>
        </div>
        {/* Product Grid */}
        {productList !== null && (
          <HomePageGridComponent productList={bestSellerList} history={history} />
        )}
      </div>
      {/* ရနိုင်သောပစ္စည်းများ */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            marginLeft: "10px",
          }}
        >
          <SubHeaderComponent subheader="ရနိုင်သောပစ္စည်းများ" />
          <div style={{ display: "flex", alignItems: "center" }}>
          <SeeMoreComponent iconText="အားလုံးပြရန်" request="ရနိုင်သောပစ္စည်းများ" history={history} />
          </div>
        </div>
        {/* Product Grid */}
        {productList !== null && (
          <HomePageGridComponent productList={availableList} history={history}/>
        )}
      </div>
      {/* ထိပ်တန်းဆောင်းပါးများ */}
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            marginLeft: "10px",
          }}
        >
          <SubHeaderComponent subheader="ထိပ်တန်းဆောင်းပါးများ" />
          <div style={{ display: "flex", alignItems: "center" }}>
          <SeeMoreComponent iconText="အားလုံးပြရန်" request="ထိပ်တန်းဆောင်းပါးများ" history={history} />
          </div>
        </div>
        {/* Product Grid */}
        {productList !== null && (
          <HomePageGridComponent productList={blogList} history={history} />
        )}
      </div>
      </div>:
      <CircularProgressComponent/>
    }
      {productList !== null &&
      <BottomNavigationBarComponent history={history}/>
      }
    </div>
  );
}
