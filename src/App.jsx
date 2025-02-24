import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./components/ShopPage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./pages/ProductDetail";
import AuthPage from "./pages/AuthPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TopCategories from "./components/TopCategories";

function App() {
  return (
    <Router>
      <PageContent> 
        <Switch>
        <Route path="/auth" component={AuthPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/product/:id" component={ProductDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={TopCategories} />
        </Switch>
      </PageContent> 
      <ToastContainer />
    </Router>
  )
}

export default App