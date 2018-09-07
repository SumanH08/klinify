import React, { Component } from "react";
import CropWrapper from "./Components/CropWrapper.js";
import PrintPage from "./Components/PrintPage.js";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Klinify image cropper</h1>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={CropWrapper} />
            <Route exact path="/print" component={PrintPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
