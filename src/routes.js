import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Header from "./components/Header";
import Filme from "./pages/filme";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/filme/:id" component={Filme} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
