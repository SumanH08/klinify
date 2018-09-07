import React from "react";

class displayCroppedImg extends React.Component {
  render() {
    let displayCroppedImg;
    if (this.props.isClicked) {
      displayCroppedImg = (
        <img src={this.props.croppedImgUrl} alt="cropped-img" />
      );
    }
    return <div>{displayCroppedImg}</div>;
  }
}

export default displayCroppedImg;
