import React,  {Component} from "react";
import './Form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      month: '',
      sign: '',
      messages: [],
      id: ''
    }
  }

  setMonth = (event) => {
  event.preventDefault();
  this.setState({ month: event.target.value });
}

submitButton = (event) => {
  event.preventDefault();
  this.props.getHoroscope(this.state.month)
}

clearInputs = () => {
  this.setState({ month: '', sign: '', messages: '' });
  }

handleChange = (event) => {
  this.setState({ [event.target.name]: event.target.value })
}

submitNewHoroscopeButton = () => {
  event.preventDefault();
     const newHoroscope = { ...this.state }
     this.props.addHoroscope(newHoroscope);
     this.clearInputs();
}

render() {
  return(
    <form className="form-container">
    <section className="left-box">
    <div className="instructions">Select your birthday...</div>
    <select className="month-selector" onChange={this.setMonth} id="month" name="month">
    <option hidden>Select your Month</option>
    <option value="1">Januray</option>
    <option value="2">February</option>
    <option value="3">March</option>
    <option value="4">April</option>
    </select>
    <button className="submit-button" onClick={e => this.submitButton(e)}>Submit</button>
    </section>
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

export default Form
