import { Fragment } from "react";
import theme from "../../theme";
import { DoubleArrow } from "@mui/icons-material";
import { Typography } from "@mui/material";
export default function SeeMoreComponent({iconText,request,history}){
  const handleSeeMore=()=>{
    //check request is Flash then history.push with params Flash
    request==='Flash'?
    history.push('/showAll?request='+request):
    request==='ထိပ်တန်းဆောင်းပါးများ'?
    history.push('/blog'):
    history.push('/showAll?request='+request)
  }
    return(
        <Fragment>
            <Typography
            variant="body2"
            color={theme.palette.text.main}
            style={{ marginRight: "8px", fontWeight: "bold",cursor:'pointer' }}
            onClick={()=>handleSeeMore()}
          >
            {iconText}
          </Typography>
          <DoubleArrow
            style={{
              fontSize: "20px",
              marginRight: "4px",
              color: theme.palette.text.main,
              cursor:'pointer'
            }}
          />
        </Fragment>
    )
}