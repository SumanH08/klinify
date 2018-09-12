import React from "react";
import { Input, Button } from "reactstrap";

class UploadImage extends React.Component {
  fileOnUpload = event => {
    event.persist();
    var self = this;
    var image, imgWidth, imgHeight;
    var file = event.target.files[0];
    if (!file) {
      return null;
    }
    image = new Image();
    image.onload = function() {
      imgWidth = this.width;
      imgHeight = this.height;
      self.props.fileOnUpload(event, imgWidth, imgHeight);
    };
    image.src = URL.createObjectURL(file);
  };

  clearInput = () => {
    document.getElementById("file").value = "";
    this.props.clearInput();
  };

  render() {
    let displayClearBtn;
    if (this.props.isUploaded) {
      displayClearBtn = (
        <Button color="warning" onClick={this.clearInput}>
          Clear Input
        </Button>
      );
    }
    return (
      <div>
        <div style={{ display: "inline-block" }}>
          Step 1. Upload Image
          <Input
            type="file"
            id="file"
            accept="image"
            onChange={this.fileOnUpload}
          />
        </div>
        <div style={{ display: "inline-block", float: "right" }}>
          {displayClearBtn}
        </div>
      </div>
    );
  }
}

export default UploadImage;
