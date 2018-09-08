import React from "react";

class PrintPage extends React.Component {
  constructor(props) {
    super(props);
    this.img_url = "";
  }
  componentDidMount(props) {
    console.log("props", this.props);
    setTimeout(function() {
      window.print();
    }, 500);
    window.onfocus = function() {
      setTimeout(function() {
        window.close();
      }, 500);
    };
  }
  render() {
    let imgsrc = this.props.location.search.split("=");
    console.log(imgsrc);
    return (
      <div>
        <img src={`${imgsrc[1]}`} alt="recieved-img" />
      </div>
    );
  }
}

export default PrintPage;
