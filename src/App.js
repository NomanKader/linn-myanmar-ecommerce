import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
import HomePage from "./pages/home/HomePage";
import ShowAllPage from "./pages/showAll/ShowAllPage";
import CartPage from "./pages/cart/CartPage";
import BlogPage from "./pages/blog/BlogPage";
import SettingPage from "./pages/setting/SettingPage";
const App=()=>{
  return(
    <Router>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/showAll" exact component={ShowAllPage} />
      <Route path="/cart" exact component={CartPage} />
      <Route path="/blog" exact component={BlogPage} />
      <Route path="/setting" exact component={SettingPage} />
    </Switch>
    </Router>
  )
}
export default App;