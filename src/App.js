import React, { Component } from "react";
import CropWrapper from "./Components/CropWrapper.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome to Klinify image cropper</h1>
        <p>Upload an image of size less than 1 MB to crop it</p>
        <CropWrapper />
      </div>
    );
  }
}

export default App;
