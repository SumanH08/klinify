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
