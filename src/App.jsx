import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./components/ShopPage";
import SignupPage from "./pages/SignupPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <Router>
      <PageContent> 
        <Switch>
          <Route path="/signup" component={SignupPage} />
          <Route path="/login" component={LoginPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </PageContent> 
      <ToastContainer />
    </Router>
  )
}

export default App