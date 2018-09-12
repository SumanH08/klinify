import React from "react";
import { Cropper } from "react-image-cropper";
import { Button } from "reactstrap";

class CropImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedRatio: 0,
      cWidth: 800,
      cHeight: 100,
      cX: 0,
      cY: 0
    };
  }

  handleClick = () => {
    this.values = this.cropper.values();
    this.props.handleClick(this.cropper.crop());
  };

  onChange = values => {
    this.values = this.cropper.values();
    // this.props.onChange(values);
    if (this.values.display.width > 800) {
      this.setState({
        cWidth: 800
      });
    } else {
      this.setState({
        cWidth: this.values.display.width
      });
    }

    if (this.values.display.height > 100) {
      console.log("more than 100");
      this.setState({
        cHeight: 100
      });
      console.log("More again");
    } else {
      console.log("less than 100");
      this.setState({
        cHeight: this.values.display.height
      });
    }

    this.setState({ cX: this.values.display.x, cY: this.values.display.y });

    console.log(
      "values here",
      this.values.display.width,
      this.values.display.height
    );
  };

  render() {
    console.log(this.state.cWidth, this.state.cHeight);
    return (
      <div>
        <div style={{ height: "1000px" }}>
          <div className="image-wrapper">
            <Cropper
              src={this.props.uploadedImage}
              width={this.state.cWidth}
              height={this.state.cHeight}
              originX={this.state.cX}
              originY={this.state.cY}
              fixedRatio={true}
              ref={ref => {
                this.cropper = ref;
              }}
              onChange={this.onChange}
            />
          </div>
        </div>
        <div>
          Step 2.
          <Button
            color="primary"
            style={{ marginLeft: "12px" }}
            onClick={this.handleClick}
          >
            Crop
          </Button>
        </div>
      </div>
    );
  }
}

export default CropImage;
