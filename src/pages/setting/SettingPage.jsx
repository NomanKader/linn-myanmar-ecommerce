import BottomNavigationBarComponent from "../../components/NavigationBar/BottomNavigationBarComponent";
import ShowAllAppBarComponent from "../../components/AppBar/ShowAllAppBarComponent";
import SettingPaprtComponent from "../../components/Paper/SettingPaperComponent";
export default function SettingPage({history}) {
  const data=[
    {
      title:"ဝင်ရန်/မှတ်ပုံတင်ရန်",
      icon:"Login"
    },
    {
      title:"အော်ဒါမှာထားခဲ့သည့်စာရင်း",
      icon:"History"
    },
    {
      title:"ကြိုက်နှစ်သက်သည့်ပစ္စည်း",
      icon:"Favourite"
    },
    {
      title:"အမှတ်လွဲပြောင်းမှု",
      icon:"Transfer"
    },
    {
      title:"ပရိုမိုရှင်းလက်မှတ်များ",
      icon:"Promotion"
    },
    {
      title:"အမှတ်ပေးအစီအစဉ်",
      icon:"Point"
    },
    {
      title:"ကုန်ပစ္စည်းဖြန့်ချီခြင်း",
      icon:"Shipping"
    },
    {
      title:"ဘာသာစကားများ",
      icon:"Translate"
    },
    {
      title:"ကျွန်ပ်တို့အကြောင်း",
      icon:"Info"
    },
    {
      title:"ရှင်းလင်းချက်",
      icon:"Detail"
    },
    {
      title:"App Version(1.7.6",
      icon:"Version"
    },
    {
      title:"အကောင့်မှထွက်ရန်",
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