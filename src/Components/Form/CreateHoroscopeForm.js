import React, { Component } from "react";
import './Form.css';

class CreateHoroscopeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      sign: '',
      messages: [],
      id: ''
    }
  }

setSign = (event) => {
    event.preventDefault();
    this.setState({ sign: event.target.value });
  }

clearInputs = () => {
  this.setState({ month: '', sign: '', messages: '' });
    }

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
  }

submitNewHoroscopeButton = (event) => {
  event.preventDefault();
      const newHoroscope = { ...this.state }
      this.props.addHoroscope(newHoroscope);
      this.clearInputs();
  }

  render() {
    return (
      <form className = "form-container" >
        <section className="right-box">
          <div className="add-your-own-horoscope">Add your own horoscope</div>
          <select className="sign-selector" onChange={this.setSign} id="month" name="month">
            <option hidden>Select your Sign</option>
            <option value="1">Aquarius</option>
            <option value="2">Pisces</option>
            <option value="3">Aries</option>
            <option value="4">Taurus</option>
            <option value="4">Gemini</option>
            <option value="4">Cancer</option>
            <option value="4">Leo</option>
            <option value="4">Virgo</option>
            <option value="4">Libra</option>
            <option value="4">Scorpio</option>
            <option value="4">Sagittarius</option>
            <option value="4">Capricorn</option>






          </select>
          <input className="input-field"
              type='text'
              placeholder='Enter your Horoscope Here'
              name='messages'
              value={this.state.messages}
              onChange={event => this.handleChange(event)}
            />
          <button onClick={(event) => this.addHoroscope(event)}>Add Your Horoscope</button>
        </section>
      </form>
    )
  }
}

  export default CreateHoroscopeForm
