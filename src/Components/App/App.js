import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import CreateHoroscopeForm from "../Form/CreateHoroscopeForm";
import SingleHoroscope from "../SingleHoroscope/SingleHoroscope";
import LearnMore from "../LearnMore/LearnMore";
import getHoroscopeData from "../../apiCalls";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      allHoroscopes: [],
      userHoroscope: null
    }
  }

  componentDidMount = () => {
    getHoroscopeData()
    .then(data => this.setState({ allHoroscopes: data.horoscopes}))
  }

  getHoroscope = (chosenSign) => {
    const foundHoroscope = this.state.allHoroscopes.find(horoscope => {
      if (horoscope.sign === chosenSign){
        return horoscope
      }
    })
    this.setState({ userHoroscope: foundHoroscope })
  }

  addHoroscope = (newHoroscope) => {
    this.setState({ horoscopes: [...this.state.horoscopes, newHoroscope] });
    console.log("Horoscopes", this.state.horoscope)
  }

  resetHome = () => {
    return(
    this.setState ({ userHoroscope: null})
    )
  }

render() {
  return (
    <div className="App">
    {this.state.userHoroscope !== null ? <Redirect to="/horoscope" /> : "" }
    <Header resetHome={this.resetHome}/>
    <Route exact path="/" >
          <Form getHoroscope={this.getHoroscope}/>
          <CreateHoroscopeForm addHoroscope={this.state.horoscopes}/>
    </Route>
      <Route exact path="/horoscope">
          {this.state.userHoroscope === null ? <Redirect to="/" /> : <SingleHoroscope userHoroscope={this.state.userHoroscope}/> }
       </Route>

    </div>

  );
}

}
export default App;
