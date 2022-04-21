import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import CreateHoroscopeForm from "../Form/CreateHoroscopeForm";
import getHoroscopeData from "../../apiCalls";

class App extends Component {
  constructor(){
    super();
    this.state = {
      horoscopes: []
    }
  }

componentDidMount = () => {
  getHoroscopeData()
  .then(data => this.setState({ horoscopes: data}))
}

getHoroscope = () => {
  this.setState({ horoscopes: [...this.state.horoscopes ]});
  console.log("FUCK")
}

addHoroscope = (newHoroscope) => {
  this.setState({ horoscopes: [...this.state.horoscopes, newHoroscope] });
  console.log("Horoscopes", this.state.horoscope)
}

render() {
  return (
    <div className="App">
    <Header />
    <Form addHoroscope={this.state.horoscopes}/>
    <CreateHoroscopeForm />
    </div>
  );
}

}
export default App;
