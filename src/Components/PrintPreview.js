import React from "react";
import { Input, Button } from "reactstrap";

class PrintPreview extends React.Component {
  render() {
    let previewImg;
    if (this.props.isClicked) {
      previewImg = (
        <Button>Preview image here {this.props.ImgForPreview}</Button>
      );
    }
    return <div>{previewImg}</div>;
  }
}

export default PrintPreview;
