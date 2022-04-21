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

getHoroscopeButton = (event) => {
  event.preventDefault();
  this.props.getHoroscope(this.state.month)
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
          <button className="submit-button" onClick={e => this.getHoroscopeButton(e)}>Submit</button>
      </section>
    </form>
  )
}

}

export default Form
