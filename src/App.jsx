import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./components/ShopPage";
import SignupPage from "./pages/SignupPage";

function App() {


  return (
    <Router>
      <PageContent> 
      <Switch>
      <Route path="/signup" component={SignupPage} />
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
      </PageContent> 
    </Router>
  )
}

export default App
