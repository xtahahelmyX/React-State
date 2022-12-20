import React, { Component } from "react";
import human from "./Images/human.jpg";
class App extends Component {
  state = {
    Person: {
      fullName: "Taha Helmy",
      bio: "In love with Technology ",
      imgSrc: human,
      profession: "I am a Web-Developer",
    },
    show: false,
    mountedAt: null,
  };

  componentDidMount() {
    this.setState({
      mountedAt: Date.now(),
    });
  }

  toggleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  render() {
    const timeInterval = Date.now() - this.state.mountedAt;

    return (
      <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent:"center" }}>
        <button style={{margin:"0 10px"}} onClick={this.toggleShow}>Toggle Show</button>
        <p style={{marginRight: "10px"}}>Time interval: {timeInterval}</p>
        {this.state.show && (
          <div>
            <h1>{this.state.Person.fullName}</h1>
            <p>{this.state.Person.bio}</p>
            <img
              src={this.state.Person.imgSrc}
              alt={this.state.Person.fullName}
            />
            <p>{this.state.Person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}
export default App;
