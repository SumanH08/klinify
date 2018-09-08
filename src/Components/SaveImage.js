import React from "react";
import { Button } from "reactstrap";

class SaveImage extends React.Component {
  render() {
    return (
      <Button color="primary" onClick={this.props.saveImageOnClick}>
        Save image
      </Button>
    );
  }
}

export default SaveImage;

// <a href={`/print?img=${this.props.ImgForPreview}`} target="_blank">
//   Save image
// </a>

// openPreview = () => {
//   this.props.openPreview();
// };
