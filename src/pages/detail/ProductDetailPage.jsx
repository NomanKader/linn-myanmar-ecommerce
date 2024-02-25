import React, { useEffect, useState } from "react";
import DetailAppBarComponent from "../../components/AppBar/DetailAppBarComponent";
import ProductDetailTabComponent from "../../components/Tab/ProductDetailTabComponent";
import ProductDetailCauroselComponent from "../../components/Caurosel/ProductDetailCauroselComponent";
import ShowAllGridComponent from "../../components/Grid/ShowAllGridComponent";
import ProductDetailAPI from "../../api/product/ProductDetailController";
import {
  Button,
  CircularProgress,
  Grid,
  IconButton,
  Paper,
  ThemeProvider,
  Typography,
} from "@mui/material";
import theme from "../../theme";
import {
  Add,
  AddCircle,
  AddOutlined,
  RemoveCircle,
  ShoppingBag,
  ShoppingCart,
} from "@mui/icons-material";
import RelatedProductListAPI from '../../api/product/RelatedProductListController';
const ProductDetailPage = ({ history }) => {
  const [productDetail, setProductDetail] = useState();
  const [productImages, setProductImages] = useState([]);
  const [productList, setProductList] = useState([]);
  const [relatedProductList,setRelatedProductList]=useState([]);
  const [productQuantity,setProductQuantity]=useState(0);
  useEffect(() => {
    const currentUrl = window.location.href;
    const urlSearchParams = new URLSearchParams(new URL(currentUrl).search);
    const id = urlSearchParams.get("id");
    ProductDetailAPI(id, setProductDetail, setProductImages, setProductList);
    RelatedProductListAPI(id,setRelatedProductList);
  }, []);
  const cartAction = () => {
    history.push('/cart')
  };
  const handleProductQuantity=(status)=>{
    if(status=='plus'){
      setProductQuantity(productQuantity+1);
    }
    else{
      if(productQuantity!=0){
        setProductQuantity(productQuantity-1);
      }
      else{
        setProductQuantity(0);
      }
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <DetailAppBarComponent history={history} cartAction={cartAction} title={"ကုန်ပစ္စည်းအသေးစိတ်"} />
      {(productDetail != null && relatedProductList !=null) ? (
        <div>
          <Paper
            elevation={3}
            sx={{
              m: 3,
              borderRadius: 3,
              display: "flex",
              flexDirection: {
                lg: "column",
                xs: "row",
                justifyContent: "center",
              },
            }}
          >
            {/* <Button variant="contained" onClick={()=>console.log("Product Image",productImages)}>Get PRoduct Images</Button> */}
            <Grid
              container
              spacing={2}
              style={{ display: "flex", flexDirection: "column", margin: "1%" }}
            >
              <Grid item lg={12}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", ml: 2, mb: 1, mt: 1 }}
                >
                  {productDetail.name}
                </Typography>
              </Grid>
              <Grid item lg={10}>
                <ProductDetailCauroselComponent productImages={productImages} />
              </Grid>
              <Grid
                item
                lg={4}
                style={{ flexDirection: "column", display: "flex" }}
              >
                <Typography variant="subtitle" sx={{ ml: 3, mt: 3 }}>
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    ဈေးနူန်း -{" "}
                  </span>
                  {productDetail?.productPricings[0]?.customerType ==
                  "RETAIL_SALE"
                    ? parseInt(
                        productDetail?.productPricings[0]?.pricePerUnit
                      || 0).toLocaleString() + " Ks"
                    : parseInt(
                        productDetail?.productPricings[1]?.pricePerUnit
                      || 0).toLocaleString() + " Ks"}
                </Typography>
                <Typography variant="subtitle" sx={{ ml: 3, mt: 3 }}>
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    အလုံးရေ -{" "}
                  </span>
                  {productDetail.packageQty + " Tablets"}
                </Typography>
                <Typography variant="subtitle" sx={{ ml: 3, mt: 3 }}>
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      fontWeight: "bold",
                    }}
                  >
                    ကုန်ဆုံးရက် -{" "}
                  </span>
                  {productDetail.nearestExpiredDate}
                </Typography>
              </Grid>
              <div>
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    mt: 3,
                    ml: 3,
                    alignItems: "center",
                  }}
                >
                  <IconButton
                    aria-label="delete"
                    size="large"
                    style={{ fontSize: 30 }}
                    onClick={()=>handleProductQuantity('plus')}
                  >
                    <AddCircle fontSize="inherit" />
                  </IconButton>
                  <Typography variant="h6">{productQuantity}</Typography>
                  <IconButton
                    aria-label="delete"
                    size="large"
                    style={{ fontSize: 30 }}
                    onClick={()=>handleProductQuantity('minus')}
                  >
                    <RemoveCircle fontSize="inherit" />
                  </IconButton>
                </Grid>
              </div>
              <Grid item lg={12}>
                <ProductDetailTabComponent productDetail={productDetail} />
              </Grid>
            </Grid>
          </Paper>
          <Typography variant="h6" sx={{ ml: 3, fontWeight: "bold" }}>
            ဆက်စပ်ပစ္စည်းများ
          </Typography>
          {relatedProductList!=null &&
          <div style={{ marginLeft: 20, marginBottom: "10%" }}>
            <ShowAllGridComponent
              productList={relatedProductList}
              path={"/"}
              history={history}
            />
          </div>}
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              flex: 1,
              justifyContent: "center",
              flexDirection: "row",
              position: "fixed",
              bottom: 0,
              right: 0,
              mt: 3,              
            }}
          >
            <Grid item lg={6}>
              <Button
                sx={{ m: 1, p: 2, fontWeight: "bold",width:{lg:700,xs:150},ml:2 }}
                
                variant="contained"
                startIcon={<ShoppingBag />}
              >
                ယခုဝယ်ရန်
              </Button>
            </Grid>
            <Grid item lg={6}>
              <Button
                sx={{ m: 1, p: 2, fontWeight: "bold",width:{lg:680,xs:180},mr:3 }}                
                variant="contained"
                startIcon={<ShoppingCart />}
              >
                ခြင်းထဲထည့်ရန်
              </Button>
            </Grid>
          </Grid>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress color="primary" />
        </div>
      )}
    </ThemeProvider>
  );
};
export default ProductDetailPage;
