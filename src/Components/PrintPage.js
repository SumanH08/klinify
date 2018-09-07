import React from "react";

class PrintPage extends React.Component {
  constructor(props) {
    super(props);
    this.img_url = "";
  }
  componentDidMount(props) {
    console.log("props", this.props);
    window.print();
  }
  render() {
    let imgsrc = this.props.location.search.split("=");
    console.log(imgsrc);
    return (
      <div>
        <img src={`${imgsrc[1]}`} />
      </div>
    );
  }
}

export default PrintPage;
