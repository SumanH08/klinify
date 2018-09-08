import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

class PrintPreview extends React.Component {
  render() {
    return (
      <Link to={`/print?img=${this.props.ImgForPreview}`} target="_blank">
        <Button color="primary" disabled={!this.props.isSaveClicked}>
          Print and preview image
        </Button>
      </Link>
    );
  }
}

export default PrintPreview;
