import React from "react";
import ReactCrop from "react-image-crop";

class CropImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      crop: {
        x: 20,
        y: 10,
        width: 30,
        height: 10
      },
      pixelCrop: {
        x: 20,
        y: 10,
        width: 30,
        height: 10
      },
      maxWidth: 0,
      maxHeight: 0
    };
  }

  onChange = (crop, pixelCrop) => {
    this.setState({ crop: crop, pixelCrop: pixelCrop });
    this.getCroppedImg(this.props.uploadedImage, this.state.pixelCrop, "hello");
  };

  getCroppedImg = (image, pixelCrop, fileName) => {
    const canvas = document.createElement("canvas");
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext("2d");
    var img = new Image();
    img.onload = function() {
      ctx.drawImage(
        img,
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height,
        0,
        0,
        pixelCrop.width,
        pixelCrop.height
      );
      document.getElementById("preview").innerHTML = "";
      document.getElementById("preview").appendChild(canvas);
    };
    img.src = URL.createObjectURL(this.props.uploadedImage);
  };

  onComplete = crop => {
    //maxWidth and maxHeight here are relative to the display image which is made to fit //"image-wrapper" dimensions and the visual need not be 800*100
    this.setState({
      maxWidth: 800 * 100 / this.props.imgWidth,
      maxHeight: 100 * 100 / this.props.imgHeight
    });
    const completedCanvas = document.getElementById("preview").innerHTML;
    this.getCroppedImg(this.props.uploadedImage, this.state.pixelCrop, "hello");
    // this.props.updateCroppedImg(completedCanvas);
  };

  render() {
    return (
      <div>
        <div className="image-wrapper">
          <ReactCrop
            src={URL.createObjectURL(this.props.uploadedImage)}
            crop={this.state.crop}
            onChange={this.onChange}
            onImageLoaded={this.handleImageLoaded}
            onComplete={this.onComplete}
            maxWidth={this.state.maxWidth}
            maxHeight={this.state.maxHeight}
          />
        </div>
        <div id="preview" />
      </div>
    );
  }
}

export default CropImage;
