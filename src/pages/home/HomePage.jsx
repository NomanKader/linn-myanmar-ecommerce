import React, { useEffect, useState } from "react";
import { Typography, Grid, Card, CardMedia, CardContent } from "@mui/material";
import { ArrowBack, ArrowForward, DoubleArrow } from "@mui/icons-material";
import AppBarComponent from "../../components/AppBar/AppBarComponent";
import CauroselComponent from "../../components/Caurosel/CauroselComponent";
import GetAnnouncementAPI from "../../api/announcement/AnnouncementGetController";
import theme from "../../theme";
import SubHeaderComponent from "../../components/Typography/SubHeaderComponent";
import SeeMoreComponent from "../../components/Icon/SeeMoreComponent";
import HomePageGridComponent from "../../components/Grid/HomePageGridComponent";
import flashData from "../../data/FlashList";
import ProductListAPI from "../../api/product/ProductListController";
import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
export default function HomePage({history}) {
  const [productList, setProductList] = useState(null);
  useEffect(() => {
    //GetAnnouncementAPI();
    const gettingProductList = async () => {
      await ProductListAPI(setProductList);
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
        <HomePageGridComponent productList={productList} />
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
          <HomePageGridComponent productList={productList} />
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
          <HomePageGridComponent productList={productList} />
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
          <HomePageGridComponent productList={productList} />
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
          <HomePageGridComponent productList={productList} />
        )}
      </div>
      {productList !== null &&
      <BottomNavigationBarComponent history={history}/>
      }
    </div>
  );
}
