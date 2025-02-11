import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import PageContent from "./layout/PageContent";

function App() {


  return (
    <Router>
      <PageContent />
      <Switch>
        <Route />
      </Switch>
    </Router>
  )
}

export default App
