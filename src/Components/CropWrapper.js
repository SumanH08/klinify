import React from "react";
import UploadImage from "./UploadImage.js";
import CropImage from "./CropImage.js";
import SaveImage from "./SaveImage.js";
import PrintPreview from "./PrintPreview.js";
import { Container } from "reactstrap";

class CropWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedImage: "",
      isUploaded: false,
      croppedImg: "",
      isSaveClicked: false,
      ImgForPreview: "",
      imgWidth: 0,
      imgHeight: 0
    };
  }

  fileOnUpload = (event, imgWidth, imgHeight) => {
    if (event.target.files[0].size / 1024 >= 1000) {
      alert("Please upload a smaller file");
      return;
    }
    this.setState({ imgWidth: imgWidth, imgHeight: imgHeight });
    this.setState(
      {
        uploadedImage: event.target.files[0]
      },
      function() {
        this.setState({ isUploaded: true });
      }
    );
  };

  updateCroppedImg = newCanvas => {
    this.setState({ isClicked: true });
    this.setState({ croppedImg: newCanvas });
  };

  saveImageOnClick = () => {
    this.setState({ isSaveClicked: true });
    this.sendCroppedImgToAPI(this.state.croppedImg);
  };

  sendCroppedImgToAPI = croppedImg => {
    this.saveImage(croppedImg)
      .then(res => {
        this.setState({ ImgForPreview: res });
      })
      .catch(err => {
        console.log(err);
      });
  };

  saveImage = croppedImg => {
    return Promise.resolve("http://lorempixel.com/800/100/cats/");
  };

  clearInput = () => {
    this.setState({
      isUploaded: false,
      isSaveClicked: false
    });
  };

  render() {
    let cropComponent;
    if (this.state.isUploaded) {
      cropComponent = (
        <div>
          <CropImage
            uploadedImage={this.state.uploadedImage}
            onChange={this.onChange}
            updateCroppedImg={this.updateCroppedImg}
            imgWidth={this.state.imgWidth}
            imgHeight={this.state.imgHeight}
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
          <div style={{ marginBottom: "24px" }}>
            <div style={{ display: "inline-block" }}>
              <SaveImage
                isSaveClicked={this.state.isSaveClicked}
                saveImageOnClick={this.saveImageOnClick}
              />
            </div>
            <div style={{ display: "inline-block", float: "right" }}>
              <PrintPreview
                isSaveClicked={this.state.isSaveClicked}
                ImgForPreview={this.state.ImgForPreview}
              />
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default CropWrapper;
