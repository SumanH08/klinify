import React from "react";
import UploadImage from "./UploadImage.js";
import CropImage from "./CropImage.js";
import DisplayCroppedImg from "./DisplayCroppedImg.js";
import PrintPreview from "./PrintPreview.js";
import { Container } from "reactstrap";

class CropWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImage: "",
      isUploaded: false,
      croppedImgUrl: "",
      isClicked: false,
      ImgForPreview: ""
    };
  }

  fileOnUpload = event => {
    if (event.target.files[0].size / 1024 >= 1000) {
      alert("Please upload a smaller file");
      return;
    }
    this.setState(
      {
        uploadedImage: URL.createObjectURL(event.target.files[0])
      },
      function() {
        this.setState({ isUploaded: true });
      }
    );
  };

  onChange = values => {
    // console.log("Values inside parent here", values);
  };

  handleClick = cropFunc => {
    this.setState({ isClicked: true });
    this.setState({ croppedImgUrl: cropFunc });
    this.sendCroppedImgToAPI(cropFunc);
  };

  clearInput = () => {
    this.setState({ isUploaded: false, isClicked: false });
  };

  sendCroppedImgToAPI = croppedImgUrl => {
    this.saveImage(croppedImgUrl)
      .then(res => {
        console.log("preview image here", res);
        this.setState({ ImgForPreview: res });
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveImage = croppedImgUrl => {
    return Promise.resolve("http://lorempixel.com/800/100/cats/");
  };

  render() {
    let cropComponent;
    if (this.state.isUploaded) {
      cropComponent = (
        <div>
          <CropImage
            uploadedImage={this.state.uploadedImage}
            onChange={this.onChange}
            handleClick={this.handleClick}
            isClicked={this.state.isClicked}
            croppedImgUrl={this.state.croppedImgUrl}
          />
          <DisplayCroppedImg
            isClicked={this.state.isClicked}
            croppedImgUrl={this.state.croppedImgUrl}
          />
          <PrintPreview
            isClicked={this.state.isClicked}
            ImgForPreview={this.state.ImgForPreview}
          />
        </div>
      );
    }
    return (
      <div>
        <Container>
          <h1>Welcome to image cropper</h1>
          <UploadImage
            fileOnUpload={this.fileOnUpload}
            isUploaded={this.state.isUploaded}
            clearInput={this.clearInput}
          />
          {cropComponent}
        </Container>
      </div>
    );
  }
}

export default CropWrapper;
