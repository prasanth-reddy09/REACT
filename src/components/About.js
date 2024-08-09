import User from "./User.js";
import UserClass from "./UserClass.js";
import React from "react";
class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent compementDidMount");
  }

  componentWillUnmount() {
    console.log("Parent compementWillMount");
  }
  render() {
    console.log("Parent Render");
    return (
      <div className="about">
        <h1>About Us ..</h1>
        <h2>I am Prasanth Reddy</h2>
        {/* <User name="Prasanth (function)" /> */}
        <UserClass name="Prasanth" />
      </div>
    );
  }
}

export default About;
