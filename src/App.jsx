import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from "./pages/ProductDetail";
import AuthPage from "./pages/AuthPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import TopCategories from "./components/TopCategories";
import ShoppingPage from "./pages/ShoppingPage";
import CartPage from "./pages/CartPage";
import PrivateRoute from "./components/auth/PrivateRoute";
import OrderPage from "./pages/OrderPage";

function App() {
  return (
    <Router>
      <PageContent> 
        <Switch>
        <Route path="/auth" component={AuthPage} />
          <Route exact path="/" component={HomePage} />
          <Route path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route exact path="/" component={TopCategories} />
          <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShoppingPage} />
          <Route path="/cart" component={CartPage} />
          <PrivateRoute path="/address" component={OrderPage} />
        </Switch>
      </PageContent> 
      <ToastContainer />
    </Router>
  )
}

export default App