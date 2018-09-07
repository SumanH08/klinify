import React from "react";
import { Cropper } from "react-image-cropper";
import { Button } from "reactstrap";

class CropImage extends React.Component {
  componentDidMount() {
    // console.log("Cropper data here", this.cropper);
  }

  handleClick = () => {
    // this.values = this.cropper.values();
    this.props.handleClick(this.cropper.crop());
  };

  onChange = values => {
    this.props.onChange(values);
  };

  render() {
    return (
      <div style={{ maxWidth: 800, maxHeight: 800 }}>
        crop image here alright
        <Cropper
          style={{ maxWidth: 800, maxHeight: 100 }}
          src={this.props.uploadedImage}
          ref={ref => {
            this.cropper = ref;
          }}
          onChange={this.onChange}
        />
        <Button onClick={this.handleClick.bind(this, this.values)}>Crop</Button>
      </div>
    );
  }
}

export default CropImage;
