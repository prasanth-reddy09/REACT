import React from "react";
// import {state} from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.name + " Constructer");
    this.state = {
      user: {
        // avatar_url: "dummy",
        name: "dummy",
        location: "dummy",
      },
    };
  }

  componentDidMount() {
    console.log(this.props.name + " compementDidMount");
    // const data = await fetch(" https://api.github.com/users/akshaymarch7");
    // const json = await data.json();
    // console.log(json);
    // this.setState({ user: json });
  }

  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
  render() {
    console.log(this.props.name + " render");

    return (
      <div className="user">
        <h1>{this.props.name}</h1>
        {/* <img src={this.state.user.avatar_url} width={300} height={500}></img> */}
        {/* <h1>Name : {this.state.user.name}</h1> */}
        {/* <h2>Location : {this.state.user.location.toUpperCase()}</h2> */}
      </div>
    );
  }
}

export default UserClass;
