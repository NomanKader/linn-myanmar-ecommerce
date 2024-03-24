import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import ShowAllPage from "./pages/showAll/ShowAllPage";
import CartPage from "./pages/cart/CartPage";
import BlogPage from "./pages/blog/BlogPage";
import SettingPage from "./pages/setting/SettingPage";
import TestDrawerComponent from "./test/drawer/TestDrawerComponent";
import ProductDetailPage from "./pages/detail/ProductDetailPage";
import RegisterPage from "./pages/auth/RegisterPage";
import ProductSearchPage from './pages/search/ProductSearchPage';
import BlogDetailPage from "./pages/detail/BlogDetailPage";
import AppleLoginTestPage from "./test/AppleLoginTest";
import PointHistoryList from "./test/PointHistoryTestPage";
const App=()=>{
  return(
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/showAll" exact component={ShowAllPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/blog" exact component={BlogPage} />
      <Route path="/blog/detail" exact component={BlogDetailPage} />
      <Route path="/setting" exact component={SettingPage} />
      <Route path="/detail" exact component={ProductDetailPage} />
      <Route path='/search' exact component={ProductSearchPage}/>
      <Route exact path='/login' component={LoginPage} /> 
      <Route exact path='/register' component={RegisterPage} /> 
      <Route exact path='/test/drawer' component={TestDrawerComponent} /> 
      <Route exact path='/test/applelogin' component={AppleLoginTestPage} /> 
      <Route exact path='/test/pointhistory' component={PointHistoryList}/>
    </Switch>
    </Router>
  )
}
export default App;