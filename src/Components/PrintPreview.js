import React from "react";
import { Button } from "reactstrap";

class PrintPreview extends React.Component {
  openPreview = () => {
    this.props.openPreview();
  };

  render() {
    let previewImg;
    if (this.props.isClicked) {
      previewImg = (
        <a href={`/print?img=${this.props.ImgForPreview}`} target="_blank">
          Preview image here
        </a>
      );
    }
    return <div>{previewImg}</div>;
  }
}

export default PrintPreview;
