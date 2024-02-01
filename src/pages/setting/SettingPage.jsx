import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
import AppBarComponent from '../../components/AppBar/AppBarComponent';
import { AppBar, Icon,Grid, Paper, Typography } from "@mui/material";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";
import { Login } from "@mui/icons-material";
import SettingPaprtComponent from "../../components/Paper/SettingPaperComponent";
export default function SettingPage({history}) {
  const data=[
    {
      title:"ဝင်ရန်/မှတ်ပုံတင်ရန်",
      icon:"Login"
    }
  ]
  return (
    <>
    <ShowAllAppBarComponent/>
      <SettingPaprtComponent data={data} history={history}/>
      <BottomNavigationBarComponent history={history}/>
    </>
  );
}