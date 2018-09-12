import React from "react";
import { Input, Button } from "reactstrap";

class UploadImage extends React.Component {
  fileOnUpload = event => {
    console.log("file here", event.target.files[0]);
    if (event.target.files[0] == undefined) {
      return;
    } else {
      this.props.fileOnUpload(event);
    }
  };

  clearInput = () => {
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
