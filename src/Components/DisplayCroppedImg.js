import React from "react";

class displayCroppedImg extends React.Component {
  render() {
    let displayCroppedImg;
    if (this.props.isClicked) {
      displayCroppedImg = (
        <img
          style={{ maxWidth: "800px", maxHeight: "400px" }}
          src={this.props.croppedImgUrl}
          alt="cropped-img"
        />
      );
    }
    return <div className="crop-wrapper">{displayCroppedImg}</div>;
  }
}

export default displayCroppedImg;
