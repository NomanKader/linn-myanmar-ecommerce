import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import LoginPage from "./pages/auth/LoginPage";
const App=()=>{
  return(
    <Router>
    <Switch>
      <Route path="/" exact component={LoginPage} />
    </Switch>
    </Router>
  )
}
export default App;