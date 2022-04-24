import React, { Component } from "react";
import "./App.css";
import Header from "../Header/Header";
import Form from "../Form/Form";
import SingleHoroscope from "../SingleHoroscope/SingleHoroscope";
import LearnMore from "../LearnMore/LearnMore";
import SavedHoroscopes from "../SavedHoroscopes/SavedHoroscopes";
import getHoroscopeData from "../../apiCalls";
import { Route, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(){
    super();
    this.state = {
      allHoroscopes: [],
      userHoroscope: null,
      favorites: []
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

  saveHoroscope = (favoritedHoroscope) => {
    const filteredThing = this.state.favorites.filter(favorite => favorite.sign === favoritedHoroscope.sign)
    !filteredThing[0] && this.setState({ favorites: [...this.state.favorites, favoritedHoroscope ]});
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
    </Route>
    <Route exact path="/horoscope">
      {this.state.userHoroscope === null ? <Redirect to="/" /> : <SingleHoroscope userHoroscope={this.state.userHoroscope} saveHoroscope={this.saveHoroscope}/> }
    </Route>
    <Route exact path="/saved">
      <SavedHoroscopes favorites={this.state.favorites} />
    </Route>
    </div>
  );
}

}
export default App;
