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
