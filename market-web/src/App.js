import "./App.css";
import MainPage from "./main";
import { Switch, Route } from "react-router-dom";
import ProductPage from "./product";
import UploadPage from "./upload";
function App() {
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <img src="./images (2)/images/icons/logo.png" alt="" />
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path={"/"}>
            <MainPage />
          </Route>
          <Route exact={true} path={"/products/:id"}>
            <ProductPage />
          </Route>
          <Route exact={true} path={"/upload"}>
            <UploadPage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
